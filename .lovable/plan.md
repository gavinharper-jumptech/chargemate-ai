

# Enhance Image & Link Handling in Chat Bubbles

## What This Covers

Two improvements to how AI responses display URLs and images:

1. **Auto-link bare URLs** -- If the AI returns a plain URL like `https://example.com/page`, it will become a clickable link instead of plain text.
2. **Style images properly** -- If the AI returns a markdown image like `![photo](https://...)`, the image will be constrained to fit neatly inside the chat bubble with rounded corners.

---

## Changes

### `src/components/chat/MessageBubble.tsx`

**1. Auto-link bare URLs using `react-markdown`'s `remarkGfm` plugin:**

The `remark-gfm` plugin enables GitHub Flavored Markdown, which automatically converts bare URLs into clickable links.

```tsx
import remarkGfm from "remark-gfm";

<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
```

**2. Custom component overrides for links and images:**

Pass a `components` prop to `ReactMarkdown` to control how `<a>` and `<img>` elements render:

```tsx
<ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline break-all opacity-90 hover:opacity-100"
      >
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt || ""}
        className="rounded max-w-full h-auto my-2"
        loading="lazy"
      />
    ),
  }}
>
  {content}
</ReactMarkdown>
```

**3. Add image-related prose styles to the container div:**

```
prose-img:rounded prose-img:max-w-full prose-img:h-auto prose-img:my-2
```

---

### New Dependency

- **`remark-gfm`** -- Enables auto-linking of bare URLs and other GitHub Flavored Markdown features (tables, strikethrough, etc.)

---

## Result

| Scenario | Before | After |
|----------|--------|-------|
| Bare URL `https://example.com/image.png` | Plain text, not clickable | Clickable link |
| Markdown image `![alt](url)` | Image renders but may overflow | Image constrained, rounded, styled |
| Markdown link `[text](url)` | Already works | Now opens in new tab safely |

