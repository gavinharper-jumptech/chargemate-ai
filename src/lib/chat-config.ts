// Widget configuration types and reader

export interface QuestionCategory {
  title: string;
  icon?: string; // Lucide icon name (optional)
  questions: string[];
}

export interface EVChatConfig {
  // Required for embedded mode
  container?: string; // CSS selector for mount point

  // Optional
  webhookUrl?: string;
  brandName?: string;

  // Categorized questions
  categories?: QuestionCategory[];

  // Welcome message customization
  welcomeTitle?: string;
  welcomeMessage?: string;
}

// Extend Window interface to include EVChatConfig
declare global {
  interface Window {
    EVChatConfig?: EVChatConfig;
  }
}

// Default webhook URL (current hardcoded value)
const DEFAULT_WEBHOOK_URL =
  "https://jt-eco.app.n8n.cloud/webhook/1cd4ac0b-7a32-4c9f-9307-d0501ff02822";

// Default categories for standalone mode
export const DEFAULT_CATEGORIES: QuestionCategory[] = [
  {
    title: "Installation",
    icon: "Plug",
    questions: [
      "How do I install a home charger?",
      "What electrical work is needed?",
    ],
  },
  {
    title: "Costs & Savings",
    icon: "DollarSign",
    questions: [
      "What does home charging cost?",
      "Are there any grants available?",
    ],
  },
  {
    title: "Products",
    icon: "ShoppingCart",
    questions: [
      "Which charger should I buy?",
      "What features should I look for?",
    ],
  },
];

// Default welcome messages
const DEFAULT_WELCOME_TITLE = "Hi! I'm your EV Home Charging Assistant 🔌";
const DEFAULT_WELCOME_MESSAGE =
  "I can help you with everything about charging your electric vehicle at home — from installation tips to cost calculations and product recommendations.";

/**
 * Read configuration from window.EVChatConfig or return defaults
 */
export function getConfig(): EVChatConfig {
  const config = window.EVChatConfig || {};

  return {
    container: config.container,
    webhookUrl: config.webhookUrl || DEFAULT_WEBHOOK_URL,
    brandName: config.brandName,
    categories:
      config.categories && config.categories.length > 0
        ? config.categories
        : DEFAULT_CATEGORIES,
    welcomeTitle: config.welcomeTitle || DEFAULT_WELCOME_TITLE,
    welcomeMessage: config.welcomeMessage || DEFAULT_WELCOME_MESSAGE,
  };
}

/**
 * Check if running in embedded mode (config container is specified)
 */
export function isEmbeddedMode(): boolean {
  return Boolean(window.EVChatConfig?.container);
}

/**
 * Get resolved configuration with isEmbedded flag
 */
export interface ResolvedConfig extends EVChatConfig {
  isEmbedded: boolean;
}

export function getResolvedConfig(): ResolvedConfig {
  return {
    ...getConfig(),
    isEmbedded: isEmbeddedMode(),
  };
}
