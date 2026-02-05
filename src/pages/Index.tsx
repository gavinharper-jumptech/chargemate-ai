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
}

const Index = ({ className }: IndexProps) => {
  const { messages, sendMessage, isLoading } = useN8nChat();
  const { isEmbedded, mode, inputPosition } = useChatConfig();

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
      <div className={className || "flex h-full flex-col bg-background"}>
        {showHeader && <ChatHeader />}
        
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
    <div className={className || "flex h-full flex-col bg-background"}>
      {showHeader && <ChatHeader />}
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
