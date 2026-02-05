

## Fix Window Mode Content Overflow & Category Tab Handling

Two related fixes to ensure all content stays within the window panel bounds and handles multiple categories gracefully.

---

### Issue 1: Content Overflowing Window Bounds

**Root Cause:**
The layout containers lack proper overflow constraints. When using flexbox with `flex-1`, the child needs `min-h-0` to allow proper shrinking, and the parent needs `overflow-hidden` to contain content.

**Solution:**

**File: `src/pages/Index.tsx`**

Update the default layout container (lines 57-67):

```tsx
// Current:
<div className={className || "flex h-full flex-col bg-background"}>

// Updated:
<div className={className || "flex h-full flex-col bg-background overflow-hidden"}>
```

**File: `src/components/chat/ChatMessages.tsx`**

Update the ScrollArea to properly fill available space (line 120):

```tsx
// Current:
<ScrollArea className="flex-1" ref={scrollRef}>

// Updated:
<ScrollArea className="flex-1 min-h-0" ref={scrollRef}>
```

The `min-h-0` is critical for flexbox - it overrides the default `min-height: auto` which prevents flex items from shrinking below their content size.

---

### Issue 2: Category Tabs Being Cut Off (4+ Categories)

**Current Behavior:**
- Tabs use `overflow-x-auto` - they scroll horizontally but the "PRODUCTS" tab is clipped at the edge
- No visual indication that more tabs exist

**Solution:**
For the window's limited 380px width, we should:
1. Make tabs more compact with smaller padding
2. Keep horizontal scroll but ensure visible scroll indicators
3. Optionally: For 4+ categories, consider a dropdown alternative

**File: `src/components/chat/CategorizedQuickActions.tsx`**

Update the tabs container and buttons (lines 40-57):

```tsx
{/* Category Tabs - compact for window mode */}
<div className="flex border-b border-border overflow-x-auto overflow-y-hidden scrollbar-hide">
  {categories.map((category) => (
    <button
      key={category.title}
      type="button"
      onClick={() => setActiveCategory(category.title)}
      className={cn(
        "px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors",
        "border-b-2 -mb-px flex-shrink-0",
        activeCategory === category.title
          ? "border-primary text-primary"
          : "border-transparent text-muted-foreground hover:text-foreground"
      )}
    >
      {category.title.toUpperCase()}
    </button>
  ))}
</div>
```

Key changes:
- `px-3` instead of `px-4` (more compact)
- `text-xs` instead of `text-sm` (smaller text)
- Removed `justify-center` to let tabs flow naturally from left

---

### File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/pages/Index.tsx` | **Edit** | Add `overflow-hidden` to main container |
| `src/components/chat/ChatMessages.tsx` | **Edit** | Add `min-h-0` to ScrollArea for proper flex shrinking |
| `src/components/chat/CategorizedQuickActions.tsx` | **Edit** | Make tabs more compact with smaller padding and text |

---

### Result

- All content will stay within window bounds
- Messages will scroll properly within the available space
- Category tabs will be more compact and fit better
- Horizontal scroll still works for many categories, but tabs are more visible
- No visual clipping of the rightmost tab

