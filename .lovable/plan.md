
## Make EV Charging Assistant Embeddable with Configurable Branding

This plan transforms the chat assistant into an embeddable widget that can be embedded into any website via iframe, with CSS variable-based branding and categorized quick questions. The header is hidden when embedded.

---

### What You'll Get

1. **Simple iframe embedding** - Other websites add an `<iframe>` pointing to your Lovable app URL
2. **CSS variable inheritance** - The parent site can control colors via the widget's CSS variables
3. **Categorized quick questions** - Organized chips with category headers (configurable per brand)
4. **No header in embedded mode** - Clean, compact widget that fits seamlessly into any page
5. **Configuration options** - Via URL parameters and `window.EVChatConfig`

---

### How Embedding Works

**Option 1: Simple iframe (recommended)**

A website owner adds this to their page:

```html
<iframe 
  src="https://your-project.lovable.app?embedded=true" 
  width="400" 
  height="600"
  style="border: none; border-radius: 16px;"
></iframe>
```

That's it! The `?embedded=true` parameter hides the header automatically.

---

**Option 2: Advanced embedding with custom config**

For more control over categories and webhook URL:

```html
<div id="ev-chat-widget"></div>

<script>
  window.EVChatConfig = {
    container: '#ev-chat-widget',
    webhookUrl: 'https://custom-webhook...',
    brandName: 'Vindis',
    categories: [
      {
        title: 'Installation',
        questions: ['How do I install a home charger?']
      }
    ]
  };
</script>
<script src="https://your-project.lovable.app/widget.js"></script>
```

---

### Embedded Mode Triggers

The widget enters embedded mode (header hidden) when any of these are true:

1. URL parameter: `?embedded=true` or `?embed=true`
2. `window.EVChatConfig.container` is set
3. Programmatically via `overrideConfig.isEmbedded`

---

### CSS Variable Branding

The widget supports these CSS variables (all with `--jt-ev-chat-` prefix):

| Variable | Purpose | Default |
|----------|---------|---------|
| `--jt-ev-chat-primary` | Primary brand color | Green (142 55% 40%) |
| `--jt-ev-chat-primary-foreground` | Text on primary | White |
| `--jt-ev-chat-background` | Chat background | Light gray |
| `--jt-ev-chat-foreground` | Text color | Dark gray |
| `--jt-ev-chat-font-family` | Font family | System fonts |
| `--jt-ev-chat-radius` | Border radius | 1rem |

---

### Implementation Status

✅ **Completed:**
- Configuration system (`src/lib/chat-config.ts`, `src/context/ChatConfigContext.tsx`)
- CSS variable inheritance with `--jt-ev-chat-` prefix
- Categorized quick questions component
- Header hidden in embedded mode
- URL parameter detection (`?embedded=true`)
- Configurable webhook URL

---

### Testing

To test embedded mode in Lovable preview, add `?embedded=true` to the URL:
`https://your-project.lovable.app?embedded=true`
