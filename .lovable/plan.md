

## Fix New Chat Button & Category Tab Alignment

Three issues to address:

---

### Issue 1: Window Mode - New Chat Button Doesn't Clear Messages

**Root Cause:**
`ChatWindow.tsx` calls `useN8nChat()` to get `clearMessages`, but `Index.tsx` (rendered inside) also calls `useN8nChat()` separately. Since the hook uses `useState`, these are **two completely independent state instances** - clearing one doesn't affect the other.

**Solution:**
Instead of using the hook in `ChatWindow`, we need to pass the `clearMessages` function as a prop from `Index` up to the header. Since `Index` is the component that owns the chat state, its `clearMessages` is the one that matters.

We'll add an optional `onNewChat` prop to `Index` and have it call back when the internal header's New Chat button is clicked. For window mode, we'll lift the reset logic by having `ChatWindow` listen to the same function.

Actually, the simpler fix: **Make `Index` expose its clearMessages through a callback prop OR don't call useN8nChat in ChatWindow at all** - just remove that call since it's not doing anything useful.

**File: `src/components/chat/ChatWindow.tsx`**
- Remove the separate `useN8nChat` call 
- Add the New Chat button that triggers a custom event or calls a prop
- Actually best approach: Pass `onNewChat` prop to Index and have Index handle the reset

---

### Issue 2: Fullscreen Mode - No New Chat Button Visible

**Root Cause:**
The header is hidden in fullscreen mode (line 27 of Index.tsx), so the New Chat button inside it is never rendered.

**Solution:**
Add a New Chat button that appears in fullscreen mode. Good options:
1. Add it to the welcome section area
2. Add it floating in the top-right corner
3. Add it next to the input field

Best UX: Add a subtle New Chat button in the top-right corner of the chat area when header is hidden.

**File: `src/pages/Index.tsx`**
- Add a floating New Chat button when `!showHeader` and there are messages

---

### Issue 3: Fullscreen Mode - Category Tabs Left-Aligned

**Root Cause:**
We removed centering from tabs to fix window mode overflow, but this affected fullscreen too.

**Solution:**
Use the `mode` from config to conditionally apply centering - center in fullscreen, left-align in window mode.

**File: `src/components/chat/CategorizedQuickActions.tsx`**
- Get `mode` from `useChatConfig()`
- Apply `justify-center` only when `mode !== "window"`

---

### File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/components/chat/ChatWindow.tsx` | **Edit** | Remove duplicate useN8nChat call, pass onNewChat prop to Index |
| `src/pages/Index.tsx` | **Edit** | Add onNewChat prop, add floating New Chat button for fullscreen mode |
| `src/components/chat/CategorizedQuickActions.tsx` | **Edit** | Conditionally center tabs based on mode |

---

### Technical Details

**ChatWindow.tsx changes:**
```tsx
// Remove: const { clearMessages } = useN8nChat();

// Add prop to Index
<Index onNewChat={handleNewChat} />

// Header button calls a function that forces Index to reset
```

**Index.tsx - floating button for fullscreen:**
```tsx
{!showHeader && messages.length > 0 && (
  <button
    onClick={clearMessages}
    className="absolute top-2 right-2 p-2 rounded-lg hover:bg-muted transition-colors z-10"
    aria-label="Start new chat"
    title="New chat"
  >
    <RotateCcw className="h-5 w-5 text-muted-foreground" />
  </button>
)}
```

**CategorizedQuickActions.tsx - conditional centering:**
```tsx
const { categories, mode } = useChatConfig();
// ...
<div className={cn(
  "flex border-b border-border overflow-x-auto overflow-y-hidden scrollbar-hide",
  mode !== "window" && "justify-center"
)}>
```

---

### Result

- Window mode: New Chat button properly clears conversation
- Fullscreen mode: New Chat button visible in top-right when messages exist
- Fullscreen mode: Category tabs centered again
- Window mode: Category tabs remain left-aligned for better fit

