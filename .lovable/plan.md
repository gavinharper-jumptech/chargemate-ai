
# Widget User Guide Documentation

## Overview
Create a comprehensive markdown documentation file that covers all widget configuration options and CSS theming capabilities, suitable for developers integrating the widget into their sites.

## Document Structure

### File: `docs/WIDGET_GUIDE.md`

The guide will be organized into the following sections:

---

### 1. Quick Start
- CDN installation (script + link tags)
- Basic `createChat()` usage with minimal config
- Simple fullscreen and window mode examples

### 2. Installation Methods
- **ES Module import** (recommended for bundlers)
- **Script tag** (for traditional sites)
- **Legacy auto-mount** via `window.EVChatConfig`

### 3. Configuration Options

Complete reference for `createChat(options)`:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `webhookUrl` | string | (internal default) | n8n webhook endpoint for chat |
| `target` | string | `#ev-chat` | CSS selector for mount container |
| `mode` | `"fullscreen"` \| `"window"` | `"fullscreen"` | Display mode |
| `position` | `"bottom-right"` \| `"bottom-left"` | `"bottom-right"` | Window mode button position |
| `inputPosition` | `"above"` \| `"below"` | `"below"` | Input field placement |
| `inputLayout` | `"separate"` \| `"embedded"` | `"separate"` | Input/button layout style |
| `categories` | `QuestionCategory[]` | (defaults) | Quick question categories |
| `initialMessages` | `string[]` | - | Pre-populated messages |
| `i18n` | `I18nConfig` | (defaults) | Text customization |

### 4. i18n Configuration

| Property | Default | Description |
|----------|---------|-------------|
| `title` | "Hi! I'm your EV Home Charging Assistant..." | Welcome heading |
| `subtitle` | "I can help you with..." | Welcome description |
| `inputPlaceholder` | "Type your message..." | Input placeholder text |
| `getStarted` | "Choose a topic to get started" | Quick actions prompt |
| `sendButtonText` | - | Custom send button text (fullscreen only) |

### 5. Question Categories

Structure and example:
```javascript
categories: [
  {
    title: 'Installation',
    icon: 'Plug', // Optional Lucide icon name
    questions: [
      'How do I install a home charger?',
      'What electrical work is needed?'
    ]
  }
]
```

### 6. CSS Theming Reference

Complete list of `--jt-ev-chat-*` CSS variables organized by category:

**Core Colors:**
- `--jt-ev-chat-background` - Page/widget background
- `--jt-ev-chat-foreground` - Default text color
- `--jt-ev-chat-card` - Card/panel backgrounds
- `--jt-ev-chat-primary` - Primary accent color (buttons, links)
- `--jt-ev-chat-primary-hover` - Primary hover state
- `--jt-ev-chat-primary-foreground` - Text on primary backgrounds
- etc.

**Border Radii:**
- `--jt-ev-chat-radius` - Global default radius
- `--jt-ev-chat-input-radius` - Input field corners
- `--jt-ev-chat-button-radius` - Button corners
- `--jt-ev-chat-chip-radius` - Quick action chip corners
- `--jt-ev-chat-message-bubble-radius` - Message bubble corners
- `--jt-ev-chat-message-bubble-tail-radius` - Bubble tail corner

**Chip Styling:**
- `--jt-ev-chat-chip-bg` - Chip background (HSL values)
- `--jt-ev-chat-chip-text` - Chip text color
- `--jt-ev-chat-chip-border` - Chip border (full CSS value)
- `--jt-ev-chat-chip-hover-bg` - Hover background
- `--jt-ev-chat-chip-hover-border` - Hover border
- `--jt-ev-chat-chip-hover-text` - Hover text color

**Input Styling:**
- `--jt-ev-chat-input` - Input border color
- `--jt-ev-chat-input-text` - Input text color
- `--jt-ev-chat-input-container-bg` - Input container background
- `--jt-ev-chat-input-container-border` - Input container border

**Message Bubbles:**
- `--jt-ev-chat-user` - User message background
- `--jt-ev-chat-user-foreground` - User message text
- `--jt-ev-chat-assistant` - Assistant message background
- `--jt-ev-chat-assistant-foreground` - Assistant message text

**Message Container (fullscreen only):**
- `--jt-ev-chat-message-container-border` - Container border (full CSS)
- `--jt-ev-chat-message-container-bg` - Container background
- `--jt-ev-chat-message-container-max-width` - Max width
- `--jt-ev-chat-message-container-min-height` - Min height

**Tabs:**
- `--jt-ev-chat-tab-active-border` - Active tab underline color
- `--jt-ev-chat-tab-container-border` - Tab container border

**Typography:**
- `--jt-ev-chat-font-family` - Font stack

### 7. HSL Color Format

Explanation of the HSL format used (without `hsl()` wrapper):
```css
/* Format: H S% L% */
--jt-ev-chat-primary: 172 100% 35%;  /* Teal green */
--jt-ev-chat-background: 0 0% 100%;  /* White */
```

### 8. Complete Examples

**Basic Integration:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/.../style.css">
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/.../ev-chat.js';
  createChat({ webhookUrl: 'https://...' });
</script>
```

**Custom Theming Example (Vindis-style):**
Full working example showing:
- Custom CSS variables for colors, radii, borders
- Custom categories and i18n
- Square corners, custom color scheme

### 9. Mode Comparison

| Feature | Fullscreen | Window |
|---------|------------|--------|
| Container | Fills target element | Floating popup |
| Input position | Configurable | Always below |
| Input layout | Separate or embedded | Always separate |
| Message container border | Configurable | Not shown |
| Send button text | Configurable | Icon only |

### 10. Cleanup

How to unmount the widget:
```javascript
const cleanup = createChat({ ... });
// Later:
cleanup();
```

---

## Technical Notes

- All CSS variables use HSL values without the `hsl()` wrapper for consistency
- The `.jt-ev-chat-widget` class scopes all theming to prevent conflicts with parent sites
- Variables cascade: component-specific overrides fall back to global values
- Dark mode support is included but requires `.dark` class on container

## File Location

Create at: `docs/WIDGET_GUIDE.md`

This location keeps documentation separate from source code and is CDN-friendly for linking in release notes.
