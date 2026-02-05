

## Fix Header Visibility for Fullscreen Mode Testing

The header currently shows when using `?mode=fullscreen` because the logic only hides it for:
- `isEmbedded = true` (triggered by `?embedded=true`)
- `mode = "window"`

When testing via URL or when actually embedded via `createChat()`, fullscreen mode should also hide the header.

---

### The Fix

Update the header visibility logic in `src/pages/Index.tsx` to hide the header whenever a mode is explicitly set (either `window` or `fullscreen`), since both indicate embedded usage:

**Current:**
```tsx
const showHeader = !isEmbedded && mode !== "window";
```

**Updated:**
```tsx
// Hide header when embedded OR when any mode is explicitly set (widget usage)
const showHeader = !isEmbedded && mode !== "window" && mode !== "fullscreen";
```

This means:
- **No URL params**: Header shows (standalone app mode)
- **`?mode=fullscreen`**: Header hidden (embedded widget testing)
- **`?mode=window`**: Header hidden (already working)
- **`?embedded=true`**: Header hidden (iframe embedding)

---

### File to Modify

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Update `showHeader` condition to also check for `mode !== "fullscreen"` |

---

### Result

After this change, adding `?mode=fullscreen` to your preview URL will show exactly what customers see when they embed the widget - a clean chat interface without the header.

