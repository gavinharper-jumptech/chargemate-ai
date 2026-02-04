import { Plug, DollarSign, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onSelect: (message: string) => void;
}

const quickActions = [
  {
    label: "How do I install a home charger?",
    icon: Plug,
    message: "How do I install a home charger?",
  },
  {
    label: "What does home charging cost?",
    icon: DollarSign,
    message: "What does home charging cost?",
  },
  {
    label: "Which charger should I buy?",
    icon: ShoppingCart,
    message: "Which charger should I buy?",
  },
];

const QuickActions = ({ onSelect }: QuickActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-3">
      {quickActions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          onClick={() => onSelect(action.message)}
          className="gap-2 rounded-full border-primary/30 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <action.icon className="h-4 w-4" />
          {action.label}
        </Button>
      ))}
    </div>
  );
};

export default QuickActions;
