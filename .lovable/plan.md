

## Fix Embedded Input Container Background

The embedded input layout is rendering correctly, but the white container background isn't visible because it uses `bg-background` which is the same grey as the page background. We need the embedded container to have a distinct white background.

---

### Root Cause

In `ChatInput.tsx`, the embedded layout container uses:

```tsx
className="flex items-stretch border border-input bg-background overflow-hidden"
```

- `bg-background` resolves to `210 20% 98%` (light grey)
- Page background is also `210 20% 98%` (light grey)
- Result: The container blends into the page with no visible distinction

---

### Solution

Add a new CSS variable specifically for the embedded input container background, then use it in the component.

| Variable | Purpose | Vindis Value |
|----------|---------|--------------|
| `--jt-ev-chat-input-container-bg` | Background of the embedded input container | White (`0 0% 100%`) |

---

### Changes Required

#### 1. Add New CSS Variable in `src/index.css`

Add to `:root` and `.jt-ev-chat-widget`:

```css
--input-container-bg: var(--jt-ev-chat-input-container-bg, var(--card));
```

Default to `--card` (white) so the embedded container has a distinct background.

#### 2. Update ChatInput.tsx Embedded Layout

Change the container background from `bg-background` to use the new variable:

```tsx
// Line 46
className="flex items-stretch border border-input bg-[hsl(var(--input-container-bg))] overflow-hidden"
```

#### 3. Update VindisPreview.tsx

Add the input container background variable to explicitly set white:

```tsx
'--jt-ev-chat-input-container-bg': '0 0% 100%',
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `--input-container-bg` variable in `:root`, `.dark`, and `.jt-ev-chat-widget` |
| `src/components/chat/ChatInput.tsx` | Use `bg-[hsl(var(--input-container-bg))]` for embedded container |
| `src/pages/VindisPreview.tsx` | Set container background to white |

---

### Visual Result

Before: The embedded input container blends into the grey page background
After: The embedded input container has a distinct white background, making the input field and button appear as a unified control

