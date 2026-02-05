

## Fix CSS Variable Inheritance for Widget Theming

The core issue is that CSS variables defined at `:root` level are resolved **at that level** and don't dynamically inherit from parent elements. The current approach sets `--jt-ev-chat-*` variables on the wrapper div, but the `:root` fallbacks were already resolved when the page loaded.

---

### The Problem

```css
/* In :root */
--background: var(--jt-ev-chat-background, 120 20% 98%);
```

When this is evaluated at `:root`, `--jt-ev-chat-background` doesn't exist on `:root`, so it uses the fallback `120 20% 98%`. Later setting `--jt-ev-chat-background` on a child element **does not re-evaluate** the `:root` declaration.

---

### The Solution

Add a scoped CSS block for `.jt-ev-chat-widget` that re-declares all the internal theme variables using the `--jt-ev-chat-*` prefix. This ensures the variables are resolved **within the widget scope** where the custom properties are actually set.

---

### Changes to `src/index.css`

Add a new CSS block that scopes all theme variables to `.jt-ev-chat-widget`:

```css
/* Widget-scoped theming - inherits from --jt-ev-chat-* on this element or ancestors */
.jt-ev-chat-widget {
  font-family: var(--jt-ev-chat-font-family, inherit);
  
  /* Re-declare all theme tokens within widget scope */
  --background: var(--jt-ev-chat-background, 120 20% 98%);
  --foreground: var(--jt-ev-chat-foreground, 150 30% 15%);
  --card: var(--jt-ev-chat-card, 0 0% 100%);
  --card-foreground: var(--jt-ev-chat-card-foreground, 150 30% 15%);
  --primary: var(--jt-ev-chat-primary, 142 55% 40%);
  --primary-foreground: var(--jt-ev-chat-primary-foreground, 0 0% 100%);
  /* ... all other variables ... */
  
  /* Component-specific controls */
  --input-radius: var(--jt-ev-chat-input-radius, var(--radius));
  --button-radius: var(--jt-ev-chat-button-radius, var(--radius));
  --chip-radius: var(--jt-ev-chat-chip-radius, 9999px);
  --chip-border: var(--jt-ev-chat-chip-border, hsl(var(--primary) / 0.3));
  /* ... etc ... */
}
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `.jt-ev-chat-widget { ... }` block with all scoped theme variables |

---

### Why This Works

When the VindisPreview sets:
```tsx
<div className="jt-ev-chat-widget" style={{ '--jt-ev-chat-background': '210 15% 93%' }}>
```

The `.jt-ev-chat-widget` CSS rule evaluates `var(--jt-ev-chat-background, fallback)` **within the context of that element**, where `--jt-ev-chat-background` IS defined. So it picks up the correct value!

---

### Technical Summary

This is the standard pattern for building embeddable widgets with CSS custom property theming:

1. `:root` provides global defaults for the app
2. `.widget-class` provides scoped variable resolution for embedded contexts
3. Parent pages set `--prefix-*` variables on the widget container
4. The widget-scoped rules pick them up correctly

