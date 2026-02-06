

# Fix: Chat Messages Still Overflowing Container

## Problem
The previous fix added `overflow-hidden` to the outermost containers (`App.tsx`, `Index.tsx`, `VindisPreview.tsx`) but missed the intermediate flex container inside `ChatMessages.tsx`. The flex containment chain must have `overflow-hidden` at every level -- if any link in the chain is missing it, children can expand beyond their parent.

## Root Cause

The layout chain is:

```text
Index (h-screen flex-col overflow-hidden)          -- OK
  ChatMessages outer div (flex-1 min-h-0 flex-col)  -- MISSING overflow-hidden
    bordered container (flex-1 min-h-0 flex-col)     -- OK
      ScrollArea (flex-1 min-h-0)                    -- OK
```

Without `overflow-hidden` on the ChatMessages outer div, the browser allows its children (welcome section, quick actions, bordered container) to collectively grow beyond the available space, pushing messages past the input.

## Fix

### `src/components/chat/ChatMessages.tsx` (line 130)

Add `overflow-hidden` to the outer wrapper div:

```
Before: "flex-1 min-h-0 flex flex-col gap-4 p-4"
After:  "flex-1 min-h-0 flex flex-col gap-4 p-4 overflow-hidden"
```

This is a single class addition on one line. No other files need changes.

## Why This Works
Adding `overflow-hidden` here completes the containment chain. Every flex parent from the root (`h-screen`) down to the `ScrollArea` will now enforce height constraints, ensuring the `ScrollArea` viewport activates its internal scrolling instead of expanding the page.

## Impact
- Main preview (`/`): messages will scroll inside the container
- Vindis preview: no change (already works via fixed host container height)
- Internal scroll behavior (smooth scroll to new messages): completely unaffected -- that logic reads from the viewport inside `ScrollArea` which remains unchanged
