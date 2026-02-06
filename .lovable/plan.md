
# Fix: ScrollArea Not Scrollable After Overflow Fix

## Problem
Adding `overflow-hidden` to the outer wrapper (line 130 in ChatMessages.tsx) correctly prevents content from overflowing the viewport, but the messages are now clipped without any ability to scroll. The content is hidden but not scrollable.

## Root Cause
The bordered container (line 140-150) sits between the `overflow-hidden` outer wrapper and the `ScrollArea`, but it lacks `overflow-hidden` itself. Without it:

1. The bordered container grows to fit all its content (the full message list)
2. The outer `overflow-hidden` clips it visually
3. The ScrollArea never gets a constrained height, so its viewport never activates scrolling

The containment chain is broken at the bordered container level.

## Fix

### `src/components/chat/ChatMessages.tsx` -- line 142

Add `overflow-hidden` to the bordered container div:

```
Before: "flex-1 min-h-0 flex flex-col"
After:  "flex-1 min-h-0 flex flex-col overflow-hidden"
```

This completes the height constraint chain:

```text
outer div (overflow-hidden)           -- constrains total height
  bordered container (overflow-hidden) -- constrains to available space
    ScrollArea Root (overflow-hidden)  -- Radix default
      Viewport (overflow: scroll)      -- actually scrolls
```

### Single-line change

Only the `cn()` call on line 142 needs updating. No other files are affected.

## Why This Works
Every flex parent in the chain from the root down to the ScrollArea viewport needs to enforce its height constraint. Adding `overflow-hidden` to the bordered container forces it to respect its `flex-1 min-h-0` sizing instead of growing to fit content. The ScrollArea viewport then gets a constrained height and its internal `overflow: scroll` activates.

## Impact
- Main preview: messages will scroll inside the chat area
- Vindis preview: no regression (already constrained by host container)
- Auto-scroll behavior: unaffected (operates on the viewport ref inside ScrollArea)
