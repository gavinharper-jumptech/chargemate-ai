

## Add Input Position Configuration Option

Add a new widget configuration option that allows users to choose whether the question input area appears above or below the chat output area.

---

### Current vs New Layout

**Current (input below):**
```text
+---------------------------+
|      Welcome Header       |
|      Category Tabs        |
|      Question Chips       |
|      Chat Messages        |
|      (scrollable)         |
+---------------------------+
|      Input Textarea       |
+---------------------------+
```

**New Option (input above):**
```text
+---------------------------+
|      Welcome Header       |
|      Category Tabs        |
|      Question Chips       |
|      Input Textarea       |
+---------------------------+
|      Chat Output Box      |
|      (scrollable)         |
+---------------------------+
```

---

### Configuration API

Add a new `inputPosition` option:

```typescript
createChat({
  webhookUrl: 'https://...',
  inputPosition: 'above',  // or 'below' (default)
  // ... other options
})
```

| Value | Behavior |
|-------|----------|
| `'below'` | Input at bottom (current default, traditional chat style) |
| `'above'` | Input above output area (matches your mockup design) |

---

### Technical Approach

#### 1. Update Configuration Types

**File:** `src/lib/chat-config.ts`

Add `inputPosition` to the configuration interfaces:

```typescript
export interface CreateChatOptions {
  // ... existing options
  
  // Layout
  inputPosition?: 'above' | 'below'; // Default: 'below'
}
```

#### 2. Update Config Reader

**File:** `src/lib/chat-config.ts`

Add default value in `getConfig()`:

```typescript
return {
  // ... existing config
  inputPosition: mergedOptions.inputPosition || 'below',
};
```

#### 3. Update Index.tsx Layout

**File:** `src/pages/Index.tsx`

Read the `inputPosition` config and conditionally render components:

```tsx
const Index = ({ className }: IndexProps) => {
  const { isEmbedded, mode, inputPosition } = useChatConfig();
  // ...
  
  return (
    <div className={className || "flex h-full flex-col bg-background"}>
      {showHeader && <ChatHeader />}
      
      {/* Input ABOVE when configured */}
      {inputPosition === 'above' && (
        <>
          <ChatMessages ... showQuickActions={showQuickActions} ... />
          {/* But only the header part - need to split */}
        </>
      )}
      
      {/* This needs restructuring - see detailed approach below */}
    </div>
  );
};
```

#### 4. Restructure Components for Flexibility

The tricky part is that `ChatMessages` currently contains:
- Welcome message
- Category tabs + question chips
- Chat conversation history
- Typing indicator

For the "input above" layout, we need:
1. Welcome + categories + chips + input (static top section)
2. Chat output (scrollable bottom section)

**Solution:** Extract the "welcome + quick actions" into a separate section that can be positioned independently:

```text
Input Above Layout:
+---------------------------+
|  WelcomeSection           |  <- Static
|  (title, subtitle, tabs,  |
|   chips, input)           |
+---------------------------+
|  ChatOutput               |  <- Scrollable
|  (messages, typing)       |
+---------------------------+

Input Below Layout (current):
+---------------------------+
|  ChatMessages             |  <- Scrollable
|  (welcome, tabs, chips,   |
|   messages, typing)       |
+---------------------------+
|  ChatInput                |  <- Static
+---------------------------+
```

---

### File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/lib/chat-config.ts` | **Edit** | Add `inputPosition` to types and defaults |
| `src/context/ChatConfigContext.tsx` | **Edit** | Ensure `inputPosition` is available in context |
| `src/pages/Index.tsx` | **Edit** | Conditionally render layout based on `inputPosition` |
| `src/components/chat/ChatMessages.tsx` | **Edit** | Accept prop to hide welcome/quick actions when rendered separately |

---

### Implementation Details

1. **Backward Compatibility**
   - Default is `'below'` - existing widgets unchanged
   - Existing integrations work without modification

2. **Component Flexibility**
   - Add `hideWelcome?: boolean` prop to `ChatMessages` 
   - When `inputPosition: 'above'`, welcome section renders separately at top
   - `ChatMessages` only shows conversation history

3. **Layout Structure for "above" mode**
   ```tsx
   <div className="flex h-full flex-col">
     {/* Top section - not scrollable */}
     <div className="flex-shrink-0">
       <WelcomeSection />
       <CategorizedQuickActions />
       <ChatInput />
     </div>
     
     {/* Bottom section - scrollable output */}
     <ChatMessages hideWelcome />
   </div>
   ```

4. **URL Parameter Support**
   - Support `?inputPosition=above` for testing

---

### Usage Examples

**Widget with input above (your mockup style):**
```javascript
createChat({
  target: '#chat-container',
  inputPosition: 'above',
  webhookUrl: 'https://...'
})
```

**Widget with input below (traditional chat):**
```javascript
createChat({
  target: '#chat-container',
  inputPosition: 'below',  // or omit (default)
  webhookUrl: 'https://...'
})
```

**Testing via URL:**
```
https://your-site.com/?inputPosition=above
```

