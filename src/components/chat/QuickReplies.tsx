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
          className="border-[var(--chip-border)] bg-[hsl(var(--chip-bg))] text-[hsl(var(--chip-text))] transition-colors h-auto py-2 px-3 hover:bg-[hsl(var(--chip-hover-bg))] hover:border-[hsl(var(--chip-hover-border))] hover:text-[hsl(var(--chip-hover-text))]"
          style={{ borderRadius: 'var(--chip-radius)' }}
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};

export default QuickReplies;
