
## Make EV Charging Assistant Embeddable with Configurable Branding

This plan transforms the chat assistant into a JavaScript widget that can be embedded into any website, with CSS variable-based branding and categorized quick questions. The header will be hidden when embedded.

---

### What You'll Get

1. **A JavaScript embed script** - Other websites add a single `<script>` tag to embed the chat
2. **CSS variable inheritance** - The parent site controls colors, fonts, and styling
3. **Categorized quick questions** - Organized chips with category headers (configurable per brand)
4. **No header in embedded mode** - Clean, compact widget that fits seamlessly into any page
5. **Configuration options** - Each embed can specify its own questions, categories, and API endpoint

---

### How Embedding Will Work

A website owner adds this to their page:

```html
<!-- Parent site controls branding via CSS variables -->
<style>
  :root {
    --jt-ev-chat-primary: #1e40af;  /* Vindis blue */
    --jt-ev-chat-font-family: 'Roboto', sans-serif;
  }
</style>

<!-- Container for the widget -->
<div id="ev-chat-widget"></div>

<!-- Embed script with configuration -->
<script>
  window.EVChatConfig = {
    container: '#ev-chat-widget',
    webhookUrl: 'https://...',
    brandName: 'Vindis',
    categories: [
      {
        title: 'Installation',
        questions: [
          'How do I install a home charger?',
          'What electrical work is needed?'
        ]
      },
      {
        title: 'Costs & Savings',
        questions: [
          'What does home charging cost?',
          'Are there any grants available?'
        ]
      }
    ]
  };
</script>
<script src="https://your-domain.com/ev-chat-widget.js"></script>
```

---

### Categorized Quick Questions UI

Instead of flat chips, questions will be organized under category headers:

```text
┌──────────────────────────────────────┐
│  🔌 Installation                     │
│  ┌─────────────────┬───────────────┐ │
│  │ How do I        │ What          │ │
│  │ install a       │ electrical    │ │
│  │ home charger?   │ work needed?  │ │
│  └─────────────────┴───────────────┘ │
│                                      │
│  💰 Costs & Savings                  │
│  ┌─────────────────┬───────────────┐ │
│  │ What does       │ Are there     │ │
│  │ charging cost?  │ grants?       │ │
│  └─────────────────┴───────────────┘ │
└──────────────────────────────────────┘
```

---

### Implementation Steps

**Phase 1: Create Configuration System**

1. **Create `src/lib/chat-config.ts`**
   - Define TypeScript interfaces for widget configuration
   - Interface for categories and questions
   - Function to read config from `window.EVChatConfig`
   - Detect if running in embedded mode (config exists)
   - Fallback defaults for standalone mode

2. **Create `src/context/ChatConfigContext.tsx`**
   - React context to provide configuration throughout the app
   - `isEmbedded` flag to control header visibility
   - Makes config available to all components

**Phase 2: Update CSS for Variable Inheritance**

3. **Update `src/index.css`**
   - Add `--jt-ev-chat-` prefixed variables that inherit from parent
   - Internal variables reference these with fallbacks
   - Example: `--primary: var(--jt-ev-chat-primary, 142 55% 40%)`
   - Add `--jt-ev-chat-font-family` variable for font control

**Phase 3: Create Categorized Quick Questions Component**

4. **Create `src/components/chat/CategorizedQuickActions.tsx`**
   - New component that renders questions grouped by category
   - Each category has a title/header with optional icon
   - Questions displayed as chips under each category
   - Receives categories from config context
   - Falls back to default categories if none provided

**Phase 4: Update Existing Components**

5. **Update `src/pages/Index.tsx`**
   - Conditionally render ChatHeader based on `isEmbedded` from context
   - When embedded: hide header completely
   - When standalone: show header as normal

6. **Update `src/components/chat/ChatMessages.tsx`**
   - Replace `QuickActions` with `CategorizedQuickActions`
   - Pass categories from config context

7. **Update `src/hooks/use-n8n-chat.ts`**
   - Read webhook URL from config instead of hardcoded value
   - Fall back to current URL if not configured

**Phase 5: Create Widget Entry Point**

8. **Create `src/widget.tsx`**
   - Alternative entry point for widget mode
   - Reads config from `window.EVChatConfig`
   - Renders the chat into the specified container
   - Wraps app in config context provider
   - Sets `isEmbedded: true` to hide header

9. **Update `vite.config.ts`**
   - Add build configuration for widget bundle
   - Output as IIFE for browser embedding
   - Separate build target: `npm run build:widget`

---

### CSS Variable Inheritance

The widget will support these CSS variables from the parent page (all with `--jt-ev-chat-` prefix):

| Variable | Purpose | Default |
|----------|---------|---------|
| `--jt-ev-chat-primary` | Primary brand color | Green (142 55% 40%) |
| `--jt-ev-chat-primary-foreground` | Text on primary | White |
| `--jt-ev-chat-background` | Chat background | Light gray |
| `--jt-ev-chat-foreground` | Text color | Dark gray |
| `--jt-ev-chat-muted` | Muted/secondary color | Gray |
| `--jt-ev-chat-border` | Border color | Light gray |
| `--jt-ev-chat-font-family` | Font family | System fonts |
| `--jt-ev-chat-radius` | Border radius | 1rem |

---

### Configuration Interface

```typescript
interface QuestionCategory {
  title: string;
  icon?: string;  // Lucide icon name (optional)
  questions: string[];
}

interface EVChatConfig {
  // Required
  container: string;  // CSS selector for mount point
  
  // Optional
  webhookUrl?: string;
  brandName?: string;
  
  // Categorized questions
  categories?: QuestionCategory[];
  
  // Welcome message customization
  welcomeTitle?: string;
  welcomeMessage?: string;
}
```

---

### Standalone vs Embedded Mode

| Feature | Standalone (current) | Embedded (widget) |
|---------|---------------------|-------------------|
| Header | Visible | Hidden |
| Config source | Defaults | `window.EVChatConfig` |
| CSS variables | Internal defaults | Inherited from parent via `--jt-ev-chat-*` |
| Quick questions | Default set | From config |

---

### Files to Create

| File | Purpose |
|------|---------|
| `src/lib/chat-config.ts` | Configuration types and reader |
| `src/context/ChatConfigContext.tsx` | React context for config |
| `src/components/chat/CategorizedQuickActions.tsx` | New categorized chips UI |
| `src/widget.tsx` | Widget entry point |

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | CSS variable inheritance with `--jt-ev-chat-` prefix |
| `src/pages/Index.tsx` | Conditionally hide header when embedded |
| `src/components/chat/ChatMessages.tsx` | Use categorized quick actions |
| `src/hooks/use-n8n-chat.ts` | Configurable webhook URL |
| `vite.config.ts` | Widget build configuration |
| `src/App.tsx` | Wrap with ChatConfigProvider |

---

### Build Commands

After implementation:
- `npm run dev` - Development (standalone mode)
- `npm run build` - Build standalone app
- `npm run build:widget` - Build embeddable widget bundle

---

### Result

After implementation:
- The chat works as a standalone app (header visible, default questions)
- Can be embedded via JavaScript on any website (header hidden)
- Parent sites control branding through `--jt-ev-chat-*` CSS variables
- Quick questions are organized into configurable categories
- Each embedded instance can have its own categories/questions
- Webhook URL can be configured per embed
