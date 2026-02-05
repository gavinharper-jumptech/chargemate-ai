

## Add Configurable Send Button Text for Fullscreen Mode

Add the ability to customize the send button text via widget configuration. In window mode, the button always shows the icon only to save space. In fullscreen mode, if button text is configured, it shows a text button (like "Ask AI Specialist"); otherwise, it shows the standard icon button.

---

### Changes Overview

**1. Add `sendButtonText` to the i18n configuration**

The most natural place for this setting is in the `i18n` config object alongside other text customizations like `inputPlaceholder`.

**File: `src/lib/chat-config.ts`**
- Add `sendButtonText?: string` to `I18nConfig` interface
- No default value needed (undefined means icon-only)

---

**2. Update ChatInput to accept and use button text**

ChatInput needs to know the mode and the button text setting to conditionally render either the icon button or a text button.

**File: `src/components/chat/ChatInput.tsx`**
- Import `useChatConfig` to access `mode` and `i18n.sendButtonText`
- Conditionally render:
  - **Window mode**: Always icon button (current behavior)
  - **Fullscreen mode with text set**: Text button with label
  - **Fullscreen mode without text**: Icon button (current behavior)

---

### File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/lib/chat-config.ts` | **Edit** | Add `sendButtonText` to `I18nConfig` interface |
| `src/components/chat/ChatInput.tsx` | **Edit** | Conditionally render text or icon button based on mode and config |

---

### Technical Details

**chat-config.ts - I18nConfig update:**
```typescript
export interface I18nConfig {
  title?: string;
  subtitle?: string;
  inputPlaceholder?: string;
  getStarted?: string;
  sendButtonText?: string; // New: Custom text for send button (fullscreen only)
}
```

**ChatInput.tsx - Conditional button rendering:**
```tsx
import { useChatConfig } from "@/context/ChatConfigContext";

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const { mode, i18n } = useChatConfig();
  const [input, setInput] = useState("");
  
  // Show text button only in fullscreen mode when sendButtonText is configured
  const showTextButton = mode !== "window" && i18n?.sendButtonText;

  // ... existing handlers ...

  return (
    <form ...>
      <Textarea ... />
      
      {showTextButton ? (
        <Button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="h-11 shrink-0 rounded-xl bg-primary hover:bg-primary/90 px-4"
        >
          {i18n.sendButtonText}
        </Button>
      ) : (
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isLoading}
          className="h-11 w-11 shrink-0 rounded-xl bg-primary hover:bg-primary/90"
        >
          <Send className="h-5 w-5" />
        </Button>
      )}
    </form>
  );
};
```

---

### Widget Usage Example

```javascript
createChat({
  webhookUrl: 'https://...',
  mode: 'fullscreen',
  i18n: {
    sendButtonText: 'Ask AI Specialist'  // Shows text button
  }
});

// Or without text - shows icon button (default)
createChat({
  webhookUrl: 'https://...',
  mode: 'fullscreen'
});

// Window mode - always icon, ignores sendButtonText
createChat({
  webhookUrl: 'https://...',
  mode: 'window',
  i18n: {
    sendButtonText: 'Ask AI Specialist'  // Ignored in window mode
  }
});
```

---

### Result

- Window mode: Always shows compact icon button
- Fullscreen mode: Shows text button if `i18n.sendButtonText` is set, otherwise icon button
- Follows existing pattern of using `i18n` for text customizations
- Non-breaking change - existing implementations continue to work unchanged

