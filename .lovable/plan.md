

## Center Category Tabs

A simple styling fix to center the category tabs horizontally, matching the mockup design.

---

### Current vs Desired

**Current:** Tabs are left-aligned (default `flex` behavior)

**Desired:** Tabs are centered horizontally (as shown in your mockup)

---

### Change Required

**File:** `src/components/chat/CategorizedQuickActions.tsx`

**Line 40 - Update the tabs container:**

```tsx
// Current:
<div className="flex border-b border-border overflow-x-auto scrollbar-hide">

// Updated:
<div className="flex justify-center border-b border-border overflow-x-auto scrollbar-hide">
```

Adding `justify-center` will center the tab buttons within the container.

---

### Result

The category tabs (INSTALLATION, COSTS & SAVINGS, PRODUCTS, etc.) will be centered horizontally, matching your mockup design exactly.

