const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-chat-assistant px-4 py-3">
        <span
          className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot"
          style={{ animationDelay: "0s" }}
        />
        <span
          className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot"
          style={{ animationDelay: "0.16s" }}
        />
        <span
          className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce-dot"
          style={{ animationDelay: "0.32s" }}
        />
      </div>
    </div>
  );
};

export default TypingIndicator;
