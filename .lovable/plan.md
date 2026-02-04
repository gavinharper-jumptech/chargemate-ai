
## Goal
Make the assistant’s response render as real, readable Markdown (headings, paragraphs, spacing, and bullet lists) exactly as returned by your n8n AI agent.

## What’s happening (root cause)
- Your UI uses `react-markdown`, which correctly converts `# ...` and `- ...` into `<h1>` and `<ul><li>...</li></ul>`.
- But Tailwind’s base “preflight” CSS intentionally removes default browser styling for headings and lists:
  - `h1/h2` lose their default font-size and margins (so headings look like normal text).
  - `ul/ol` lose `list-style` and padding (so bullets/numbers don’t appear).
- The styling you added in `MessageBubble.tsx` relies on Tailwind Typography’s `prose` class and `prose-*` variants (like `prose-ul:list-disc`, `prose-headings:...`).
- The Tailwind Typography plugin is installed (`@tailwindcss/typography` is in `devDependencies`) but it is **not enabled** in `tailwind.config.ts`.  
  Result: `prose` and `prose-*` variants don’t produce any CSS, so your rendered Markdown looks like plain text.

## Fix strategy
Enable the Tailwind Typography plugin so:
- headings regain proper size/weight and spacing
- paragraphs regain margins
- bullet/number markers appear again
- your existing `prose-*` override classes in `MessageBubble.tsx` start working as intended

## Implementation steps
### 1) Enable Tailwind Typography plugin
**File:** `tailwind.config.ts`

- Update the `plugins` array to include `@tailwindcss/typography` alongside `tailwindcss-animate`.

Expected outcome:
- The `.prose` class becomes active.
- `prose-headings:*`, `prose-ul:*`, etc. begin generating CSS.

### 2) Small refinement to list indentation (optional but recommended)
**File:** `src/components/chat/MessageBubble.tsx`

- Once Typography is enabled, verify indentation/spacing visually.
- If bullets are too close to the left edge, adjust from `prose-ul:pl-4` to `prose-ul:pl-6` (same for `prose-ol`).
- Optionally add `prose-li:marker:text-chat-assistant-foreground` to ensure bullet markers match your theme.

(These are minor tweaks; the main issue is step 1.)

## Verification (end-to-end)
1. In the UI, send a message that returns the sample Markdown you pasted (headings + “Key points” list).
2. Confirm:
   - `# Home EV Charging Costs` is visually larger/bolder than body text
   - spacing exists between sections (heading → paragraph → subheading → list → paragraph)
   - the list shows visible bullet markers and correct indentation
3. Check in dark mode as well (since your chat uses theme tokens).

## Notes / Why this is the correct fix
- The Markdown is already “clean” and `react-markdown` is already parsing it correctly.
- The missing headings/bullets/spacing is a styling/reset issue, not a parsing issue.
- Enabling the already-installed typography plugin is the cleanest, most maintainable approach, and keeps the UI aligned with the `prose`-based styling you’ve already written.
