import { createContext, useContext, useMemo, ReactNode } from "react";
import {
  ResolvedConfig,
  getResolvedConfig,
  EVChatConfig,
} from "@/lib/chat-config";

interface ChatConfigContextValue extends ResolvedConfig {}

const ChatConfigContext = createContext<ChatConfigContextValue | null>(null);

interface ChatConfigProviderProps {
  children: ReactNode;
  /** Override config for widget mode - otherwise reads from window.EVChatConfig */
  overrideConfig?: Partial<EVChatConfig> & { isEmbedded?: boolean };
}

export function ChatConfigProvider({
  children,
  overrideConfig,
}: ChatConfigProviderProps) {
  const config = useMemo(() => {
    const baseConfig = getResolvedConfig();

    if (overrideConfig) {
      return {
        ...baseConfig,
        ...overrideConfig,
        isEmbedded: overrideConfig.isEmbedded ?? baseConfig.isEmbedded,
      };
    }

    return baseConfig;
  }, [overrideConfig]);

  return (
    <ChatConfigContext.Provider value={config}>
      {children}
    </ChatConfigContext.Provider>
  );
}

export function useChatConfig(): ChatConfigContextValue {
  const context = useContext(ChatConfigContext);

  if (!context) {
    throw new Error("useChatConfig must be used within a ChatConfigProvider");
  }

  return context;
}

export { ChatConfigContext };
