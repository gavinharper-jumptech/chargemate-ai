

## Fix: Separate Container Background from Assistant Bubble Color

The issue is that the conversation container and the assistant message bubbles are both using the same CSS variable (`--chat-assistant`). When we changed it to dark blue for the bubbles, the entire container background also became dark blue.

---

### Current Problem

```tsx
// ChatMessages.tsx line 140
className="... bg-[hsl(var(--chat-assistant))]"  // Container background

// MessageBubble.tsx
className="... bg-chat-assistant"  // Bubble background
```

Both use the same `--chat-assistant` variable, so changing one affects the other.

---

### Solution

Add a new CSS variable specifically for the message container background, separate from the bubble colors:

| Variable | Purpose | Vindis Value |
|----------|---------|--------------|
| `--jt-ev-chat-message-container-bg` | Background of the bordered conversation area | White (`0 0% 100%`) |
| `--jt-ev-chat-assistant` | Background of AI message bubbles only | Dark blue (`203 100% 12%`) |

---

### Changes Required

#### 1. Add New CSS Variable in `src/index.css`

Add to `:root` and `.jt-ev-chat-widget`:

```css
--message-container-bg: var(--jt-ev-chat-message-container-bg, var(--card));
```

Default to `--card` (white) so existing themes work without changes.

#### 2. Update ChatMessages.tsx Container

Change line 140 from:
```tsx
bg-[hsl(var(--chat-assistant))]
```
to:
```tsx
bg-[hsl(var(--message-container-bg))]
```

#### 3. Update VindisPreview.tsx

Add the container background variable to use white:
```tsx
'--jt-ev-chat-message-container-bg': '0 0% 100%',
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `--message-container-bg` variable |
| `src/components/chat/ChatMessages.tsx` | Use new `--message-container-bg` variable for container |
| `src/pages/VindisPreview.tsx` | Set container background to white |

---

### Visual Result

- **Container**: White background with teal border
- **User bubble**: Green background (unchanged)
- **Assistant bubble**: Dark blue background with white text
- **Quick reply chips**: Inside the white container

