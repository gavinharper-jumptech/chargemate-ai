

# Fix: Chat Bubble Text Alignment

## Problem
The text inside chat bubbles is being centered instead of left-aligned. This happens because the widget inherits `text-center` from the parent page's container.

**In `public/test-vindis.html` (line 321):**
```html
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <!-- ... -->
    <div id="ev-chat"></div>
</div>
```

The widget doesn't explicitly reset `text-align`, so it inherits `center` from the parent.

---

## Solution
Add `text-align: left` to the widget's root CSS class to prevent inheritance from parent pages.

---

## Files to modify

### 1) `src/index.css`
Add `text-align: left;` to the `.jt-ev-chat-widget` class:

```css
.jt-ev-chat-widget {
  height: 100%;
  font-family: var(--jt-ev-chat-font-family, inherit);
  text-align: left;  /* NEW: Prevent text-center inheritance from parent sites */
  
  /* ... rest of variables ... */
}
```

### 2) `src/components/chat/MessageBubble.tsx` (extra safety)
Add `text-left` class to the bubble div to ensure it's always left-aligned:

```tsx
<div
  className={cn(
    "max-w-[85%] px-4 py-3 md:max-w-[70%] text-left",  // Add text-left
    isUser
      ? "bg-chat-user text-chat-user-foreground"
      : "bg-chat-assistant text-chat-assistant-foreground"
  )}
```

---

## Result
| Before | After |
|--------|-------|
| Text centered inside bubbles | Text left-aligned (standard chat style) |
| Depends on parent page styles | Widget controls its own alignment |

---

## Note
The welcome title ("ASK VINDIS AI SPECIALIST") will remain centered because `WelcomeSection.tsx` explicitly uses `text-center` on its own container.

After this fix, remember to purge the jsDelivr CDN cache for the changes to appear in the CDN version.

