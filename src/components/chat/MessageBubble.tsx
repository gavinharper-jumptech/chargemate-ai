import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
          "max-w-[85%] px-4 py-3 md:max-w-[70%] text-left",
          isUser
            ? "bg-chat-user text-chat-user-foreground"
            : "bg-chat-assistant text-chat-assistant-foreground"
        )}
        style={{
          borderRadius: `var(--message-bubble-radius) var(--message-bubble-radius) ${
            isUser 
              ? 'var(--message-bubble-tail-radius) var(--message-bubble-radius)'
              : 'var(--message-bubble-radius) var(--message-bubble-tail-radius)'
          }`,
        }}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed">{content}</p>
        ) : (
          <div className="prose prose-sm max-w-none text-left text-chat-assistant-foreground prose-headings:text-chat-assistant-foreground prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2 prose-h1:text-lg prose-h2:text-base prose-p:text-chat-assistant-foreground prose-p:my-2 prose-p:leading-relaxed prose-strong:text-chat-assistant-foreground prose-ul:my-2 prose-ul:pl-6 prose-ul:list-disc prose-ol:my-2 prose-ol:pl-6 prose-ol:list-decimal prose-li:text-chat-assistant-foreground prose-li:my-1 prose-li:marker:text-chat-assistant-foreground prose-img:rounded prose-img:max-w-full prose-img:h-auto prose-img:my-2 [&>*]:text-left">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "underline break-all font-medium transition-colors",
                      role === "assistant"
                        ? "text-chat-assistant-link hover:text-chat-assistant-link-hover"
                        : "text-chat-user-link hover:text-chat-user-link-hover"
                    )}
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt || ""}
                    className="rounded max-w-full h-auto my-2"
                    loading="lazy"
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
