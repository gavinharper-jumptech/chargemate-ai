import { useState } from "react";
import { useN8nChat } from "@/hooks/use-n8n-chat";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";

const Index = () => {
  const [showQuickActions, setShowQuickActions] = useState(true);
  const { messages, sendMessage, isLoading } = useN8nChat();

  const handleSend = (content: string) => {
    setShowQuickActions(false);
    sendMessage(content);
  };

  const handleQuickAction = (message: string) => {
    handleSend(message);
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <ChatHeader />
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
