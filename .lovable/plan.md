

# Fix Window Mode Chat Panel on Mobile

## Problem

The chat panel has a fixed `w-[380px]` width and `right-4` positioning. On a 390px-wide mobile screen, this leaves only ~6px on the left — the panel is effectively edge-to-edge with no left margin.

## Solution

On small screens, make the panel go full-width with equal margins. On larger screens, keep the current 380px fixed width.

**Single change in `ChatWindow.tsx` line 28:**

Replace the fixed width:
```
w-[380px] h-[600px] max-h-[80vh]
```

With responsive width:
```
w-[calc(100vw-2rem)] sm:w-[380px] h-[600px] max-h-[80vh]
```

This gives 1rem (16px) margin on each side on mobile via the existing `right-4`/`left-4` positioning, and snaps back to the fixed 380px at the `sm` (640px) breakpoint.

