import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";

const Index = () => {
  const [showQuickActions, setShowQuickActions] = useState(true);

  const { messages, sendMessage, status } = useChat({
    // Configure your n8n webhook endpoint here
    // Example: api: "https://your-n8n-instance.com/webhook/your-webhook-id"
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });

  const isLoading = status === "submitted" || status === "streaming";

  const handleSend = (content: string) => {
    setShowQuickActions(false);
    sendMessage({ text: content });
  };

  const handleQuickAction = (message: string) => {
    handleSend(message);
  };

  // Transform messages to include content string
  const transformedMessages = messages.map((msg) => ({
    id: msg.id,
    role: msg.role,
    content:
      msg.parts
        ?.filter((part): part is { type: "text"; text: string } => part.type === "text")
        .map((part) => part.text)
        .join("") || "",
  }));

  return (
    <div className="flex h-screen flex-col bg-background">
      <ChatHeader />
      <ChatMessages
        messages={transformedMessages}
        isLoading={isLoading}
        showQuickActions={showQuickActions}
        onQuickAction={handleQuickAction}
      />
      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
};

export default Index;
