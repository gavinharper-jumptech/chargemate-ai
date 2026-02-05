import { ChatConfigProvider } from "@/context/ChatConfigContext";
import Index from "./Index";

// Vindis configuration - demonstrates theming via widget config only
const vindisConfig = {
  mode: 'fullscreen' as const,
  inputPosition: 'above' as const,
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
  '--jt-ev-chat-primary': '195 35% 25%',
  '--jt-ev-chat-primary-foreground': '0 0% 100%',
  '--jt-ev-chat-background': '0 0% 100%',
  '--jt-ev-chat-card': '0 0% 100%',
  '--jt-ev-chat-muted-foreground': '210 10% 45%',
  '--jt-ev-chat-border': '210 15% 90%',
  '--jt-ev-chat-assistant': '195 25% 97%',
  '--jt-ev-chat-assistant-foreground': '195 35% 20%',
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
