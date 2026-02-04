
## Implement n8n-Style Widget Embedding

This plan transforms the widget to use the same embedding pattern as n8n's chat widget, allowing customers to embed via a simple script import with full CSS variable support.

---

### How It Will Work

Customers will embed like this (same pattern as n8n):

```html
<!-- Load the styles -->
<link href="https://cdn.jsdelivr.net/gh/YOUR_GITHUB/ev-chat-widget@latest/dist/style.css" rel="stylesheet" />

<!-- Define their branding -->
<style>
  :root {
    --jt-ev-chat-primary: 217 91% 60%;  /* Blue */
    --jt-ev-chat-font-family: 'Roboto', sans-serif;
  }
</style>

<!-- Container -->
<div id="ev-chat"></div>

<!-- Initialize -->
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/gh/YOUR_GITHUB/ev-chat-widget@latest/dist/ev-chat.js';
  
  createChat({
    webhookUrl: 'https://...',
    target: '#ev-chat',
    mode: 'fullscreen',
    categories: [
      { title: 'Installation', questions: ['How do I install?'] }
    ]
  });
</script>
```

**Key benefits:**
- CSS variables work because widget runs in parent page context (not iframe)
- Modern ES module import pattern
- Hosted via jsDelivr CDN (free, fast, no setup)
- Customers don't host anything

---

### Implementation Steps

**Phase 1: Update Widget Entry Point**

1. **Refactor `src/widget.tsx`** to export a `createChat()` function:
   - Accept options object with all configuration
   - Support `target` (CSS selector, default `#ev-chat`)
   - Support `mode`: `'window'` (floating button) or `'fullscreen'` (fills container)
   - Auto-mount or manual mount options

**Phase 2: Update Build Configuration**

2. **Update `vite.config.ts`**:
   - Build as ES module format (not just IIFE)
   - Output separate CSS file (`style.css`)
   - Create `vite.config.widget.ts` for dedicated widget builds
   - Output: `dist/ev-chat.js` + `dist/style.css`

3. **Add build script to `package.json`**:
   - `"build:widget": "vite build --config vite.config.widget.ts"`

**Phase 3: Create Window Mode Component**

4. **Create `src/components/chat/ChatWindow.tsx`**:
   - Floating button that opens chat panel
   - Positioned fixed in corner (configurable)
   - Smooth open/close animation
   - Used when `mode: 'window'`

5. **Update `src/pages/Index.tsx`**:
   - Accept `mode` prop from config
   - Render differently based on window vs fullscreen mode

**Phase 4: Update Configuration System**

6. **Update `src/lib/chat-config.ts`**:
   - Align options with n8n pattern
   - Add `mode`, `target`, `initialMessages`
   - Add `i18n` support for customizable text

---

### Configuration Options

```typescript
interface CreateChatOptions {
  // Required
  webhookUrl: string;
  
  // Display
  target?: string;              // Default: '#ev-chat'
  mode?: 'window' | 'fullscreen'; // Default: 'fullscreen'
  
  // Content
  categories?: QuestionCategory[];
  initialMessages?: string[];
  
  // Text customization
  i18n?: {
    title?: string;
    subtitle?: string;
    inputPlaceholder?: string;
  };
}
```

---

### Hosting Strategy

Since Lovable doesn't have npm publishing, we'll use GitHub releases:

1. Build the widget locally or via GitHub Actions
2. Create a GitHub release with the built files
3. jsDelivr automatically serves files from GitHub releases:
   ```
   https://cdn.jsdelivr.net/gh/OWNER/REPO@VERSION/dist/ev-chat.js
   ```

**Alternative**: After the first customer deployment, we can publish to npm as `@jt-ev/chat` for cleaner URLs:
```
https://cdn.jsdelivr.net/npm/@jt-ev/chat/dist/ev-chat.js
```

---

### Files to Create

| File | Purpose |
|------|---------|
| `vite.config.widget.ts` | Dedicated widget build config |
| `src/components/chat/ChatWindow.tsx` | Floating window mode component |

### Files to Modify

| File | Changes |
|------|---------|
| `src/widget.tsx` | Export `createChat()` function |
| `src/lib/chat-config.ts` | Align with n8n-style options |
| `src/pages/Index.tsx` | Support window/fullscreen modes |
| `package.json` | Add `build:widget` script |

---

### Technical Details

**ES Module Build Output:**
```javascript
// dist/ev-chat.js
export function createChat(options) {
  // Validate options
  // Find target element
  // Mount React app with config
}
```

**CSS Output:**
```css
/* dist/style.css */
/* All widget styles using --jt-ev-chat-* variables */
/* Parent page can override any variable */
```

---

### Mode Comparison

| Feature | `mode: 'window'` | `mode: 'fullscreen'` |
|---------|------------------|---------------------|
| Display | Floating button + popup | Fills container |
| Toggle | Click button to open/close | Always visible |
| Use case | Website corner widget | Dedicated chat page |
| Header | Hidden | Hidden (embedded) |

---

### Result

After implementation:
- Widget embeds exactly like n8n's chat widget
- Full CSS variable theming works (no iframe limitations)
- Hosted free via jsDelivr CDN from GitHub
- Two display modes: floating window or fullscreen
- Customers copy-paste a simple code snippet
- You maintain everything in Lovable, just export builds for releases
