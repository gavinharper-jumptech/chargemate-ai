

## Force Input Below in Window Mode

A simple logic change to ensure window mode always uses the traditional "input below" layout, regardless of the `inputPosition` configuration.

---

### Current Behavior

The `inputPosition` setting applies to both:
- Fullscreen/embedded mode ✓ (makes sense)
- Window mode ✗ (causes overflow issues and unnatural UX)

---

### Solution

**File:** `src/pages/Index.tsx`

**Line 30 - Update the conditional to exclude window mode:**

```tsx
// Current:
if (inputPosition === "above") {

// Updated:
if (inputPosition === "above" && mode !== "window") {
```

This single change ensures:
- Window mode always uses "input below" layout (natural popup chat UX)
- Fullscreen/embedded modes respect the `inputPosition` setting
- Also fixes the overflow issue you reported earlier (since window mode won't use the "above" layout)

---

### File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/pages/Index.tsx` | **Edit** | Add `mode !== "window"` check to the input position conditional |

---

### Result

- Window mode popup will always have input at the bottom
- Fullscreen mode can still use `inputPosition: 'above'` when configured
- Overflow issue in window mode is resolved as a side effect

