import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { useN8nChat } from "@/hooks/use-n8n-chat";
import { useChatConfig } from "@/context/ChatConfigContext";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import WelcomeSection from "@/components/chat/WelcomeSection";
import CategorizedQuickActions from "@/components/chat/CategorizedQuickActions";

interface IndexProps {
  /** Override default height behavior for embedded contexts */
  className?: string;
  /** Callback to expose clearMessages function to parent (for window mode) */
  onClearMessagesRef?: (fn: () => void) => void;
}

const Index = ({ className, onClearMessagesRef }: IndexProps) => {
  const { messages, sendMessage, isLoading, clearMessages } = useN8nChat();
  const { isEmbedded, mode, inputPosition } = useChatConfig();

  // Expose clearMessages to parent component (for ChatWindow)
  useEffect(() => {
    onClearMessagesRef?.(clearMessages);
  }, [onClearMessagesRef, clearMessages]);

  const handleSend = (content: string) => {
    sendMessage(content);
  };

  const handleQuickAction = (message: string) => {
    handleSend(message);
  };

  // Hide header when embedded OR when any mode is explicitly set (widget usage)
  const showHeader = !isEmbedded && mode !== "window" && mode !== "fullscreen";

  // Input above layout: welcome + quick actions + input at top, messages scroll below
  // Window mode always uses input-below for natural popup chat UX
  if (inputPosition === "above" && mode !== "window") {
    return (
      <div className={className || "flex h-full flex-col bg-background overflow-hidden relative"}>
        {showHeader && <ChatHeader onNewChat={clearMessages} />}
        
        {/* Floating New Chat button when header is hidden */}
        {!showHeader && messages.length > 0 && (
          <button
            onClick={clearMessages}
            className="absolute top-2 right-2 p-2 rounded-lg hover:bg-muted transition-colors z-10"
            aria-label="Start new chat"
            title="New chat"
          >
            <RotateCcw className="h-5 w-5 text-muted-foreground" />
          </button>
        )}
        
        {/* Static top section */}
        <div className="flex-shrink-0">
          <WelcomeSection />
          <div className="flex justify-center px-4 pb-4">
            <CategorizedQuickActions onSelect={handleQuickAction} />
          </div>
          <ChatInput onSend={handleSend} isLoading={isLoading} />
        </div>
        
        {/* Scrollable messages section */}
        <ChatMessages
          messages={messages}
          isLoading={isLoading}
          onQuickAction={handleQuickAction}
          hideWelcome
        />
      </div>
    );
  }

  // Default: input below layout (traditional chat style)
  return (
    <div className={className || "flex h-full flex-col bg-background overflow-hidden relative"}>
      {showHeader && <ChatHeader onNewChat={clearMessages} />}
      
      {/* Floating New Chat button for fullscreen mode (when header is hidden) */}
      {!showHeader && messages.length > 0 && (
        <button
          onClick={clearMessages}
          className="absolute top-2 right-2 p-2 rounded-lg hover:bg-muted transition-colors z-10"
          aria-label="Start new chat"
          title="New chat"
        >
          <RotateCcw className="h-5 w-5 text-muted-foreground" />
        </button>
      )}
      
      <ChatMessages
        messages={messages}
        isLoading={isLoading}
        onQuickAction={handleQuickAction}
      />
      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
};

export default Index;
