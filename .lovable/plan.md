

## Add Configurable Min-Height for Conversation Container

Add a new CSS variable to control the minimum height of the message container, following the existing theming pattern.

---

### Changes Required

#### 1. Add CSS Variable in `src/index.css`

Add to `:root`, `.dark`, and `.jt-ev-chat-widget`:

```css
--message-container-min-height: var(--jt-ev-chat-message-container-min-height, auto);
```

Default to `auto` so existing implementations are unaffected.

#### 2. Apply Variable in `ChatMessages.tsx`

Update the container style object to include the min-height:

```tsx
style={useContainerStyling ? {
  border: 'var(--message-container-border)',
  maxWidth: 'var(--message-container-max-width)',
  minHeight: 'var(--message-container-min-height)',
  width: '100%',
} : undefined}
```

#### 3. Set Value in VindisPreview.tsx

Add the new variable with 120px:

```tsx
'--jt-ev-chat-message-container-min-height': '120px',
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `--message-container-min-height` in `:root`, `.dark`, and `.jt-ev-chat-widget` |
| `src/components/chat/ChatMessages.tsx` | Add `minHeight` to the container style object |
| `src/pages/VindisPreview.tsx` | Set min-height to `120px` |

---

### Result

- New variable: `--jt-ev-chat-message-container-min-height`
- Default: `auto` (no change to existing behavior)
- Vindis preview: `120px` minimum height for the conversation container

