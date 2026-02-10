

# Add Configurable Metadata to Webhook Payload

## What changes

The webhook payload currently sends `{ message, sessionId }`. We'll add `action` and an optional `metadata` object, keeping `message` as-is.

## Usage after this change

```js
// With metadata
createChat({
  webhookUrl: 'https://...',
  metadata: { userEmail: 'preston@yesss.co.uk' },
});

// Without metadata -- works exactly as before
createChat({
  webhookUrl: 'https://...',
});
```

Payload with metadata:
```json
{
  "action": "sendMessage",
  "message": "user's message here",
  "sessionId": "8f24954a-...",
  "metadata": { "userEmail": "preston@yesss.co.uk" }
}
```

Payload without metadata:
```json
{
  "action": "sendMessage",
  "message": "user's message here",
  "sessionId": "8f24954a-..."
}
```

When `metadata` is not provided in config, it is simply omitted from the payload -- no empty object, no error. Fully backward-compatible.

## Files to change

### 1. `src/lib/chat-config.ts`
- Add `metadata?: Record<string, unknown>` to `CreateChatOptions` interface
- Pass through in `getConfig()`: `metadata: mergedOptions.metadata`  (remains `undefined` if not set)

### 2. `src/hooks/use-n8n-chat.ts`
- Read `metadata` from `useChatConfig()` alongside `webhookUrl`
- Update the fetch body to:
  ```ts
  body: JSON.stringify({
    action: "sendMessage",
    message: content.trim(),
    sessionId,
    ...(metadata && { metadata }),
  })
  ```
- Add `metadata` to the `useCallback` dependency array

### 3. `docs/WIDGET_GUIDE.md`
- Document the new `metadata` option and updated payload format

## Optionality guarantee

`metadata` is typed as `Record<string, unknown> | undefined`. When not provided:
- It stays `undefined` in config
- The spread `...(metadata && { metadata })` ensures the key is excluded from the JSON payload entirely
- No runtime errors, no empty objects -- the webhook receives the same shape as before plus the new `action` field

Three files, minimal diff.

