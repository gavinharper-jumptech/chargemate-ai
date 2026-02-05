
# Style Quick Response Chips to Match Quick Question Buttons

## Overview
Update the quick response chips (suggestions that appear below AI messages) to use the same CSS variable-based styling as the quick question buttons, ensuring consistent appearance across the widget.

## Current State
- **Quick question buttons** (in `CategorizedQuickActions.tsx`): Use CSS variables (`--chip-bg`, `--chip-text`, `--chip-border`, `--chip-hover-*`, `--chip-radius`)
- **Quick response chips** (in `QuickReplies.tsx`): Use hardcoded Tailwind classes (`rounded-full`, `border-primary/30`, `bg-card`, etc.)

## Changes Required

### File: `src/components/chat/QuickReplies.tsx`

Update the Button styling to match the quick question buttons:

**Before:**
```tsx
className="rounded-full border-primary/30 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
```

**After:**
```tsx
className="border-[var(--chip-border)] bg-[hsl(var(--chip-bg))] text-[hsl(var(--chip-text))] transition-colors h-auto py-2 px-3 hover:bg-[hsl(var(--chip-hover-bg))] hover:border-[hsl(var(--chip-hover-border))] hover:text-[hsl(var(--chip-hover-text))]"
style={{ borderRadius: 'var(--chip-radius)' }}
```

## Result
For the Vindis theme, both quick question buttons and quick response chips will have:
- **Inactive**: White background, `#e2e8f0` border, dark navy text, square corners
- **Hover**: White background, teal `#00b198` border, dark navy text
