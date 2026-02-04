import { Button } from "@/components/ui/button";

interface QuickRepliesProps {
  suggestions: string[];
  onSelect: (message: string) => void;
}

const QuickReplies = ({ suggestions, onSelect }: QuickRepliesProps) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 px-4 py-2">
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion}
          variant="outline"
          size="sm"
          onClick={() => onSelect(suggestion)}
          className="rounded-full border-primary/30 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};

export default QuickReplies;
