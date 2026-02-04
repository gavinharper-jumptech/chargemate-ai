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
          <div className="prose prose-sm max-w-none text-chat-assistant-foreground prose-headings:text-chat-assistant-foreground prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2 prose-h1:text-lg prose-h2:text-base prose-p:text-chat-assistant-foreground prose-p:my-2 prose-p:leading-relaxed prose-strong:text-chat-assistant-foreground prose-ul:my-2 prose-ul:pl-6 prose-ul:list-disc prose-ol:my-2 prose-ol:pl-6 prose-ol:list-decimal prose-li:text-chat-assistant-foreground prose-li:my-1 prose-li:marker:text-chat-assistant-foreground">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
