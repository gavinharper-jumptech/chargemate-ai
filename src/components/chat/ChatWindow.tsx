import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Index from "@/pages/Index";

interface ChatWindowProps {
  position?: "bottom-right" | "bottom-left";
}

const ChatWindow = ({ position = "bottom-right" }: ChatWindowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    "bottom-right": "right-4 bottom-4",
    "bottom-left": "left-4 bottom-4",
  };

  const panelPositionClasses = {
    "bottom-right": "right-4 bottom-20",
    "bottom-left": "left-4 bottom-20",
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={cn(
          "fixed z-50 w-[380px] h-[600px] max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden",
          "bg-background border border-border",
          "transition-all duration-300 ease-out",
          panelPositionClasses[position],
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}
      >
        {/* Panel Header with close button */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <MessageCircle className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-medium text-foreground">Chat Assistant</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Chat Content */}
        <div className="h-[calc(100%-56px)]">
          <Index />
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed z-50 flex items-center justify-center",
          "w-14 h-14 rounded-full shadow-lg",
          "bg-primary text-primary-foreground",
          "hover:scale-105 active:scale-95",
          "transition-all duration-200 ease-out",
          positionClasses[position]
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <div
          className={cn(
            "transition-transform duration-200",
            isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
          )}
        >
          <MessageCircle className="h-6 w-6" />
        </div>
        <div
          className={cn(
            "absolute transition-transform duration-200",
            isOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          )}
        >
          <X className="h-6 w-6" />
        </div>
      </button>
    </>
  );
};

export default ChatWindow;
