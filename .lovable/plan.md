

## Show Message Container Box Always (Not Just After First Message)

Currently, the bordered conversation container (with the teal-green border) only appears after the user submits their first question. You want this container to always be visible.

---

### Root Cause

In `ChatMessages.tsx`, line 136 has this condition:

```tsx
{filteredMessages.length > 0 && (
  <div className="..." style={{ border: 'var(--message-container-border)', ... }}>
    {/* messages, typing indicator, quick replies */}
  </div>
)}
```

This means the entire bordered container is hidden until there are messages.

---

### Solution

Remove the conditional rendering so the container always shows, and move the typing indicator inside it. When empty, the container will display as an empty bordered box ready to receive the conversation.

---

### Changes Required

#### ChatMessages.tsx

**Before (lines 135-179):**
```tsx
{/* Bordered conversation container - only appears when there are messages */}
{filteredMessages.length > 0 && (
  <div className={cn(...)} style={...}>
    {filteredMessages.map(...)}
    {isLoading && <TypingIndicator />}
    {!isLoading && quickReplySuggestions.length > 0 && <QuickReplies ... />}
  </div>
)}

{/* Show typing indicator outside container if no messages yet */}
{filteredMessages.length === 0 && isLoading && <TypingIndicator />}
```

**After:**
```tsx
{/* Bordered conversation container - always visible */}
<div className={cn(...)} style={...}>
  {filteredMessages.map(...)}
  {isLoading && <TypingIndicator />}
  {!isLoading && quickReplySuggestions.length > 0 && <QuickReplies ... />}
</div>
```

- Remove the `filteredMessages.length > 0 &&` condition
- Remove the separate typing indicator that was outside the container
- The container will now always render, showing as an empty bordered box when no messages exist

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/chat/ChatMessages.tsx` | Remove conditional wrapper, always show the bordered container |

---

### Visual Result

- **Before first message**: Empty white box with teal-green border visible
- **After first message**: Same box now contains the conversation
- The container serves as a visual "stage" where the conversation will appear

