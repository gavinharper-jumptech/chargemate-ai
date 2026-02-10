

# Remove Hardcoded Default Webhook URL

## Problem
`src/lib/chat-config.ts` (line 55) defines a hardcoded fallback webhook URL:

```
const DEFAULT_WEBHOOK_URL = "https://jt-eco.app.n8n.cloud/webhook/1cd4ac0b-7a32-4c9f-9307-d0501ff02822";
```

If a widget user forgets to pass `webhookUrl` in their `createChat()` config, the widget silently falls back to this URL -- sending traffic (and potentially sensitive user messages) to the wrong endpoint, and incurring costs on the default n8n account.

## Fix

### 1. `src/lib/chat-config.ts`
- Remove the `DEFAULT_WEBHOOK_URL` constant entirely
- In `getConfig()`, set `webhookUrl` to `mergedOptions.webhookUrl` (no fallback) -- it will be `undefined` if not provided

### 2. `src/hooks/use-n8n-chat.ts`
- At the top of `sendMessage`, check if `webhookUrl` is falsy
- If missing, show a toast error ("No webhook URL configured") and return early without sending
- This prevents silent failures and gives clear feedback

### 3. `src/components/chat/WelcomeSection.tsx` (or equivalent)
- No changes needed -- the error toast is sufficient feedback

## Summary of changes

| File | Change |
|------|--------|
| `src/lib/chat-config.ts` | Remove `DEFAULT_WEBHOOK_URL`, stop falling back to it |
| `src/hooks/use-n8n-chat.ts` | Guard against missing `webhookUrl`, show error toast |

Two files, minimal diff. The dev preview will still work -- you just need to pass `webhookUrl` explicitly (via URL param, `EVChatConfig`, or `createChat()` options).

