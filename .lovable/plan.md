
# Fix Widget Internal Scrolling

## Problem Summary
The chat widget's internal scrolling is completely broken when embedded. Messages don't scroll within the widget because the height chain is broken:

1. Your `#ev-chat` container has `height: 700px` ✓
2. But `.jt-ev-chat-widget` (created by `createChat`) has no height set → defaults to `auto`
3. The `Index` component uses `h-full` (100% of parent) → but parent is `auto`
4. The `ScrollArea` uses `flex-1` → but without a constrained parent, it expands infinitely
5. Result: Content grows past 700px, gets clipped by `overflow: hidden`, no internal scroll

## Solution

### 1. Add `height: 100%` to the widget wrapper class

**File: `src/index.css`** (line 178)

Add height to `.jt-ev-chat-widget`:
```css
.jt-ev-chat-widget {
  height: 100%;  /* NEW - inherit height from parent container */
  font-family: var(--jt-ev-chat-font-family, inherit);
  /* ... rest of existing variables ... */
}
```

### 2. Fix the overflow on embedded Index component

**File: `src/pages/Index.tsx`** (line 42 and 79)

The `className` fallback uses `overflow-hidden` which clips content. But when embedded (`className` is undefined), we need the internal layout to allow scrolling while the outer container handles clipping:

```tsx
// Line 42 (inputPosition above layout)
<div className={className || "flex h-full flex-col bg-background relative"}>

// Line 79 (default layout) 
<div className={className || "flex h-full flex-col bg-background relative"}>
```

Note: `overflow-hidden` is removed since the host page's container (`#ev-chat`) already handles clipping.

## Why This Fixes Both Issues

| Before | After |
|--------|-------|
| Widget has no height → expands infinitely | Widget has `100%` height → constrained to container |
| ScrollArea has infinite space → never scrolls | ScrollArea fills fixed space → scrolls naturally |
| Page jumps when AI responds | Page stays put, only widget scrolls |

## Technical Details

The height chain will now be:
```
#ev-chat (700px)
  └── .jt-ev-chat-widget (100% = 700px)
        └── Index div (h-full = 700px)
              └── ScrollArea (flex-1, fills remaining space)
                    └── Internal content scrolls here
```
