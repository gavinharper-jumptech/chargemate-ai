

## Refactor Category Quick Actions to Tabbed Interface with Mobile Dropdown

Transform the current categorized quick actions from a vertical list layout to a tabbed interface that works well on both desktop and mobile.

---

### Current vs New Design

**Current Implementation:**
- Categories displayed vertically with icons + headers
- All questions shown at once as chips below each category
- Same layout on mobile and desktop

**New Implementation:**

| Device | Categories | Questions |
|--------|------------|-----------|
| **Desktop** | Horizontal tabs with underline indicator | Chips displayed below selected tab |
| **Mobile** | Horizontal scrollable tabs (swipeable) | Native `<select>` dropdown instead of chips |

---

### Technical Approach

#### 1. Rewrite `CategorizedQuickActions.tsx`

Replace the current vertical list with a tabbed interface:

```text
+------------------------------------------------------------------+
|  [INSTALLATION]  [COSTS & GRANTS]  [TECHNOLOGY]  [RANGE]         |  <- Tabs
|       ────                                                        |  <- Active underline
+------------------------------------------------------------------+
|                                                                   |
|  [ Question chip 1 ]  [ Question chip 2 ]  [ Question chip 3 ]   |  <- Desktop
|                                                                   |
|  ┌─────────────────────────────────────────┐                     |  <- Mobile
|  │ Select a question...                  ▼ │                     |
|  └─────────────────────────────────────────┘                     |
+------------------------------------------------------------------+
```

**Component Structure:**
- `useState` for `activeCategory` (defaults to first category)
- Use existing `useIsMobile()` hook to toggle between chip view and dropdown view
- Map over category titles for tabs
- Only render questions for the active category

#### 2. Desktop Tab Bar

```tsx
<div className="flex gap-1 border-b border-border overflow-x-auto">
  {categories.map((category) => (
    <button
      key={category.title}
      onClick={() => setActiveCategory(category.title)}
      className={cn(
        "px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
        "border-b-2 -mb-px",
        activeCategory === category.title
          ? "border-primary text-primary"
          : "border-transparent text-muted-foreground hover:text-foreground"
      )}
    >
      {category.title.toUpperCase()}
    </button>
  ))}
</div>
```

#### 3. Desktop Question Chips

```tsx
<div className="flex flex-wrap gap-2 p-4">
  {activeQuestions.map((question) => (
    <Button
      key={question}
      variant="outline"
      size="sm"
      onClick={() => onSelect(question)}
      className="rounded-full ..."
    >
      {question}
    </Button>
  ))}
</div>
```

#### 4. Mobile Native Dropdown

```tsx
<select
  onChange={(e) => onSelect(e.target.value)}
  value=""
  className="w-full px-4 py-3 border rounded-md bg-background text-foreground"
>
  <option value="" disabled>
    Select a question...
  </option>
  {activeQuestions.map((question) => (
    <option key={question} value={question}>
      {question}
    </option>
  ))}
</select>
```

---

### File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/chat/CategorizedQuickActions.tsx` | **Rewrite** | Replace vertical layout with tabbed interface + responsive mobile dropdown |

---

### Implementation Details

1. **State Management**
   - `activeCategory: string` - tracks selected tab (defaults to first category title)
   - Derive `activeQuestions` from the selected category

2. **Responsive Behavior**
   - Use existing `useIsMobile()` hook from `src/hooks/use-mobile.tsx`
   - Conditionally render chips (desktop) or native select (mobile)

3. **Tab Styling**
   - Horizontal flex container with `overflow-x-auto` for scroll on mobile
   - Active tab: primary color with bottom border
   - Inactive tabs: muted color, no border

4. **Accessibility**
   - Tab buttons use semantic `<button>` elements
   - Native `<select>` provides full mobile accessibility
   - Clear visual focus states

5. **CSS Variables**
   - Continue using existing Tailwind classes that map to the `--jt-ev-chat-*` CSS variables
   - No new CSS variables needed

---

### Expected Result

**Desktop (768px+):**
- Clean horizontal tabs at top
- Question chips appear in a wrapping flex layout below
- Clicking a chip sends the question

**Mobile (<768px):**
- Same horizontal tabs (scrollable if needed)
- Native dropdown replaces chips
- Selecting from dropdown sends the question

This matches your mockup design and optimizes mobile screen real estate.

