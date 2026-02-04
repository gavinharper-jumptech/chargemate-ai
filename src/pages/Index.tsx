import { useState } from "react";
import { useN8nChat } from "@/hooks/use-n8n-chat";
import { useChatConfig } from "@/context/ChatConfigContext";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";

interface IndexProps {
  /** Override default height behavior for embedded contexts */
  className?: string;
}

const Index = ({ className }: IndexProps) => {
  const [showQuickActions, setShowQuickActions] = useState(true);
  const { messages, sendMessage, isLoading } = useN8nChat();
  const { isEmbedded, mode } = useChatConfig();

  const handleSend = (content: string) => {
    setShowQuickActions(false);
    sendMessage(content);
  };

  const handleQuickAction = (message: string) => {
    handleSend(message);
  };

  // Show header only in standalone mode (not embedded, not window mode)
  const showHeader = !isEmbedded && mode !== "window";

  return (
    <div className={className || "flex h-full flex-col bg-background"}>
      {showHeader && <ChatHeader />}
      <ChatMessages
        messages={messages}
        isLoading={isLoading}
        showQuickActions={showQuickActions}
        onQuickAction={handleQuickAction}
      />
      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
};

export default Index;
