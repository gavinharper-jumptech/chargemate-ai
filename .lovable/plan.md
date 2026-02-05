

## Fix Message Container Border Scope

The current implementation applies a border to individual assistant message bubbles. Based on the mockup, the teal border should wrap around the **entire conversation area** including:
- User's question
- AI's response  
- Quick reply suggestion chips

---

### Current vs. Desired Layout

**Current behavior:**
```
┌─────────────────────────────┐
│ [User message - no border]  │
└─────────────────────────────┘
┌─────────────────────────────┐
│ ┌─ teal border ──────────┐  │
│ │ AI response            │  │
│ └────────────────────────┘  │
└─────────────────────────────┘
[Quick replies - no border]
```

**Desired behavior (matches mockup):**
```
┌────────────────────────────────┐
│ ┌─ teal border ─────────────┐  │
│ │        [User message]     │  │
│ │ AI response text...       │  │
│ │ [Reply chip] [Reply chip] │  │
│ └───────────────────────────┘  │
└────────────────────────────────┘
```

---

### Implementation Strategy

The border should wrap around the **messages content area** (not the welcome section or initial quick actions). In the "inputPosition: above" layout, this means wrapping the entire `<ChatMessages>` scrollable area content in a bordered container.

---

### Changes Required

#### 1. Update ChatMessages.tsx

Wrap the messages, typing indicator, and quick replies in a single bordered container:

```tsx
// Inside the ScrollArea, wrap all message content in a container
<div 
  className={cn(
    "flex flex-col gap-4 p-4",
    useContainerStyling && filteredMessages.length > 0 && "pb-0"
  )}
>
  {!hideWelcome && <WelcomeMessage />}
  {!hideWelcome && <CategorizedQuickActions ... />}

  {/* Bordered conversation container - only appears when there are messages */}
  {filteredMessages.length > 0 && (
    <div
      className={cn(
        "flex flex-col gap-4 p-4",
        useContainerStyling && "bg-[hsl(var(--chat-assistant))]"
      )}
      style={useContainerStyling ? {
        border: 'var(--message-container-border)',
        maxWidth: 'var(--message-container-max-width)',
        width: '100%',
      } : undefined}
    >
      {/* All messages inside the bordered container */}
      {filteredMessages.map((message) => (
        <div key={message.id} ref={...}>
          <MessageBubble ... />
        </div>
      ))}

      {isLoading && <TypingIndicator />}

      {!isLoading && quickReplySuggestions.length > 0 && (
        <QuickReplies ... />
      )}
    </div>
  )}

  {/* Show typing and quick replies outside container if no messages yet */}
  {filteredMessages.length === 0 && isLoading && <TypingIndicator />}
</div>
```

#### 2. Remove Individual Message Border Styling

Remove the per-message border/maxWidth styling since the container now handles it:

```tsx
// Remove this from individual messages:
style={useContainerStyling && message.role === "assistant" ? {
  border: 'var(--message-container-border)',
  maxWidth: 'var(--message-container-max-width)',
} : undefined}
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/chat/ChatMessages.tsx` | Move border from individual messages to conversation container wrapping all messages + quick replies |

---

### Visual Result

After this change, the Vindis preview will show:
- Grey background everywhere
- When a conversation starts, a **single teal-bordered white container** appears
- Inside the container: user question, AI response, and quick reply chips
- The entire conversation thread is visually grouped together

---

### Technical Notes

- The border container only renders when there are messages (`filteredMessages.length > 0`)
- Window mode remains unaffected (`useContainerStyling` guard)
- The container uses `--chat-assistant` background color to make the entire box white in Vindis
- Quick replies are now inside the bordered container, matching the mockup

