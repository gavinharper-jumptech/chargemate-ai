

## Add "New Chat" Button to Reset Conversation

Add a button to the chat header that clears all messages and generates a fresh session ID, giving users a clean slate to start a new conversation.

---

### Changes Overview

**1. Update the chat hook to properly reset the session**

The current `clearMessages` function removes the session ID but doesn't regenerate one. We need to update it to also set a new session ID so subsequent messages use the fresh ID.

**File: `src/hooks/use-n8n-chat.ts`**

- Convert `sessionId` from `useState` to a ref or mutable state
- Update `clearMessages` to generate and set a new session ID

---

**2. Pass the reset function to ChatHeader**

ChatHeader needs access to the clear/reset function. We'll pass it as a prop from Index.tsx.

**File: `src/components/chat/ChatHeader.tsx`**

- Add `onNewChat` prop
- Add a "New Chat" button with a `RotateCcw` or `Plus` icon
- Style it to match the existing header aesthetic

---

**3. Wire up the reset function in Index.tsx**

Extract `clearMessages` from the hook and pass it to ChatHeader.

**File: `src/pages/Index.tsx`**

- Destructure `clearMessages` from `useN8nChat()`
- Pass it to `<ChatHeader onNewChat={clearMessages} />`

---

**4. Add "New Chat" button to ChatWindow header**

The window mode has its own inline header. We need to add the reset button there too, which means lifting the reset function up.

**File: `src/components/chat/ChatWindow.tsx`**

- Use `useN8nChat` directly in ChatWindow OR
- Create a shared context for the reset function

The cleanest approach: Move the chat state to ChatWindow level for window mode, passing the reset function to its header.

---

### File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/hooks/use-n8n-chat.ts` | **Edit** | Update `clearMessages` to regenerate session ID |
| `src/components/chat/ChatHeader.tsx` | **Edit** | Add `onNewChat` prop and "New Chat" button |
| `src/pages/Index.tsx` | **Edit** | Pass `clearMessages` to ChatHeader |
| `src/components/chat/ChatWindow.tsx` | **Edit** | Integrate reset button into window header |

---

### Technical Details

**Updated hook logic:**
```typescript
// Use state instead of one-time generation
const [sessionId, setSessionId] = useState(generateSessionId);

const clearMessages = useCallback(() => {
  setMessages([]);
  sessionStorage.removeItem("n8n-session-id");
  // Generate fresh session ID
  const newId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  sessionStorage.setItem("n8n-session-id", newId);
  setSessionId(newId);
}, []);
```

**ChatHeader button:**
```tsx
<button
  onClick={onNewChat}
  className="p-2 rounded-lg hover:bg-muted transition-colors"
  aria-label="Start new chat"
>
  <RotateCcw className="h-5 w-5 text-muted-foreground" />
</button>
```

---

### Result

- Users can start fresh conversations at any time
- The n8n backend will treat it as a new session with no prior context
- Button is accessible in both window mode and fullscreen/standalone mode
- Consistent UX across all display modes

