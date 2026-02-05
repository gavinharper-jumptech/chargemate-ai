

## Keep Quick Action Categories Persistent

A simple change to keep the category tabs and question chips visible at all times, even after the user selects a question.

---

### Current Behavior

When a user selects a quick question chip:
1. `handleQuickAction()` is called
2. Which calls `handleSend()`
3. Which sets `setShowQuickActions(false)`
4. Categories and chips disappear

---

### Desired Behavior

Categories and question chips should remain visible permanently, allowing users to continue exploring suggested questions throughout their conversation.

---

### Change Required

**File:** `src/pages/Index.tsx`

**Line 20-23 - Remove the hiding logic from `handleSend`:**

```tsx
// Current:
const handleSend = (content: string) => {
  setShowQuickActions(false);
  sendMessage(content);
};

// Updated:
const handleSend = (content: string) => {
  sendMessage(content);
};
```

Since `showQuickActions` will now always be `true`, we can also simplify by removing the state entirely:

```tsx
// Remove this line:
const [showQuickActions, setShowQuickActions] = useState(true);

// And always show quick actions (remove conditional checks)
```

---

### File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/pages/Index.tsx` | **Edit** | Remove `showQuickActions` state and always render quick actions |

---

### Result

- Category tabs and question chips will always be visible
- Users can continue to browse and select suggested questions throughout their conversation
- Works for both `inputPosition: 'above'` and `inputPosition: 'below'` layouts

