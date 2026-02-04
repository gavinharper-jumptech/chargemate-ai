
## Add Quick Reply Chips After AI Messages

This feature will parse the AI's response to detect when it offers choices (like "Would you like me to explain more about specific tariffs, smart charging options, or how to calculate potential savings?") and automatically display clickable chips that let users respond with one tap.

---

### How It Will Work

1. When the AI finishes responding, we check if the last message contains a question offering choices
2. We extract the suggested options from that text using pattern matching
3. We display small, clickable "chips" below the AI's message
4. When clicked, the chip sends the corresponding message to the AI
5. The chips disappear once the user sends any message

---

### What You'll See

After an AI response like:
> "Would you like me to explain more about specific tariffs, smart charging options, or how to calculate potential savings?"

You'll see three chips appear:
- "Explain specific tariffs"
- "Explain smart charging options"  
- "Explain how to calculate potential savings"

Clicking any chip sends that as your next message.

---

### Implementation Details

**1. Create new component: `src/components/chat/QuickReplies.tsx`**
- A component that displays an array of reply options as styled chips
- Reuses similar styling to the existing `QuickActions` component (rounded pills with hover effects)
- Props: list of suggestions + callback when one is selected

**2. Create helper utility: `src/lib/extractSuggestions.ts`**
- A function that parses the AI's message to detect questions offering choices
- Looks for patterns like "Would you like..." or "I can help with..." followed by comma-separated options
- Returns an array of cleaned-up suggestion strings, or empty array if none found
- Common patterns to detect:
  - "Would you like me to [option1], [option2], or [option3]?"
  - "I can provide more information about [option1], [option2], or [option3]"

**3. Update `src/components/chat/ChatMessages.tsx`**
- After rendering all messages, check if the last message is from the assistant
- If so, extract suggestions from that message
- Display `QuickReplies` component with the extracted options
- Hide the chips when loading (user is waiting for response) or when there are no suggestions

**4. Update `src/pages/Index.tsx`**
- The existing `onQuickAction` handler already works for this use case (sends a message and hides initial quick actions)
- No changes needed here since the same callback can be passed through

---

### Suggestion Extraction Logic

The extraction function will:
1. Look for the last sentence/paragraph that contains a question mark
2. Check for patterns like "Would you like", "I can explain", "Do you want to know about"
3. Split on commas and "or" to find the individual options
4. Clean up each option (remove "me to", trim whitespace, capitalize first letter)
5. Return up to 4 suggestions maximum to avoid cluttering the UI

Example transformations:
- "explain more about specific tariffs" → "Explain specific tariffs"
- "smart charging options" → "Smart charging options"
- "how to calculate potential savings" → "How to calculate potential savings"
