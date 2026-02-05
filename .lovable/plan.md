

## Create Vindis-Style Preview Demo

To validate the widget's theming flexibility, I'll create a dedicated preview route that demonstrates the mockup design using **only widget configuration and CSS variables** - no changes to the core widget code.

---

### Approach

Create a new preview page at `/vindis-preview` that:
1. Wraps the widget in a container with Vindis CSS variables
2. Provides the Vindis-specific configuration (categories, i18n text)
3. Shows exactly how a customer would implement their own branding

---

### New File: `src/pages/VindisPreview.tsx`

This page demonstrates the theming by:
- Applying CSS variables inline via a `<style>` tag or inline styles
- Passing Vindis-specific configuration to the ChatConfigProvider
- Rendering the standard Index component with the theme applied

```tsx
// Vindis configuration
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

// Vindis CSS variables applied to container
const vindisStyles = {
  '--jt-ev-chat-primary': '195 35% 25%',
  '--jt-ev-chat-primary-foreground': '0 0% 100%',
  '--jt-ev-chat-background': '0 0% 100%',
  '--jt-ev-chat-card': '0 0% 100%',
  '--jt-ev-chat-muted-foreground': '210 10% 45%',
  '--jt-ev-chat-border': '210 15% 90%',
  '--jt-ev-chat-assistant': '195 25% 97%',
  '--jt-ev-chat-assistant-foreground': '195 35% 20%',
  '--jt-ev-chat-font-family': 'system-ui, sans-serif'
};
```

---

### Update: `src/App.tsx`

Add a route to the Vindis preview:

```tsx
import VindisPreview from "./pages/VindisPreview";

// In Routes:
<Route path="/vindis-preview" element={<VindisPreview />} />
```

---

### Files to Create/Edit

| File | Action | Description |
|------|--------|-------------|
| `src/pages/VindisPreview.tsx` | **Create** | New preview page with Vindis theming |
| `src/App.tsx` | **Edit** | Add route for `/vindis-preview` |

---

### How to View

After implementation, navigate to:
**`/vindis-preview`**

This will show the widget with:
- Dark teal primary color
- "ASK VINDIS AI SPECIALIST" title
- "ASK AI SPECIALIST" send button text
- Input positioned above messages
- Custom categories matching the mockup
- Clean white background

---

### Why This Approach Works

This preview demonstrates exactly what customers would do:
1. Set CSS variables on their page
2. Call `createChat()` with their configuration
3. The widget adapts to their branding automatically

No widget code changes needed - pure configuration and styling.

