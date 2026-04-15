

# Fix Mobile Layout Issues for Embedded Widget

## Problems

1. **Quick action chips overflow** on mobile — they use `whitespace-nowrap` (from the Button component) so long question text pushes content off-screen to the right
2. **"ASK AI SPECIALIST" button** is too wide on mobile — it sits beside the text input with `px-4` and long text, getting clipped or pushed offscreen
3. **Input form layout** doesn't stack on narrow screens — the textarea and button remain side-by-side even when there isn't enough room

## Changes

### 1. `src/components/chat/CategorizedQuickActions.tsx`
- The mobile dropdown should already activate via `useIsMobile()`, but add `overflow-hidden` to the outer container as a safety net
- For the chip buttons, allow text wrapping by adding `whitespace-normal text-left` to override the Button component's `whitespace-nowrap`

### 2. `src/components/chat/ChatInput.tsx` (separate layout — the one used here)
- On mobile, stack the textarea and send button vertically instead of side-by-side: change the form from `flex items-end gap-2` to `flex flex-col sm:flex-row items-stretch sm:items-end gap-2`
- Make the text button full-width on mobile: add `w-full sm:w-auto` when `showTextButton` is true
- Truncate long button text on very small screens or shrink font: add `text-xs sm:text-sm truncate` to the send button

### 3. `src/pages/Index.tsx`
- Add `overflow-hidden` to the quick actions wrapper div to prevent horizontal overflow from bubbling up

These are CSS-only changes — no logic changes needed.

