

## Fix Auto-Scroll for Chat Messages

The chat currently doesn't auto-scroll because the scroll logic is targeting the wrong element.

---

### The Problem

The current code does:
```javascript
const scrollRef = useRef<HTMLDivElement>(null);

// In useEffect:
scrollRef.current.scrollTop = scrollRef.current.scrollHeight;

// In JSX:
<ScrollArea ref={scrollRef}>
```

The issue is that with Radix UI's `ScrollArea`, the ref is attached to the **Root** container, but the actual scrollable element is the internal **Viewport**. Setting `scrollTop` on the root has no effect because the root isn't what scrolls.

---

### The Fix

We need to access the Viewport element (the actual scrollable container) rather than the Root. There are two approaches:

**Option chosen: Query for the viewport inside the ScrollArea**

Instead of trying to modify the ScrollArea component, we'll:
1. Keep the ref on the ScrollArea root
2. Use a query selector to find the viewport element inside it (it has the attribute `data-radix-scroll-area-viewport`)
3. Scroll that element instead

This is cleaner than modifying the shared UI component and is a common pattern with Radix ScrollArea.

---

### Implementation Steps

**File: `src/components/chat/ChatMessages.tsx`**

Update the scroll logic in the `useEffect`:

1. Keep the existing `scrollRef` on the `ScrollArea`
2. Inside the effect, query for the viewport element using `[data-radix-scroll-area-viewport]`
3. Scroll that viewport element to the bottom
4. Add `quickReplySuggestions` to the dependency array so it also scrolls when chips appear

The updated scroll effect will look like:
```javascript
useEffect(() => {
  if (scrollRef.current) {
    const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  }
}, [messages, isLoading, quickReplySuggestions]);
```

---

### Why This Works

- Radix UI's ScrollArea adds `data-radix-scroll-area-viewport` to the actual scrolling container
- By querying for this element, we get direct access to the scrollable viewport
- Setting `scrollTop = scrollHeight` scrolls to the bottom
- The dependency array ensures scrolling happens when:
  - New messages arrive
  - Loading state changes (typing indicator appears/disappears)
  - Quick reply chips appear

---

### Result

After this change, the chat will automatically scroll to show the latest content whenever:
- A new user message is sent
- The AI starts responding (typing indicator appears)
- The AI finishes responding
- Quick reply chips appear below the response

