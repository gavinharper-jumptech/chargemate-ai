import { Zap, Leaf } from "lucide-react";

const ChatHeader = () => {
  return (
    <header className="flex items-center gap-3 border-b border-border bg-card px-6 py-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
        <Zap className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-foreground">EV Home Charging Assistant</h1>
        <p className="text-sm text-muted-foreground">Your friendly guide to home EV charging</p>
      </div>
      <Leaf className="h-6 w-6 text-primary opacity-60" />
    </header>
  );
};

export default ChatHeader;
