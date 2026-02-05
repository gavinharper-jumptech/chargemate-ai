

## Set Input Border and Text Colors for Vindis Preview

Add CSS variables to control the input box border color and text color, then apply specific values for the Vindis theme.

---

### Hex to HSL Conversion

| Hex | HSL | Purpose |
|-----|-----|---------|
| `#e5e7eb` | `220 13% 91%` | Input border |
| `#374151` | `220 13% 26%` | Input text |

---

### Changes Required

#### 1. Update VindisPreview.tsx

Set the input border and text colors using existing CSS variable hooks:

```tsx
// Input border - uses --input variable
'--jt-ev-chat-input': '220 13% 91%',

// Input text - uses --foreground variable for text inside input
'--jt-ev-chat-foreground': '220 13% 26%',
```

However, changing `--foreground` would affect all text in the widget. A more targeted approach is to add a new CSS variable specifically for input text.

---

### Recommended Approach

#### Option A: Use Existing Variables (Quick)

If changing the overall foreground color is acceptable:
- Set `--jt-ev-chat-input: 220 13% 91%` for the border
- Set `--jt-ev-chat-foreground: 220 13% 26%` for text

#### Option B: Add New Input Text Variable (Precise)

Add a new `--input-text` variable for fine-grained control:

**src/index.css** - Add to `:root`, `.dark`, and `.jt-ev-chat-widget`:
```css
--input-text: var(--jt-ev-chat-input-text, var(--foreground));
```

**src/components/chat/ChatInput.tsx** - Apply to Textarea:
```tsx
<Textarea
  className="... text-[hsl(var(--input-text))]"
  ...
/>
```

**src/pages/VindisPreview.tsx** - Set values:
```tsx
'--jt-ev-chat-input': '220 13% 91%',
'--jt-ev-chat-input-text': '220 13% 26%',
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `--input-text` variable (Option B) |
| `src/components/chat/ChatInput.tsx` | Apply text color class to Textarea |
| `src/pages/VindisPreview.tsx` | Set border and text color values |

---

### Result

- Input container border: `#e5e7eb` (light gray)
- Input text color: `#374151` (dark gray)
- Other text in the widget remains unaffected

