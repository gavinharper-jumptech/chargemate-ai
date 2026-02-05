import { useEffect, useRef, useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import CategorizedQuickActions from "./CategorizedQuickActions";
import QuickReplies from "./QuickReplies";
import { extractSuggestions } from "@/lib/extractSuggestions";
import { useChatConfig } from "@/context/ChatConfigContext";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant" | "system" | "data";
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onQuickAction: (message: string) => void;
  /** Hide welcome section and quick actions (used when inputPosition is 'above') */
  hideWelcome?: boolean;
}

const WelcomeMessage = () => {
  const { welcomeTitle, welcomeMessage } = useChatConfig();

  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-6 text-center">
      <h2 className="text-xl font-semibold text-foreground">
        {welcomeTitle}
      </h2>
      <p className="max-w-md text-muted-foreground">
        {welcomeMessage}
      </p>
    </div>
  );
};

const ChatMessages = ({
  messages,
  isLoading,
  onQuickAction,
  hideWelcome = false,
}: ChatMessagesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const prevMessageCountRef = useRef(0);
  const wasLoadingRef = useRef(false);
  const { mode } = useChatConfig();

  // Apply container styling only in fullscreen mode
  const useContainerStyling = mode !== "window";

  // Filter to only user/assistant messages
  const filteredMessages = useMemo(
    () => messages.filter((m) => m.role === "user" || m.role === "assistant"),
    [messages]
  );

  // Extract suggestions from the last assistant message
  const quickReplySuggestions = useMemo(() => {
    if (isLoading) return [];
    
    const lastMessage = filteredMessages[filteredMessages.length - 1];
    
    if (lastMessage?.role === "assistant") {
      return extractSuggestions(lastMessage.content);
    }
    return [];
  }, [filteredMessages, isLoading]);

  // Smart scroll effect
  useEffect(() => {
    const viewport = scrollRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (!viewport) return;

    const currentCount = filteredMessages.length;
    const prevCount = prevMessageCountRef.current;
    const wasLoading = wasLoadingRef.current;

    // New message arrived
    if (currentCount > prevCount) {
      const newMessage = filteredMessages[currentCount - 1];
      
      if (newMessage.role === "user") {
        // User sent a message - scroll to bottom to show their message + typing indicator
        viewport.scrollTop = viewport.scrollHeight;
      } else if (newMessage.role === "assistant") {
        // AI responded - scroll to show the START of the response
        const messageEl = messageRefs.current.get(newMessage.id);
        if (messageEl) {
          // Small delay to ensure render is complete
          requestAnimationFrame(() => {
            messageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      }
    } 
    // Loading started (typing indicator appeared)
    else if (isLoading && !wasLoading) {
      viewport.scrollTop = viewport.scrollHeight;
    }

    // Update refs for next comparison
    prevMessageCountRef.current = currentCount;
    wasLoadingRef.current = isLoading;
  }, [filteredMessages, isLoading]);

  // Scroll when quick replies appear
  useEffect(() => {
    if (!isLoading && quickReplySuggestions.length > 0) {
      const viewport = scrollRef.current?.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        // Gentle scroll to ensure chips are visible without jumping
        const scrollNeeded = viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight;
        if (scrollNeeded > 0 && scrollNeeded < 100) {
          viewport.scrollTop = viewport.scrollHeight;
        }
      }
    }
  }, [quickReplySuggestions, isLoading]);

  return (
    <ScrollArea className="flex-1 min-h-0" ref={scrollRef}>
      <div className="flex flex-col gap-4 p-4">
        {!hideWelcome && <WelcomeMessage />}
        
        {!hideWelcome && (
          <div className="flex justify-center">
            <CategorizedQuickActions onSelect={onQuickAction} />
          </div>
        )}

        {/* Bordered conversation container - always visible */}
        <div
          className={cn(
            "flex flex-col gap-4",
            useContainerStyling && "p-4 mx-auto bg-[hsl(var(--message-container-bg))]"
          )}
          style={useContainerStyling ? {
            border: 'var(--message-container-border)',
            maxWidth: 'var(--message-container-max-width)',
            minHeight: 'var(--message-container-min-height)',
            width: '100%',
          } : undefined}
        >
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              ref={(el) => {
                if (el) {
                  messageRefs.current.set(message.id, el);
                } else {
                  messageRefs.current.delete(message.id);
                }
              }}
            >
              <MessageBubble
                content={message.content}
                role={message.role as "user" | "assistant"}
              />
            </div>
          ))}

          {isLoading && <TypingIndicator />}

          {!isLoading && quickReplySuggestions.length > 0 && (
            <QuickReplies
              suggestions={quickReplySuggestions}
              onSelect={onQuickAction}
            />
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
