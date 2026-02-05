

## Remove Tiny Scrollbar from Category Tabs

A quick CSS fix to hide the unwanted vertical scrollbar appearing on the category tabs.

---

### Issue

The category tabs container shows a tiny vertical scrollbar (visible on the right side in your screenshot). This is caused by the container not explicitly hiding vertical overflow.

---

### Solution

**File:** `src/components/chat/CategorizedQuickActions.tsx`

**Line 40 - Add `overflow-y-hidden` to prevent vertical scrollbar:**

```tsx
// Current:
<div className="flex justify-center border-b border-border overflow-x-auto scrollbar-hide">

// Updated:
<div className="flex justify-center border-b border-border overflow-x-auto overflow-y-hidden scrollbar-hide">
```

Adding `overflow-y-hidden` will explicitly hide any vertical scrollbar while keeping the horizontal scroll behavior for mobile/narrow screens.

---

### Result

The tiny vertical scrollbar will be removed, giving a clean appearance to the category tabs.

