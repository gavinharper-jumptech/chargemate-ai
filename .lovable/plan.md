
# Add Configurable Link Colors for Chat Bubbles

## Problem
Links in chat bubbles inherit the bubble's text color, making them hard to see (especially white-on-dark assistant bubbles). Hardcoding a fix would break for widget users who set custom bubble backgrounds.

## Solution
Add new CSS variables for assistant and user link colors, following the existing pattern. Widget users can override them; sensible defaults are provided.

## Changes

### 1. `src/index.css` -- add 4 new variables (after line 78)

```css
--chat-assistant-link: var(--jt-ev-chat-assistant-link, 199 89% 70%);
--chat-assistant-link-hover: var(--jt-ev-chat-assistant-link-hover, 199 89% 80%);
--chat-user-link: var(--jt-ev-chat-user-link, var(--chat-user-foreground));
--chat-user-link-hover: var(--jt-ev-chat-user-link-hover, var(--chat-user-foreground));
```

The assistant default (`199 89% 70%`) is a light sky-blue -- visible on dark backgrounds. User links default to the existing user foreground color since user bubbles are typically dark-on-light.

### 2. `tailwind.config.ts` -- register the new colors (inside the `chat` color block)

```ts
"assistant-link": "hsl(var(--chat-assistant-link))",
"assistant-link-hover": "hsl(var(--chat-assistant-link-hover))",
"user-link": "hsl(var(--chat-user-link))",
"user-link-hover": "hsl(var(--chat-user-link-hover))",
```

### 3. `src/components/chat/MessageBubble.tsx` -- line 47

Apply the correct link color based on the message role:

```tsx
className={cn(
  "underline break-all font-medium transition-colors",
  role === "assistant"
    ? "text-chat-assistant-link hover:text-chat-assistant-link-hover"
    : "text-chat-user-link hover:text-chat-user-link-hover"
)}
```

The `role` prop is already available in the component.

### 4. `docs/WIDGET_GUIDE.md` -- document the new variables

Add the 4 new variables to the CSS variable reference table so widget users know they can override them.

## How widget users override

In the Vindis example, they would just add to their `:root` CSS:

```css
--jt-ev-chat-assistant-link: 172 100% 35%;
--jt-ev-chat-assistant-link-hover: 172 100% 45%;
```

## Impact
- Default experience: assistant links are now visibly sky-blue instead of invisible white
- User bubble links: unchanged (inherit foreground by default)
- Fully customisable via CSS variables, consistent with the existing theming system
- No breaking changes
