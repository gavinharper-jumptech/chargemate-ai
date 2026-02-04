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

/**
 * Check if embedded mode is requested via URL parameter
 */
function isEmbeddedViaUrl(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.get("embedded") === "true" || params.get("embed") === "true";
}

export function ChatConfigProvider({
  children,
  overrideConfig,
}: ChatConfigProviderProps) {
  const config = useMemo(() => {
    const baseConfig = getResolvedConfig();
    
    // Check for URL-based embedded mode
    const urlEmbedded = isEmbeddedViaUrl();

    if (overrideConfig) {
      return {
        ...baseConfig,
        ...overrideConfig,
        isEmbedded: overrideConfig.isEmbedded ?? urlEmbedded ?? baseConfig.isEmbedded,
      };
    }

    return {
      ...baseConfig,
      isEmbedded: urlEmbedded || baseConfig.isEmbedded,
    };
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
