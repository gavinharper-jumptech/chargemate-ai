

# Fix: useN8nChat Not Reading webhookUrl From Context

## Problem
When you call `createChat({ webhookUrl: '...' })`, the webhookUrl is passed into `ChatConfigProvider` (React context). However, `useN8nChat` on line 31 calls `getConfig()` with no arguments, which only reads from `window.EVChatConfig` -- it never checks the React context. So the webhookUrl you passed is ignored.

This worked before only because there was a hardcoded default URL fallback, which we just removed.

## Fix

### `src/hooks/use-n8n-chat.ts`

1. Import and use `useChatConfig()` from the context instead of calling `getConfig()` directly
2. Read `webhookUrl` from the context value (which already merges `createChat()` options with window config)
3. Remove the `getConfig` import since it's no longer needed

### What changes

- Remove: `import { getConfig } from "@/lib/chat-config"`
- Add: `import { useChatConfig } from "@/context/ChatConfigContext"`
- Inside the hook, call `const { webhookUrl } = useChatConfig()` once at the top level
- Remove the `getConfig()` call from inside `sendMessage`
- Add `webhookUrl` to the `useCallback` dependency array

### Why this works

`ChatConfigProvider` already merges `createChat()` options, `window.EVChatConfig`, and defaults into a single resolved config object. Every other component already reads from this context (`ChatInput`, `ChatMessages`, `WelcomeSection`, etc). `useN8nChat` was the only consumer still bypassing it.

### Single file change
Only `src/hooks/use-n8n-chat.ts` needs editing. No other files affected.
