

## Connect to n8n Webhook

Configure the chat interface to send messages to your n8n webhook and receive responses.

---

### What We'll Do

1. **Update the chat configuration** to use a custom fetch function that sends requests to your n8n webhook URL
2. **Handle the n8n response format** properly (n8n returns data differently than the AI SDK expects)
3. **Add error handling** with user-friendly messages if the connection fails

---

### How It Will Work

When you send a message:
1. Your message gets sent to the n8n webhook as a POST request
2. n8n processes it through your AI agent
3. The response comes back and displays in the chat

---

### What You'll Need to Provide

After I implement this, you'll need to **paste your webhook URL** into the code. It will look something like:
```
https://your-n8n-instance.com/webhook/abc123
```

---

### Technical Details

**Changes to `src/pages/Index.tsx`:**
- Switch from `useChat` to a custom implementation since n8n webhooks don't follow the Vercel AI SDK streaming protocol
- Create a simple fetch-based approach that:
  - Sends `{ message: "user's question", sessionId: "unique-id" }` to your webhook
  - Receives the AI response and displays it
  - Handles loading states and errors

**New utility:**
- Add a simple session ID generator to maintain conversation context in n8n

**Error handling:**
- Show a friendly toast message if the webhook fails
- Display inline error message in chat if something goes wrong

---

### n8n Webhook Setup Checklist

Make sure your n8n webhook node is configured to:
- Accept **POST** requests
- Return the AI response as plain text or JSON with a `response` or `output` field
- (Optional) Accept a `sessionId` field if you want conversation memory in n8n

