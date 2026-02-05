import { useState, FormEvent, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChatConfig } from "@/context/ChatConfigContext";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const config = useChatConfig();
  const [input, setInput] = useState("");

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
        className="min-h-[44px] max-h-32 resize-none rounded-xl border-input bg-background"
        disabled={isLoading}
      />
      {showTextButton ? (
        <Button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="h-11 shrink-0 rounded-xl bg-primary hover:bg-primary/90 px-4"
        >
          {config.i18n?.sendButtonText}
        </Button>
      ) : (
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isLoading}
          className="h-11 w-11 shrink-0 rounded-xl bg-primary hover:bg-primary/90"
        >
          <Send className="h-5 w-5" />
        </Button>
      )}
    </form>
  );
};

export default ChatInput;
