

# Fix Page Jump When AI Responds

## Problem Identified

When an AI response arrives, the widget calls `messageEl.scrollIntoView({ behavior: 'smooth', block: 'start' })` on line 95 of `ChatMessages.tsx`. 

The `scrollIntoView` method is designed to scroll the element into the browser's **main viewport**. When the chat widget is embedded in a container further down a webpage (like your Vindis mockup), the browser:
1. Scrolls the widget's internal container
2. **Also scrolls the main page** to try and bring the message to the top of the screen

This causes the "page jump" you're experiencing.

## Solution

Replace `scrollIntoView` with a manual scroll calculation that only affects the widget's internal scroll container, not the parent page.

## Technical Changes

### File: `src/components/chat/ChatMessages.tsx`

**Lines 89-98** - Replace `scrollIntoView` with contained scroll logic:

```tsx
// BEFORE (causes page jump)
} else if (newMessage.role === "assistant") {
  const messageEl = messageRefs.current.get(newMessage.id);
  if (messageEl) {
    requestAnimationFrame(() => {
      messageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

// AFTER (scroll contained to widget only)
} else if (newMessage.role === "assistant") {
  const messageEl = messageRefs.current.get(newMessage.id);
  if (messageEl) {
    requestAnimationFrame(() => {
      // Calculate scroll position relative to the widget's viewport only
      const viewportRect = viewport.getBoundingClientRect();
      const elementRect = messageEl.getBoundingClientRect();
      const targetScrollTop = viewport.scrollTop + (elementRect.top - viewportRect.top);
      viewport.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
    });
  }
}
```

## Why This Works

| Method | Behavior |
|--------|----------|
| `scrollIntoView()` | Browser scrolls ALL scrollable ancestors (including the page body) |
| `viewport.scrollTo()` | Only scrolls the specific container element |

The fix calculates where the message element is relative to the widget's viewport and scrolls just that container—leaving your page scroll position untouched.

## Verification

After this change:
- User messages will still scroll the widget to show the message + typing indicator
- AI responses will scroll the widget to show the start of the response
- The parent page will **not** be affected by any widget scrolling

