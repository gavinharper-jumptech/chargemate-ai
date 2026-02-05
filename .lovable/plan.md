

# Replace README with EV Chat Widget Documentation

## Overview
Replace the current boilerplate README with a proper project README that explains the EV Chat Widget and removes all Lovable references.

## Changes to `README.md`

**Complete replacement** with the following content:

---

```markdown
# Jumptech Chat Widget

A customizable, embeddable chat widget. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Two Display Modes**: Fullscreen (embedded) or floating window with trigger button
- **Fully Customizable Theming**: 40+ CSS custom properties for complete brand control
- **i18n Support**: Customize all user-facing text
- **Quick Question Categories**: Tabbed navigation with predefined questions
- **Markdown Rendering**: Rich text formatting in chat messages
- **Responsive Design**: Works on desktop and mobile devices

## Quick Start

Add the widget to any webpage using the jsDelivr CDN:

```html
<!-- Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@main/public/widget/style.css">

<!-- Widget Script -->
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@main/public/widget/ev-chat.js';
  
  createChat({
    webhookUrl: 'https://your-webhook-url.com/chat'
  });
</script>
```

## Configuration

```javascript
createChat({
  webhookUrl: 'https://your-api.com/chat',  // Chat API endpoint
  target: '#chat-container',                 // Mount target (default: #ev-chat)
  mode: 'fullscreen',                        // 'fullscreen' or 'window'
  position: 'bottom-right',                  // Floating button position
  inputPosition: 'below',                    // 'above' or 'below' messages
  inputLayout: 'separate',                   // 'separate' or 'embedded'
  
  categories: [
    {
      title: 'Installation',
      icon: 'Plug',
      questions: ['How long does installation take?', 'What's included?']
    }
  ],
  
  i18n: {
    title: 'Chat with us!',
    subtitle: 'Ask anything about EV charging.',
    inputPlaceholder: 'Type your message...',
    sendButtonText: 'Send'
  }
});
```

## Theming

Customize the widget using CSS custom properties with the `--jt-ev-chat-` prefix:

```css
#chat-container {
  --jt-ev-chat-primary: 172 100% 35%;
  --jt-ev-chat-background: 0 0% 100%;
  --jt-ev-chat-radius: 0.5rem;
  --jt-ev-chat-user: 172 100% 35%;
  --jt-ev-chat-assistant: 220 13% 26%;
}
```

See the [Widget Guide](docs/WIDGET_GUIDE.md) for complete theming reference.

## Development

### Prerequisites

- Node.js 18+ or Bun

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build Widget

The widget is automatically built via GitHub Actions when changes are pushed to `main`. The built files are committed to `public/widget/`.

To build manually:

```bash
bun run vite build --config vite.config.widget.ts
```

## Tech Stack

- React - UI framework
- TypeScript - Type safety
- Vite - Build tool
- Tailwind CSS - Styling
- shadcn/ui - UI components

## Documentation

Full documentation including all configuration options, theming variables, and examples:

[Widget Guide](docs/WIDGET_GUIDE.md)

## License

MIT
```

---

## Summary

| Section | Content |
|---------|---------|
| Title | EV Chat Widget |
| Description | Embeddable chat for EV charging assistance |
| Features | Display modes, theming, i18n, categories, markdown |
| Quick Start | jsDelivr CDN integration snippet |
| Configuration | All main options with examples |
| Theming | CSS variable overview with link to full docs |
| Development | Setup and build instructions |
| Tech Stack | React, TypeScript, Vite, Tailwind |
| Documentation | Link to WIDGET_GUIDE.md |

