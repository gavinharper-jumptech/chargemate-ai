
## Update VindisPreview to Match Mockup

Based on my analysis, all required styling can be achieved by adjusting the CSS variable values in `VindisPreview.tsx`. However, one small code change is needed: the chip border color in default state is currently hardcoded as `border-primary/30` - we need to add a CSS variable for this.

---

### Changes Required

#### 1. Add New CSS Variable for Chip Border (Small Code Change)

**File: `src/index.css`** - Add chip border variable:
```css
--chip-border: var(--jt-ev-chat-chip-border, hsl(var(--primary) / 0.3));
```

**File: `src/components/chat/CategorizedQuickActions.tsx`** - Use the variable:
```tsx
className="border-[hsl(var(--chip-border))] bg-card ..."
```

#### 2. Update VindisPreview CSS Variables

**File: `src/pages/VindisPreview.tsx`**:

```tsx
const vindisStyles: React.CSSProperties & Record<string, string> = {
  // Grey background throughout
  '--jt-ev-chat-background': '210 15% 93%',
  '--jt-ev-chat-card': '210 15% 93%',
  
  // Primary = dark teal/blue for button
  '--jt-ev-chat-primary': '200 50% 25%',
  '--jt-ev-chat-primary-foreground': '0 0% 100%',
  
  // Muted text styling
  '--jt-ev-chat-muted-foreground': '210 10% 45%',
  
  // Border color for chips (grey)
  '--jt-ev-chat-border': '210 10% 75%',
  '--jt-ev-chat-chip-border': '210 10% 75%',
  
  // SQUARE corners for everything
  '--jt-ev-chat-input-radius': '0',
  '--jt-ev-chat-button-radius': '0',
  '--jt-ev-chat-chip-radius': '0',
  
  // Chip hover: white bg, teal border
  '--jt-ev-chat-chip-hover-bg': '0 0% 100%',
  '--jt-ev-chat-chip-hover-border': '200 50% 25%',
  '--jt-ev-chat-chip-hover-text': '200 50% 25%',
  
  // Input box: white background
  '--jt-ev-chat-input': '0 0% 100%',
  
  // Message container: teal border, white bg, constrained width
  '--jt-ev-chat-message-container-border': '2px solid hsl(200 50% 25%)',
  '--jt-ev-chat-message-container-max-width': '100%',
  '--jt-ev-chat-assistant': '0 0% 100%',
  '--jt-ev-chat-assistant-foreground': '200 50% 20%',
  
  // Font
  '--jt-ev-chat-font-family': 'system-ui, sans-serif',
};
```

---

### Summary of CSS Variable Adjustments

| Requirement | CSS Variable | Value |
|-------------|--------------|-------|
| Grey background | `--jt-ev-chat-background` | `210 15% 93%` |
| Grey card areas | `--jt-ev-chat-card` | `210 15% 93%` |
| Square chip corners | `--jt-ev-chat-chip-radius` | `0` |
| Grey chip border | `--jt-ev-chat-chip-border` | `210 10% 75%` (NEW) |
| White chip bg on hover | `--jt-ev-chat-chip-hover-bg` | `0 0% 100%` |
| Teal chip border on hover | `--jt-ev-chat-chip-hover-border` | `200 50% 25%` |
| Square input corners | `--jt-ev-chat-input-radius` | `0` |
| White input background | `--jt-ev-chat-input` | `0 0% 100%` |
| Dark blue/teal button | `--jt-ev-chat-primary` | `200 50% 25%` |
| Square button corners | `--jt-ev-chat-button-radius` | `0` |
| Teal message border | `--jt-ev-chat-message-container-border` | `2px solid hsl(200 50% 25%)` |
| White message bg | `--jt-ev-chat-assistant` | `0 0% 100%` |

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `--chip-border` CSS variable |
| `src/components/chat/CategorizedQuickActions.tsx` | Use `--chip-border` variable for default border |
| `src/pages/VindisPreview.tsx` | Update all CSS variable values to match mockup |

---

### Technical Notes

- All changes preserve window mode behavior (chip border variable applies globally but won't break anything)
- The embedded input layout is already working correctly
- Square corners (`0`) will apply to input, button, and chips
- The grey background will be consistent throughout the widget
