import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChatConfigProvider } from "@/context/ChatConfigContext";
import { CreateChatOptions, getConfig } from "@/lib/chat-config";
import Index from "./pages/Index";
import ChatWindow from "./components/chat/ChatWindow";
import "./index.css";

// Store root for cleanup
let widgetRoot: Root | null = null;

/**
 * Create and mount the EV Chat widget
 *
 * @example
 * // Fullscreen mode (fills container)
 * createChat({
 *   webhookUrl: 'https://...',
 *   target: '#ev-chat',
 *   mode: 'fullscreen'
 * });
 *
 * @example
 * // Window mode (floating button)
 * createChat({
 *   webhookUrl: 'https://...',
 *   mode: 'window',
 *   position: 'bottom-right'
 * });
 */
export function createChat(options: CreateChatOptions = {}): () => void {
  const config = getConfig(options);
  const queryClient = new QueryClient();

  // For window mode, we can mount to body if no target specified
  const targetSelector =
    config.mode === "window" ? config.target || "body" : config.target;

  const container = document.querySelector(targetSelector!);

  if (!container) {
    console.error(`[EV Chat Widget] Container not found: ${targetSelector}`);
    return () => {};
  }

  // Create a wrapper div for the widget
  const widgetContainer = document.createElement("div");
  widgetContainer.className = "jt-ev-chat-widget";
  widgetContainer.setAttribute("data-ev-chat-root", "true");

  if (config.mode === "window") {
    // For window mode, append to body
    document.body.appendChild(widgetContainer);
  } else {
    // For fullscreen mode, mount inside target
    container.appendChild(widgetContainer);
  }

  widgetRoot = createRoot(widgetContainer);

  const WidgetContent =
    config.mode === "window" ? (
      <ChatWindow position={config.position} />
    ) : (
      <Index />
    );

  widgetRoot.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ChatConfigProvider
            overrideConfig={{
              ...config,
              isEmbedded: true,
            }}
          >
            {WidgetContent}
            <Toaster />
            <Sonner />
          </ChatConfigProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );

  // Return cleanup function
  return () => {
    if (widgetRoot) {
      widgetRoot.unmount();
      widgetRoot = null;
    }
    widgetContainer.remove();
  };
}

// Legacy auto-mount for backward compatibility with EVChatConfig
function legacyMount() {
  const config = window.EVChatConfig;

  if (config?.container || config?.target) {
    createChat(config);
  }
}

// Auto-mount when DOM is ready (for legacy script tag usage)
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", legacyMount);
  } else {
    // Small delay to allow EVChatConfig to be set
    setTimeout(legacyMount, 0);
  }
}

// Export for ES module usage
export default createChat;
export type { CreateChatOptions };
