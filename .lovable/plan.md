

# Update Widget Documentation for jsDelivr CDN

## Overview
Update `docs/WIDGET_GUIDE.md` to use jsDelivr CDN URLs instead of direct Lovable app URLs. jsDelivr provides proper CORS headers, enabling the widget to be embedded on any domain without cross-origin errors.

## CDN URLs

The widget will be served from:
- **JavaScript**: `https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@main/public/widget/ev-chat.js`
- **Styles**: `https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@main/public/widget/style.css`

## Changes to `docs/WIDGET_GUIDE.md`

### Quick Start Section (lines 26-40)
Replace Lovable URLs with jsDelivr CDN URLs:

```html
<!-- Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@main/public/widget/style.css">

<!-- Widget Script -->
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@main/public/widget/ev-chat.js';
  
  createChat({
    webhookUrl: 'https://your-webhook-url.com/chat'
  });
</script>
```

### Script Tag Section (lines 82-89)
Update the Script Tag installation method with the CDN URL.

### Basic Integration Example (lines 327-344)
Update the complete HTML example to use CDN URLs.

### Add CDN Note
Add a note explaining:
- jsDelivr automatically serves files from your GitHub repository with proper CORS headers
- The `@main` tag references the main branch (updates automatically when GitHub Actions builds new versions)
- For production, consider using a specific commit hash or tag for stability

## Why jsDelivr?

| Feature | Lovable Static | jsDelivr CDN |
|---------|----------------|--------------|
| CORS headers | Not included | Included |
| Cross-origin embedding | Blocked | Works |
| Global CDN | No | Yes |
| Cache invalidation | Manual | Automatic |
| Cost | Free | Free |

## Implementation

Update these sections in `docs/WIDGET_GUIDE.md`:
1. Quick Start (lines 26-40) - Main installation snippet
2. Script Tag method (lines 82-89) - Alternative installation
3. Basic Integration example (lines 327-344) - Complete HTML example
4. Add a note about versioning options (`@main` vs `@v1.0.0` vs `@commit-hash`)

