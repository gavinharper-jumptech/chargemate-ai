

## Smarter Auto-Scroll for Chat Messages

Currently, when the AI responds, the chat scrolls to the very bottom of the response. For long messages, this means users see the end first and have to scroll up to read from the beginning — frustrating, especially on mobile.

---

### How Other Chat UIs Handle This

Most chat apps scroll to show the **start** of a new message, not the end. This makes sense because:
- Users read from top to bottom
- You want to see where the response begins, then scroll down as you read
- Only scrolling to bottom makes sense for streaming responses (where content appears gradually)

Since your AI responses arrive all at once (not streamed), the best approach is to scroll so the **top of the new AI message** is visible.

---

### The New Scroll Behavior

**When the user sends a message:**
- Scroll to show their message at the bottom (current behavior is fine here)

**When the AI responds:**
- Scroll so the **start of the AI response** is visible near the top of the viewport
- The user can then read naturally and scroll down as needed

**When quick reply chips appear:**
- Gentle scroll to ensure chips are visible, but don't jump aggressively

---

### Implementation Approach

**File: `src/components/chat/ChatMessages.tsx`**

1. **Track the last message count** to detect when a new message arrives
2. **Identify if the new message is from the assistant** 
3. **Scroll behavior:**
   - For **user messages**: Continue scrolling to bottom (user knows what they typed)
   - For **assistant messages**: Scroll so the new message bubble is at the top of the visible area
   - Use `scrollIntoView({ behavior: 'smooth', block: 'start' })` on the new message element

4. **Add refs to message elements** so we can scroll to specific messages

The approach:
- Add a ref to track the last assistant message element
- When a new assistant message appears, scroll that element into view at the top
- When user sends a message, scroll to bottom to show their message + typing indicator

---

### Technical Details

```
Before (current):
┌─────────────────────┐
│ ...older content... │
│ ...long response... │
│ ...end of response..│ ← User sees this first
└─────────────────────┘

After (improved):  
┌─────────────────────┐
│ AI Response starts..│ ← User sees this first
│ ...continues...     │
│ ...can scroll down..│
└─────────────────────┘
```

**Changes needed:**

1. **Track previous message state** using `useRef` to compare current vs previous messages
2. **Add a ref to each MessageBubble** (using index or id) to scroll to it
3. **Update scroll logic:**
   - When `isLoading` becomes true → scroll to bottom (show typing indicator)
   - When new assistant message appears → scroll to start of that message
   - When quick replies appear → small scroll to ensure visibility

---

### Result

- When you send a message, you'll see your message and the typing indicator
- When the AI responds, you'll see the beginning of the response
- On mobile, long responses won't require scrolling back up
- Natural reading flow from top to bottom

