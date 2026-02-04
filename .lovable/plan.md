

## EV Home Charging Assistant - Chat Interface

A friendly, consumer-focused chat interface for helping homeowners with EV charging questions. The assistant connects to your n8n AI agent via webhook with streaming responses.

---

### Design & Branding

**Visual Style:**
- Friendly and approachable design with rounded corners and soft edges
- Green/eco color palette (fresh greens, natural earth tones)
- Subtle leaf or energy-inspired accents
- Clean typography with good readability

**Layout:**
- Centered chat container with comfortable width
- Header with assistant branding and friendly icon (like a charging bolt or leaf)
- Message bubbles with distinct user/assistant styling
- Fixed input area at the bottom

---

### Core Features

**1. Welcome Experience**
- Friendly greeting message from the assistant
- Brief intro: "Hi! I'm your EV Home Charging Assistant 🔌"
- Explanation of what the assistant can help with

**2. Quick Action Buttons**
- Three pre-defined question shortcuts displayed below the welcome message:
  - "How do I install a home charger?" (Installation)
  - "What does home charging cost?" (Cost & Pricing)
  - "Which charger should I buy?" (Product Recommendations)
- Buttons disappear after first interaction to keep chat clean

**3. Chat Interface**
- Text input with send button
- User messages in a contrasting color (right-aligned)
- Assistant messages in white/light green (left-aligned)
- Smooth animations for new messages

**4. Typing Indicator**
- Animated dots while waiting for response
- Shows streaming text as it arrives from the n8n webhook

**5. Streaming Responses**
- Real-time text display using Vercel AI SDK
- Markdown rendering for formatted responses
- Smooth character-by-character or chunk display

---

### Technical Approach

**Frontend:**
- React component with Vercel AI SDK (`useChat` hook)
- Tailwind CSS for styling with custom green color palette
- `react-markdown` for rendering formatted assistant responses

**Backend Connection:**
- Connect to your n8n webhook endpoint
- Stream responses back to the UI
- Handle errors gracefully with user-friendly messages

**No Storage Required:**
- Session-only memory (conversation clears on page refresh)
- No database or authentication needed

---

### Pages & Components

1. **Main Chat Page** - Full-screen chat experience
2. **ChatHeader** - Branding and title
3. **ChatMessages** - Message list with auto-scroll
4. **ChatInput** - Text input with send button
5. **QuickActions** - Starter question buttons
6. **TypingIndicator** - Animated "thinking" state
7. **MessageBubble** - Styled message component with markdown support

