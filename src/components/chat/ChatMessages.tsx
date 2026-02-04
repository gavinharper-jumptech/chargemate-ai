import { useEffect, useRef, useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import QuickActions from "./QuickActions";
import QuickReplies from "./QuickReplies";
import { extractSuggestions } from "@/lib/extractSuggestions";
import { Zap } from "lucide-react";

interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant" | "system" | "data";
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading: boolean;
  showQuickActions: boolean;
  onQuickAction: (message: string) => void;
}

const WelcomeMessage = () => (
  <div className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
      <Zap className="h-8 w-8 text-primary" />
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-foreground">
        Hi! I'm your EV Home Charging Assistant 🔌
      </h2>
      <p className="max-w-md text-muted-foreground">
        I can help you with everything about charging your electric vehicle at home — 
        from installation tips to cost calculations and product recommendations.
      </p>
    </div>
  </div>
);

const ChatMessages = ({
  messages,
  isLoading,
  showQuickActions,
  onQuickAction,
}: ChatMessagesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Extract suggestions from the last assistant message
  const quickReplySuggestions = useMemo(() => {
    if (isLoading) return [];
    
    const filteredMessages = messages.filter(
      (m) => m.role === "user" || m.role === "assistant"
    );
    const lastMessage = filteredMessages[filteredMessages.length - 1];
    
    if (lastMessage?.role === "assistant") {
      return extractSuggestions(lastMessage.content);
    }
    return [];
  }, [messages, isLoading]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <ScrollArea className="flex-1" ref={scrollRef}>
      <div className="flex flex-col gap-4 p-4">
        <WelcomeMessage />
        
        {showQuickActions && (
          <div className="flex justify-center">
            <QuickActions onSelect={onQuickAction} />
          </div>
        )}

        {messages
          .filter((m) => m.role === "user" || m.role === "assistant")
          .map((message) => (
            <MessageBubble
              key={message.id}
              content={message.content}
              role={message.role as "user" | "assistant"}
            />
          ))}

        {isLoading && <TypingIndicator />}

        {!isLoading && quickReplySuggestions.length > 0 && (
          <QuickReplies
            suggestions={quickReplySuggestions}
            onSelect={onQuickAction}
          />
        )}
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
