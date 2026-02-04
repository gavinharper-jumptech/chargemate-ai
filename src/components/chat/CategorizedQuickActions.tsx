import { Button } from "@/components/ui/button";
import { QuestionCategory } from "@/lib/chat-config";
import { useChatConfig } from "@/context/ChatConfigContext";
import {
  Plug,
  DollarSign,
  ShoppingCart,
  HelpCircle,
  Zap,
  Settings,
  Info,
  LucideIcon,
} from "lucide-react";

interface CategorizedQuickActionsProps {
  onSelect: (message: string) => void;
}

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Plug,
  DollarSign,
  ShoppingCart,
  HelpCircle,
  Zap,
  Settings,
  Info,
};

function getIcon(iconName?: string): LucideIcon {
  if (!iconName) return HelpCircle;
  return iconMap[iconName] || HelpCircle;
}

const CategorizedQuickActions = ({ onSelect }: CategorizedQuickActionsProps) => {
  const { categories } = useChatConfig();

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 px-4 py-3">
      {categories.map((category: QuestionCategory) => {
        const Icon = getIcon(category.icon);

        return (
          <div key={category.title} className="space-y-2">
            {/* Category header */}
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icon className="h-4 w-4" />
              <span>{category.title}</span>
            </div>

            {/* Question chips */}
            <div className="flex flex-wrap gap-2">
              {category.questions.map((question) => (
                <Button
                  key={question}
                  variant="outline"
                  size="sm"
                  onClick={() => onSelect(question)}
                  className="gap-2 rounded-full border-primary/30 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-left h-auto py-2 px-3"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorizedQuickActions;
