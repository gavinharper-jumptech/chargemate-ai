# EV Chat Widget - User Guide

A customizable, embeddable chat widget for EV home charging assistance.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Installation Methods](#installation-methods)
3. [Configuration Options](#configuration-options)
4. [i18n Configuration](#i18n-configuration)
5. [Question Categories](#question-categories)
6. [CSS Theming Reference](#css-theming-reference)
7. [HSL Color Format](#hsl-color-format)
8. [Complete Examples](#complete-examples)
9. [Mode Comparison](#mode-comparison)
10. [Cleanup](#cleanup)

---

## Quick Start

### Script Installation

Add the stylesheet and script to your HTML:

```html
<!-- Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@v1.0.0/public/widget/style.css">

<!-- Widget Script -->
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@v1.0.0/public/widget/ev-chat.js';
  
  createChat({
    webhookUrl: 'https://your-webhook-url.com/chat'
  });
</script>
```

> **Note**: The widget is served via jsDelivr CDN from GitHub. Use a versioned tag (e.g., `@v1.0.0`) for production stability — each version is cached independently and available immediately. Use `@main` for bleeding-edge development (may serve stale cached files).

### Minimal Fullscreen Example

```html
<div id="ev-chat" style="height: 600px;"></div>

<script type="module">
  import { createChat } from './ev-chat.js';
  createChat();
</script>
```

### Minimal Window Mode Example

```html
<script type="module">
  import { createChat } from './ev-chat.js';
  createChat({
    mode: 'window',
    position: 'bottom-right'
  });
</script>
```

---

## Installation Methods

### ES Module Import (Recommended)

For modern bundlers (Vite, Webpack, etc.):

```javascript
import { createChat } from '@your-org/ev-chat-widget';

createChat({
  webhookUrl: 'https://...',
  target: '#chat-container'
});
```

### Script Tag (Traditional Sites)

```html
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@v1.0.0/public/widget/ev-chat.js';
  createChat({ webhookUrl: 'https://...' });
</script>
```

### Legacy Auto-Mount

For backward compatibility, set `window.EVChatConfig` before loading the script:

```html
<script>
  window.EVChatConfig = {
    container: '#my-chat',
    webhookUrl: 'https://...'
  };
</script>
<script type="module" src="ev-chat.js"></script>
```

---

## Configuration Options

### `createChat(options)`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `webhookUrl` | `string` | (internal default) | n8n webhook endpoint for chat API |
| `target` | `string` | `"#ev-chat"` | CSS selector for mount container |
| `mode` | `"fullscreen"` \| `"window"` | `"fullscreen"` | Display mode |
| `position` | `"bottom-right"` \| `"bottom-left"` | `"bottom-right"` | Floating button position (window mode only) |
| `inputPosition` | `"above"` \| `"below"` | `"below"` | Input field placement relative to messages |
| `inputLayout` | `"separate"` \| `"embedded"` | `"separate"` | Input/button layout style (fullscreen only) |
| `categories` | `QuestionCategory[]` | (see defaults) | Quick question categories |
| `initialMessages` | `string[]` | - | Pre-populated conversation messages |
| `metadata` | `Record<string, unknown>` | - | Arbitrary metadata included in every webhook request |
| `i18n` | `I18nConfig` | (see defaults) | Text customization |

### Example with All Options

```javascript
createChat({
  webhookUrl: 'https://your-api.com/chat',
  target: '#chat-widget',
  mode: 'fullscreen',
  inputPosition: 'above',
  inputLayout: 'embedded',
  categories: [...],
  metadata: { userEmail: 'user@example.com' },
  i18n: {
    title: 'Chat with us!',
    inputPlaceholder: 'Ask a question...'
  }
});
```

---

## Webhook Payload

The widget sends a JSON POST to your `webhookUrl` with this shape:

```json
{
  "action": "sendMessage",
  "message": "user's message text",
  "sessionId": "session-1234567-abcdefg",
  "metadata": { "userEmail": "user@example.com" }
}
```

- `action` is always `"sendMessage"`
- `metadata` is only included if configured via `createChat({ metadata: {...} })`
- If `metadata` is omitted from config, the key is excluded from the payload entirely

---

## i18n Configuration

Customize all user-facing text:

| Property | Default | Description |
|----------|---------|-------------|
| `title` | `"Hi! I'm your EV Home Charging Assistant 🔌"` | Welcome heading |
| `subtitle` | `"I can help you with everything about charging..."` | Welcome description |
| `inputPlaceholder` | `"Type your message..."` | Input field placeholder |
| `getStarted` | `"Choose a topic to get started"` | Quick actions prompt |
| `sendButtonText` | - | Custom send button text (fullscreen only, shows icon if not set) |

### Example

```javascript
createChat({
  i18n: {
    title: 'ASK OUR AI SPECIALIST',
    subtitle: 'Get instant answers about EV charging.',
    inputPlaceholder: 'Type your question here...',
    sendButtonText: 'ASK AI SPECIALIST'
  }
});
```

---

## Question Categories

Structure quick questions into tabbed categories:

```javascript
categories: [
  {
    title: 'Installation',
    icon: 'Plug',  // Optional: Lucide icon name
    questions: [
      'How do I install a home charger?',
      'What electrical work is needed?',
      'Do I need planning permission?'
    ]
  },
  {
    title: 'Costs & Grants',
    icon: 'DollarSign',
    questions: [
      'What grants are available?',
      'How much does installation cost?',
      'Are there any hidden fees?'
    ]
  },
  {
    title: 'Products',
    icon: 'ShoppingCart',
    questions: [
      'Which charger should I buy?',
      'What features should I look for?'
    ]
  }
]
```

### Available Icons

Icons are from [Lucide React](https://lucide.dev/icons/). Common options:
- `Plug`, `Zap`, `Battery`, `Car`
- `DollarSign`, `CreditCard`, `Wallet`
- `ShoppingCart`, `Package`, `Gift`
- `HelpCircle`, `MessageCircle`, `Info`

---

## CSS Theming Reference

Theme the widget using CSS custom properties with the `--jt-ev-chat-` prefix. Set these on your container or in a parent stylesheet.

### Core Colors

| Variable | Description |
|----------|-------------|
| `--jt-ev-chat-background` | Page/widget background |
| `--jt-ev-chat-foreground` | Default text color |
| `--jt-ev-chat-card` | Card/panel backgrounds |
| `--jt-ev-chat-card-foreground` | Card text color |
| `--jt-ev-chat-primary` | Primary accent (buttons, links) |
| `--jt-ev-chat-primary-hover` | Primary hover state |
| `--jt-ev-chat-primary-foreground` | Text on primary backgrounds |
| `--jt-ev-chat-secondary` | Secondary backgrounds |
| `--jt-ev-chat-secondary-foreground` | Secondary text |
| `--jt-ev-chat-muted` | Muted backgrounds |
| `--jt-ev-chat-muted-foreground` | Muted/placeholder text |
| `--jt-ev-chat-accent` | Accent highlights |
| `--jt-ev-chat-accent-foreground` | Text on accents |
| `--jt-ev-chat-border` | Default border color |
| `--jt-ev-chat-ring` | Focus ring color |

### Border Radii

| Variable | Default | Description |
|----------|---------|-------------|
| `--jt-ev-chat-radius` | `1rem` | Global default radius |
| `--jt-ev-chat-input-radius` | (inherits) | Input field corners |
| `--jt-ev-chat-button-radius` | (inherits) | Button corners |
| `--jt-ev-chat-chip-radius` | `9999px` | Quick action chip corners |
| `--jt-ev-chat-message-bubble-radius` | `1rem` | Message bubble corners |
| `--jt-ev-chat-message-bubble-tail-radius` | `0.375rem` | Bubble tail corner |

### Chip Styling (Quick Actions & Replies)

| Variable | Description |
|----------|-------------|
| `--jt-ev-chat-chip-bg` | Chip background (HSL values) |
| `--jt-ev-chat-chip-text` | Chip text color (HSL values) |
| `--jt-ev-chat-chip-border` | Chip border (full CSS, e.g., `hsl(...)`) |
| `--jt-ev-chat-chip-hover-bg` | Hover background (HSL values) |
| `--jt-ev-chat-chip-hover-border` | Hover border (HSL values) |
| `--jt-ev-chat-chip-hover-text` | Hover text color (HSL values) |

### Input Styling

| Variable | Description |
|----------|-------------|
| `--jt-ev-chat-input` | Input border color |
| `--jt-ev-chat-input-text` | Input text color |
| `--jt-ev-chat-input-container-bg` | Input container background |
| `--jt-ev-chat-input-container-border` | Input container border (full CSS) |

### Message Bubbles

| Variable | Description |
|----------|-------------|
| `--jt-ev-chat-user` | User message background |
| `--jt-ev-chat-user-foreground` | User message text |
| `--jt-ev-chat-assistant` | Assistant message background |
| `--jt-ev-chat-assistant-foreground` | Assistant message text |
| `--jt-ev-chat-assistant-link` | Assistant message link color (default: sky-blue) |
| `--jt-ev-chat-assistant-link-hover` | Assistant message link hover color |
| `--jt-ev-chat-user-link` | User message link color (default: inherits foreground) |
| `--jt-ev-chat-user-link-hover` | User message link hover color |

### Message Container (Fullscreen Only)

| Variable | Description |
|----------|-------------|
| `--jt-ev-chat-message-container-border` | Container border (full CSS, e.g., `2px solid hsl(...)`) |
| `--jt-ev-chat-message-container-bg` | Container background |
| `--jt-ev-chat-message-container-max-width` | Maximum width |
| `--jt-ev-chat-message-container-min-height` | Minimum height |

### Tabs

| Variable | Description |
|----------|-------------|
| `--jt-ev-chat-tab-active-border` | Active tab underline color |
| `--jt-ev-chat-tab-container-border` | Tab container bottom border |

### Typography

| Variable | Description |
|----------|-------------|
| `--jt-ev-chat-font-family` | Font stack |

---

## HSL Color Format

CSS variables use **HSL values without the `hsl()` wrapper**:

```css
/* Format: H S% L% (space-separated) */
--jt-ev-chat-primary: 172 100% 35%;     /* Teal green */
--jt-ev-chat-background: 0 0% 100%;     /* White */
--jt-ev-chat-foreground: 220 13% 26%;   /* Dark gray */
```

This format allows the widget to apply opacity modifiers when needed.

**Exception:** Some border variables accept full CSS values:
```css
--jt-ev-chat-chip-border: hsl(214 32% 91%);
--jt-ev-chat-message-container-border: 2px solid hsl(172 100% 35%);
```

---

## Complete Examples

### Basic Integration

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@v1.0.0/public/widget/style.css">
</head>
<body>
  <div id="ev-chat" style="height: 100vh;"></div>
  
  <script type="module">
    import { createChat } from 'https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@v1.0.0/public/widget/ev-chat.js';
    
    createChat({
      webhookUrl: 'https://your-api.com/chat'
    });
  </script>
</body>
</html>
```

### Example Custom Branded Theme

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <style>
    #chat-container {
      height: 100vh;
      
      /* Grey background */
      --jt-ev-chat-background: 210 20% 98%;
      --jt-ev-chat-card: 210 20% 98%;
      
      /* Dark navy primary */
      --jt-ev-chat-primary: 203 100% 12%;
      --jt-ev-chat-primary-hover: 203 100% 18%;
      --jt-ev-chat-primary-foreground: 0 0% 100%;
      
      /* Square corners everywhere */
      --jt-ev-chat-input-radius: 0;
      --jt-ev-chat-button-radius: 0;
      --jt-ev-chat-chip-radius: 0;
      --jt-ev-chat-message-bubble-radius: 0;
      --jt-ev-chat-message-bubble-tail-radius: 0;
      
      /* White chips with gray border */
      --jt-ev-chat-chip-bg: 0 0% 100%;
      --jt-ev-chat-chip-text: 203 100% 12%;
      --jt-ev-chat-chip-border: hsl(214 32% 91%);
      
      /* Teal hover state */
      --jt-ev-chat-chip-hover-bg: 0 0% 100%;
      --jt-ev-chat-chip-hover-border: 172 100% 35%;
      --jt-ev-chat-chip-hover-text: 203 100% 12%;
      
      /* Teal message container border */
      --jt-ev-chat-message-container-border: 2px solid hsl(172 100% 35%);
      --jt-ev-chat-message-container-bg: 0 0% 100%;
      --jt-ev-chat-message-container-min-height: 120px;
      
      /* Teal user bubbles, navy assistant bubbles */
      --jt-ev-chat-user: 172 100% 35%;
      --jt-ev-chat-user-foreground: 0 0% 100%;
      --jt-ev-chat-assistant: 203 100% 12%;
      --jt-ev-chat-assistant-foreground: 0 0% 100%;
      
      /* Tab styling */
      --jt-ev-chat-tab-active-border: 172 100% 35%;
      --jt-ev-chat-tab-container-border: transparent;
    }
  </style>
</head>
<body>
  <div id="chat-container" class="jt-ev-chat-widget"></div>
  
  <script type="module">
    import { createChat } from './ev-chat.js';
    
    createChat({
      target: '#chat-container',
      mode: 'fullscreen',
      inputPosition: 'above',
      inputLayout: 'embedded',
      
      categories: [
        {
          title: 'Installation',
          questions: [
            'How long does a home survey take?',
            'What photos do I need to provide?',
            'Is standard installation included?'
          ]
        },
        {
          title: 'Costs & Grants',
          questions: [
            'What grants are available?',
            'How much does installation cost?'
          ]
        }
      ],
      
      i18n: {
        title: 'ASK AI SPECIALIST',
        subtitle: 'Explore common questions or ask a bespoke inquiry.',
        inputPlaceholder: 'Type your own question here...',
        sendButtonText: 'ASK AI SPECIALIST'
      }
    });
  </script>
</body>
</html>
```

---

## Mode Comparison

| Feature | Fullscreen | Window |
|---------|------------|--------|
| **Container** | Fills target element | Floating popup |
| **Trigger** | Always visible | Floating button |
| **Input position** | Configurable (`above`/`below`) | Always below |
| **Input layout** | Configurable (`separate`/`embedded`) | Always separate |
| **Message container border** | Configurable | Not shown |
| **Send button** | Text or icon | Icon only |
| **Best for** | Dedicated chat pages | Website overlay |

---

## Cleanup

The `createChat()` function returns a cleanup function to unmount the widget:

```javascript
const cleanup = createChat({
  webhookUrl: 'https://...',
  mode: 'window'
});

// Later, to remove the widget:
cleanup();
```

This removes all DOM elements and React roots created by the widget.

---

## Technical Notes

### Scoped Theming

The widget uses a `.jt-ev-chat-widget` class to scope all CSS variables. This prevents conflicts with parent site styles:

```html
<div class="jt-ev-chat-widget" style="--jt-ev-chat-primary: 200 80% 50%;">
  <!-- Widget renders here -->
</div>
```

### Variable Cascade

Component-specific variables fall back to global values:

```
--jt-ev-chat-input-radius → --jt-ev-chat-radius → 1rem
```

### Dark Mode

Dark mode is supported when the `.dark` class is applied to the widget container or a parent element:

```html
<div class="jt-ev-chat-widget dark">
  <!-- Dark mode widget -->
</div>
```

### Browser Support

The widget uses modern JavaScript (ES modules) and CSS features. Supported browsers:
- Chrome 80+
- Firefox 75+
- Safari 14+
- Edge 80+

---

## Support

For issues or feature requests, please open an issue on GitHub.
