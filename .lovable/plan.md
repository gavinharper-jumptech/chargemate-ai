

# Fix: Scroll Only Messages Inside the Bordered Container

## Problem
Currently, the entire bordered message container (with the teal border) scrolls away when you scroll through messages. The scroll should be **contained inside** the bordered box, keeping the border always visible.

**Current structure:**
```
<ScrollArea>                              ← Scrolls everything
  <div className="p-4">
    <WelcomeMessage />
    <CategorizedQuickActions />
    <div style={{ border: 'teal...' }}>   ← Border scrolls away!
      {messages}
      {typing indicator}
      {quick replies}
    </div>
  </div>
</ScrollArea>
```

**Desired structure:**
```
<div className="p-4">
  <WelcomeMessage />
  <CategorizedQuickActions />
  <div style={{ border: 'teal...' }}>     ← Border stays fixed
    <ScrollArea>                           ← Scroll ONLY the content inside
      {messages}
      {typing indicator}
      {quick replies}
    </ScrollArea>
  </div>
</div>
```

---

## Solution

Refactor `ChatMessages.tsx` so the ScrollArea is **inside** the bordered container, not wrapping it.

### Key changes to `src/components/chat/ChatMessages.tsx`:

1. **Move the bordered container outside the ScrollArea**
2. **Wrap only the messages/typing/quick-replies inside ScrollArea**
3. **Give the bordered container a fixed/flex height** so the ScrollArea inside has room to scroll
4. **Keep the welcome section and quick actions outside** (they're already static in the `inputPosition: above` layout)

### New structure:

```tsx
return (
  <div className="flex-1 min-h-0 flex flex-col gap-4 p-4">
    {!hideWelcome && <WelcomeMessage />}
    {!hideWelcome && <CategorizedQuickActions ... />}

    {/* Bordered container - FIXED, border always visible */}
    <div
      className={cn(
        "flex-1 min-h-0 flex flex-col",  // flex-1 to fill remaining space
        useContainerStyling && "mx-auto bg-[hsl(var(--message-container-bg))]"
      )}
      style={useContainerStyling ? {
        border: 'var(--message-container-border)',
        maxWidth: 'var(--message-container-max-width)',
        minHeight: 'var(--message-container-min-height)',
        width: '100%',
      } : undefined}
    >
      {/* ScrollArea INSIDE the border - only messages scroll */}
      <ScrollArea className="flex-1 min-h-0" ref={scrollRef}>
        <div className="flex flex-col gap-4 p-4">
          {messages.map(...)}
          {isLoading && <TypingIndicator />}
          {quickReplySuggestions && <QuickReplies ... />}
        </div>
      </ScrollArea>
    </div>
  </div>
);
```

---

## Visual result

| Before | After |
|--------|-------|
| Scroll moves the entire bordered box | Border stays fixed, content scrolls inside |
| Top border disappears when scrolling | Top border always visible |
| Feels like page/container is moving | Feels like a proper chat window |

---

## Files to modify

### `src/components/chat/ChatMessages.tsx`
- Restructure the component so ScrollArea is nested inside the bordered container
- Ensure the outer container uses `flex-1 min-h-0` to constrain height properly
- Move padding from the outer ScrollArea wrapper to inside the content

---

## Build/CDN Note
After this fix is merged, you'll need to either:
1. Purge the jsDelivr cache again, OR
2. Test with the local widget (default in `/test-vindis.html`)

