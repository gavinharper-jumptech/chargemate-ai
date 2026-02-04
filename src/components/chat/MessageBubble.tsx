import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  content: string;
  role: "user" | "assistant";
}

const MessageBubble = ({ content, role }: MessageBubbleProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex w-full animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 md:max-w-[70%]",
          isUser
            ? "rounded-br-md bg-chat-user text-chat-user-foreground"
            : "rounded-bl-md bg-chat-assistant text-chat-assistant-foreground"
        )}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed">{content}</p>
        ) : (
          <div className="prose prose-sm max-w-none text-chat-assistant-foreground prose-headings:text-chat-assistant-foreground prose-p:text-chat-assistant-foreground prose-strong:text-chat-assistant-foreground prose-li:text-chat-assistant-foreground">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
