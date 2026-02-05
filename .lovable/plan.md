

## Remove Lightning Bolt Icon from Welcome Message

This is a simple change to remove the Zap icon from the welcome message area, leaving just the title and subtitle.

---

### What Will Change

**Before:**
- Lightning bolt icon in a green circle
- Title below
- Subtitle below title

**After:**
- Title only
- Subtitle below title
- Cleaner, more minimal welcome area

---

### Implementation

**File to modify:** `src/components/chat/ChatMessages.tsx`

1. Remove the `Zap` import from lucide-react (line 9)
2. Remove the icon container div entirely (lines 28-31):
   ```tsx
   // DELETE THIS:
   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
     <Zap className="h-8 w-8 text-primary" />
   </div>
   ```
3. Adjust spacing on the remaining container (reduce top padding since there's no icon above)

---

### Updated WelcomeMessage Component

```tsx
const WelcomeMessage = () => {
  const { welcomeTitle, welcomeMessage } = useChatConfig();

  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-6 text-center">
      <h2 className="text-xl font-semibold text-foreground">
        {welcomeTitle}
      </h2>
      <p className="max-w-md text-muted-foreground">
        {welcomeMessage}
      </p>
    </div>
  );
};
```

---

### Result

The welcome area will show just the configurable title and subtitle text, without any icon, giving a cleaner look that works for any brand.

