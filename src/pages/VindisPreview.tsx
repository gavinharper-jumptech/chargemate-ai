import { ChatConfigProvider } from "@/context/ChatConfigContext";
import Index from "./Index";

// Vindis configuration - demonstrates theming via widget config only
const vindisConfig = {
  mode: 'fullscreen' as const,
  inputPosition: 'above' as const,
  inputLayout: 'embedded' as const,
  isEmbedded: true,
  
  categories: [
    {
      title: 'Installation',
      questions: [
        'How long does a home survey take?',
        'What photos do I need to provide?',
        'Do I need my own driveway for install?',
        'Is standard installation included?'
      ]
    },
    {
      title: 'Costs & Grants',
      questions: [
        'What grants are available?',
        'How much does installation cost?',
        'Are there any hidden fees?'
      ]
    },
    {
      title: 'Technology',
      questions: [
        'What charger types do you offer?',
        'Do you support solar integration?',
        'Can I use any charging app?'
      ]
    },
    {
      title: 'Range & Battery',
      questions: [
        'How far can I drive on a full charge?',
        'How long does charging take?',
        'Does cold weather affect range?'
      ]
    }
  ],
  
  i18n: {
    title: 'ASK VINDIS AI SPECIALIST',
    subtitle: 'Explore common questions by category or ask our specialist a bespoke inquiry.',
    inputPlaceholder: 'Type your own question here...',
    sendButtonText: 'ASK AI SPECIALIST',
    getStarted: 'Choose a topic to explore'
  }
};

// Vindis CSS variables - demonstrates theming via CSS only
const vindisStyles: React.CSSProperties & Record<string, string> = {
  // Grey background throughout
  '--jt-ev-chat-background': '210 20% 98%',
  '--jt-ev-chat-card': '210 20% 98%',
  
  // Primary = teal-green for button
  '--jt-ev-chat-primary': '172 100% 35%',
  '--jt-ev-chat-primary-foreground': '0 0% 100%',
  
  // Muted text styling
  '--jt-ev-chat-muted-foreground': '210 10% 45%',
  
  // Border color for chips (grey)
  '--jt-ev-chat-border': '210 10% 75%',
  '--jt-ev-chat-chip-border': '210 10% 75%',
  
  // SQUARE corners for everything
  '--jt-ev-chat-input-radius': '0',
  '--jt-ev-chat-button-radius': '0',
  '--jt-ev-chat-chip-radius': '0',
  
  // Chip hover: white bg, teal-green border
  '--jt-ev-chat-chip-hover-bg': '0 0% 100%',
  '--jt-ev-chat-chip-hover-border': '172 100% 35%',
  '--jt-ev-chat-chip-hover-text': '172 100% 35%',
  
  // Input box: light gray border, white background, dark text
  '--jt-ev-chat-input': '220 13% 91%',
  '--jt-ev-chat-input-container-bg': '0 0% 100%',
  '--jt-ev-chat-input-text': '220 13% 26%',
  
  // Message container: teal-green border, white bg
  '--jt-ev-chat-message-container-border': '2px solid hsl(172 100% 35%)',
  '--jt-ev-chat-message-container-max-width': '100%',
  '--jt-ev-chat-message-container-bg': '0 0% 100%',
  '--jt-ev-chat-message-container-min-height': '120px',
  '--jt-ev-chat-assistant': '203 100% 12%',
  '--jt-ev-chat-assistant-foreground': '0 0% 100%',
  
  // Square message bubbles
  '--jt-ev-chat-message-bubble-radius': '0',
  '--jt-ev-chat-message-bubble-tail-radius': '0',
  
  // Font
  '--jt-ev-chat-font-family': 'system-ui, sans-serif',
};

const VindisPreview = () => {
  return (
    <div 
      className="jt-ev-chat-widget h-screen"
      style={vindisStyles}
    >
      <ChatConfigProvider overrideConfig={vindisConfig}>
        <Index className="flex h-full flex-col bg-background" />
      </ChatConfigProvider>
    </div>
  );
};

export default VindisPreview;
