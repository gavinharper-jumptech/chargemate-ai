

## Add CSS Variables for Message Bubble Border-Radius

Currently, message bubble corners are hardcoded with Tailwind classes. This plan adds CSS variables to allow themes like Vindis to have square message bubbles.

---

### Current Implementation

```tsx
// MessageBubble.tsx - hardcoded radius
className="rounded-2xl ... rounded-br-md"  // user
className="rounded-2xl ... rounded-bl-md"  // assistant
```

---

### Changes Required

#### 1. Add New CSS Variables

**File: `src/index.css`**

Add to both `:root` and `.jt-ev-chat-widget`:

```css
/* Message bubble radius */
--message-bubble-radius: var(--jt-ev-chat-message-bubble-radius, 1rem);
--message-bubble-tail-radius: var(--jt-ev-chat-message-bubble-tail-radius, 0.375rem);
```

- `--message-bubble-radius`: Main corner radius (default `1rem` = `rounded-2xl`)
- `--message-bubble-tail-radius`: The small "tail" corner where the bubble points (default `0.375rem` = `rounded-md`)

#### 2. Update MessageBubble Component

**File: `src/components/chat/MessageBubble.tsx`**

Replace hardcoded Tailwind classes with inline styles using the CSS variables:

```tsx
<div
  className={cn(
    "max-w-[85%] px-4 py-3 md:max-w-[70%]",
    isUser
      ? "bg-chat-user text-chat-user-foreground"
      : "bg-chat-assistant text-chat-assistant-foreground"
  )}
  style={{
    borderRadius: `var(--message-bubble-radius) var(--message-bubble-radius) ${
      isUser 
        ? 'var(--message-bubble-tail-radius) var(--message-bubble-radius)'
        : 'var(--message-bubble-radius) var(--message-bubble-tail-radius)'
    }`,
  }}
>
```

#### 3. Update VindisPreview to Use Square Bubbles

**File: `src/pages/VindisPreview.tsx`**

Add to the styles object:

```tsx
'--jt-ev-chat-message-bubble-radius': '0',
'--jt-ev-chat-message-bubble-tail-radius': '0',
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `--message-bubble-radius` and `--message-bubble-tail-radius` variables |
| `src/components/chat/MessageBubble.tsx` | Use CSS variables for border-radius instead of Tailwind classes |
| `src/pages/VindisPreview.tsx` | Set bubble radius to `0` for square corners |

---

### Result

- **Default theme**: Rounded bubbles with chat-style tail (current look preserved)
- **Vindis theme**: Square bubbles matching the overall square aesthetic
- **Full control**: Parent pages can set any radius value via `--jt-ev-chat-message-bubble-radius`

