

## Remove Duplicate New Chat Button from Window Header

Since the floating New Chat button in the chat content area is working perfectly, we'll remove the redundant one from the window header to avoid UI clutter.

---

### Changes

**File: `src/components/chat/ChatWindow.tsx`**

1. Remove the `RotateCcw` icon import (no longer needed)
2. Remove the `clearMessagesRef` ref (no longer needed)
3. Remove the `handleNewChat` function (no longer needed)  
4. Remove the reset button from the header (lines 50-57)

The header will now only contain the chat icon/title on the left and the close (X) button on the right.

---

### Result

- Cleaner header with just the title and close button
- Single reset button in the chat content area (already working)
- Less visual clutter for users

