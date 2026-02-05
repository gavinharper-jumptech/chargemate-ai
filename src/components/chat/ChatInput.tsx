import { useState, FormEvent, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChatConfig } from "@/context/ChatConfigContext";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const config = useChatConfig();
  const [input, setInput] = useState("");

  // Embedded layout only applies in fullscreen mode
  const useEmbeddedLayout = config.mode !== "window" && config.inputLayout === "embedded";
  
  // Show text button only in fullscreen mode when sendButtonText is configured
  const showTextButton = config.mode !== "window" && config.i18n?.sendButtonText;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Embedded layout: input and button in one container
  if (useEmbeddedLayout) {
    return (
      <form
        onSubmit={handleSubmit}
        className="border-t border-border bg-card p-4"
      >
        <div 
          className="flex items-stretch border border-input bg-[hsl(var(--input-container-bg))] overflow-hidden"
          style={{ borderRadius: 'var(--input-radius)' }}
        >
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={config.i18n?.inputPlaceholder || "Ask me anything about EV home charging..."}
            className="min-h-[44px] max-h-32 resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 text-[hsl(var(--input-text))]"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={cn(
              "h-auto shrink-0 px-6 self-stretch hover:bg-[hsl(var(--primary-hover))]",
              showTextButton ? "min-w-[140px]" : "w-14"
            )}
            style={{ 
              borderRadius: 'var(--button-radius)',
              backgroundColor: 'hsl(var(--primary))',
            }}
          >
            {showTextButton ? config.i18n?.sendButtonText : <Send className="h-5 w-5" />}
          </Button>
        </div>
      </form>
    );
  }

  // Separate layout (default): input and button side by side with gap
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 border-t border-border bg-card p-4"
    >
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={config.i18n?.inputPlaceholder || "Ask me anything about EV home charging..."}
        className="min-h-[44px] max-h-32 resize-none border-input bg-background text-[hsl(var(--input-text))]"
        style={{ borderRadius: 'var(--input-radius)' }}
        disabled={isLoading}
      />
      {showTextButton ? (
        <Button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="h-11 shrink-0 px-4 hover:bg-[hsl(var(--primary-hover))]"
          style={{ 
            borderRadius: 'var(--button-radius)',
            backgroundColor: 'hsl(var(--primary))',
          }}
        >
          {config.i18n?.sendButtonText}
        </Button>
      ) : (
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isLoading}
          className="h-11 w-11 shrink-0 hover:bg-[hsl(var(--primary-hover))]"
          style={{ 
            borderRadius: 'var(--button-radius)',
            backgroundColor: 'hsl(var(--primary))',
          }}
        >
          <Send className="h-5 w-5" />
        </Button>
      )}
    </form>
  );
};

export default ChatInput;
