
## What’s happening (root cause)
Your `/test-vindis.html` page is **not loading the widget code you just fixed in this Lovable project**.

Right now it loads:
- **CSS** from jsDelivr: `https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@main/public/widget/style.css`
- **JS** from jsDelivr: `https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@main/public/widget/ev-chat.js`

So even though we updated:
- `src/index.css` (adds `.jt-ev-chat-widget { height: 100% }`)
- `src/pages/Index.tsx` (removes the overflow clipping)

…those changes **won’t show up** on that test page until:
1) the CDN bundle is rebuilt and published, OR  
2) the test page is changed to load the widget from the local Lovable preview (dev) code.

That’s why you still see the message area cut off with no internal scroll.

---

## Goal
Make `/test-vindis.html` reliably test the **current** Lovable widget code so:
- internal message scrolling works
- no parent-page “scroll jumping” happens

---

## Implementation approach
### A) Update the test page to use the local (Lovable preview) widget by default
Change `public/test-vindis.html` to load the widget from:
- `await import("/src/widget.tsx")`

This guarantees it uses the code we just edited (including the scroll fixes), without requiring any widget build step.

### B) Keep an optional “CDN mode” switch for comparison
Add a simple toggle so you can still test the CDN build when needed:
- `?cdn=1` -> load from jsDelivr
- default (no param) -> load local `/src/widget.tsx`

### C) Fix the widget options passed in the test file
The test file currently passes `containerId` and `isEmbedded`, which are not used by our `createChat()` API.

We’ll update to:
- `target: "#ev-chat"`
- keep `mode`, `inputPosition`, `inputLayout`, `categories`, `i18n`

### D) Add a tiny debug log (and/or badge) so it’s obvious which build is running
Example: `console.log("[test-vindis] Widget source: LOCAL")` vs `CDN`.

---

## File changes (what I will edit)
### 1) `public/test-vindis.html`
- Remove the hard-coded `<link>` to CDN `style.css` (or leave it out when local mode is used).
- Replace the existing module script with a conditional loader:

Pseudo-structure:
```js
const useCdn = new URLSearchParams(location.search).has("cdn");

if (useCdn) {
  // inject CDN CSS link
  // import createChat from jsDelivr
} else {
  // import createChat from /src/widget.tsx (brings CSS via import "./index.css")
}

createChat({ target: "#ev-chat", ... });
```

---

## How you’ll test (verification checklist)
1) Open (local dev widget):
   - `/test-vindis.html`
2) Send multiple questions until the response area overflows.
3) Confirm:
   - Messages scroll **inside** the widget
   - The page itself does **not** jump when AI responds
4) Optional comparison:
   - `/test-vindis.html?cdn=1` to confirm the CDN build is the “old behavior” until rebuilt

---

## (Optional) Next step for production / CDN
Once we confirm local mode is fixed, if you want the jsDelivr CDN version to include these fixes, we’ll need to ensure the **built output** (`public/widget/ev-chat.js` + `public/widget/style.css`) is regenerated and published to whatever repo/tag jsDelivr is pointing at (or switch your embed to load from the Lovable-hosted built assets instead).

(We can decide this after the local test is confirmed.)

