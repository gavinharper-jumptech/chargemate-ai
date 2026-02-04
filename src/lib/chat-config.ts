// Widget configuration types and reader

export interface QuestionCategory {
  title: string;
  icon?: string; // Lucide icon name (optional)
  questions: string[];
}

export interface I18nConfig {
  title?: string;
  subtitle?: string;
  inputPlaceholder?: string;
  getStarted?: string;
}

export interface CreateChatOptions {
  // Required
  webhookUrl?: string;

  // Display
  target?: string; // Default: '#ev-chat'
  mode?: "window" | "fullscreen"; // Default: 'fullscreen'
  position?: "bottom-right" | "bottom-left"; // For window mode

  // Content
  categories?: QuestionCategory[];
  initialMessages?: string[];

  // Text customization
  i18n?: I18nConfig;
}

// Legacy config interface for backward compatibility
export interface EVChatConfig extends CreateChatOptions {
  container?: string; // Alias for target (legacy)
  brandName?: string;
  welcomeTitle?: string;
  welcomeMessage?: string;
}

// Extend Window interface to include EVChatConfig
declare global {
  interface Window {
    EVChatConfig?: EVChatConfig;
  }
}

// Default webhook URL
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

// Default i18n
const DEFAULT_I18N: I18nConfig = {
  title: "Hi! I'm your EV Home Charging Assistant 🔌",
  subtitle:
    "I can help you with everything about charging your electric vehicle at home — from installation tips to cost calculations and product recommendations.",
  inputPlaceholder: "Type your message...",
  getStarted: "Choose a topic to get started",
};

/**
 * Read configuration from window.EVChatConfig or provided options
 */
export function getConfig(options?: CreateChatOptions): EVChatConfig {
  const windowConfig = window.EVChatConfig || {};
  const mergedOptions = { ...windowConfig, ...options };

  return {
    // Target/container
    target: mergedOptions.target || mergedOptions.container || "#ev-chat",
    container: mergedOptions.container,

    // Mode and position
    mode: mergedOptions.mode || "fullscreen",
    position: mergedOptions.position || "bottom-right",

    // Webhook
    webhookUrl: mergedOptions.webhookUrl || DEFAULT_WEBHOOK_URL,

    // Content
    categories:
      mergedOptions.categories && mergedOptions.categories.length > 0
        ? mergedOptions.categories
        : DEFAULT_CATEGORIES,
    initialMessages: mergedOptions.initialMessages,

    // i18n - merge with defaults
    i18n: {
      ...DEFAULT_I18N,
      ...mergedOptions.i18n,
    },

    // Legacy support
    brandName: mergedOptions.brandName,
    welcomeTitle:
      mergedOptions.welcomeTitle ||
      mergedOptions.i18n?.title ||
      DEFAULT_I18N.title,
    welcomeMessage:
      mergedOptions.welcomeMessage ||
      mergedOptions.i18n?.subtitle ||
      DEFAULT_I18N.subtitle,
  };
}

/**
 * Check if running in embedded mode
 */
export function isEmbeddedMode(): boolean {
  return Boolean(window.EVChatConfig?.container || window.EVChatConfig?.target);
}

/**
 * Get resolved configuration with isEmbedded flag
 */
export interface ResolvedConfig extends EVChatConfig {
  isEmbedded: boolean;
}

export function getResolvedConfig(options?: CreateChatOptions): ResolvedConfig {
  return {
    ...getConfig(options),
    isEmbedded: isEmbeddedMode() || Boolean(options),
  };
}
