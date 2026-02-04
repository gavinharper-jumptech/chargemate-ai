import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChatConfigProvider } from "@/context/ChatConfigContext";
import Index from "./pages/Index";
import "./index.css";

const queryClient = new QueryClient();

/**
 * Mount the EV Chat widget into the specified container
 */
function mountWidget() {
  const config = window.EVChatConfig;

  if (!config?.container) {
    console.error(
      "[EV Chat Widget] No container specified in window.EVChatConfig"
    );
    return;
  }

  const container = document.querySelector(config.container);

  if (!container) {
    console.error(
      `[EV Chat Widget] Container not found: ${config.container}`
    );
    return;
  }

  const root = createRoot(container);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ChatConfigProvider overrideConfig={{ isEmbedded: true }}>
            <div className="jt-ev-chat-widget">
              <Index />
            </div>
            <Toaster />
            <Sonner />
          </ChatConfigProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}

// Auto-mount when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountWidget);
} else {
  mountWidget();
}

// Export for manual mounting
export { mountWidget };
