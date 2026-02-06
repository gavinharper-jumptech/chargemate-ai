import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatConfigProvider } from "@/context/ChatConfigContext";
import Index from "./pages/Index";
import ChatWindow from "./components/chat/ChatWindow";
import NotFound from "./pages/NotFound";
import VindisPreview from "./pages/VindisPreview";

const queryClient = new QueryClient();

/**
 * Read mode from URL parameter for testing
 * Usage: ?mode=window or ?mode=fullscreen
 */
function getModeFromUrl(): "window" | "fullscreen" | undefined {
  if (typeof window === "undefined") return undefined;
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");
  if (mode === "window" || mode === "fullscreen") return mode;
  return undefined;
}

/**
 * Read inputPosition from URL parameter for testing
 * Usage: ?inputPosition=above or ?inputPosition=below
 */
function getInputPositionFromUrl(): "above" | "below" | undefined {
  if (typeof window === "undefined") return undefined;
  const params = new URLSearchParams(window.location.search);
  const pos = params.get("inputPosition");
  if (pos === "above" || pos === "below") return pos;
  return undefined;
}

const App = () => {
  const urlMode = getModeFromUrl();
  const urlInputPosition = getInputPositionFromUrl();
  
  // Build override config from URL parameters
  const overrideConfig = (urlMode || urlInputPosition) ? {
    ...(urlMode && { mode: urlMode }),
    ...(urlInputPosition && { inputPosition: urlInputPosition }),
  } : undefined;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ChatConfigProvider overrideConfig={overrideConfig}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  urlMode === "window" ? (
                    <div className="h-screen bg-muted/30">
                      <div className="p-8 max-w-2xl">
                        <h1 className="text-2xl font-bold mb-2">Window Mode Test</h1>
                        <p className="text-muted-foreground">
                          Click the chat button in the bottom-right corner to open the chat window.
                        </p>
                      </div>
                      <ChatWindow position="bottom-right" />
                    </div>
                  ) : (
                    <Index className="flex h-screen flex-col bg-background overflow-hidden" />
                  )
                } 
              />
              <Route path="/vindis-preview" element={<VindisPreview />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ChatConfigProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
