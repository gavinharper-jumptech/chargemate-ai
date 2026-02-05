
# GitHub Actions Workflow for Widget Build

## Overview
Create a GitHub Actions workflow that automatically builds the standalone widget and commits the output files to the `public/` folder. This enables the widget to be served directly from your Lovable app URL, avoiding CDN dependencies and maintaining your existing DPA coverage.

## What Will Be Created

### File: `.github/workflows/build-widget.yml`

A workflow that:
1. Triggers on pushes to the main branch (when source files change)
2. Installs dependencies and builds the widget using `vite.config.widget.ts`
3. Copies the built files (`ev-chat.js`, `style.css`) to `public/widget/`
4. Commits and pushes the changes back to the repository
5. Syncs automatically to Lovable via bidirectional sync

## Workflow Configuration

```yaml
name: Build Widget

on:
  push:
    branches: [main]
    paths:
      - 'src/**'
      - 'vite.config.widget.ts'
      - 'package.json'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js 20
      - Install dependencies (npm ci)
      - Build widget (npx vite build --config vite.config.widget.ts)
      - Copy dist/ files to public/widget/
      - Commit and push if changes exist
```

## File Locations

**Built files will be placed in:**
- `public/widget/ev-chat.js` - The widget JavaScript module
- `public/widget/style.css` - The widget styles

**Why a subfolder?** Using `public/widget/` keeps widget files organized and separate from other public assets, making it clear which files are auto-generated.

## Package.json Update

Add a dedicated build script:
```json
"scripts": {
  "build:widget": "vite build --config vite.config.widget.ts"
}
```

## Vite Config Update

Modify `vite.config.widget.ts` to output directly to `public/widget/`:
```typescript
outDir: "public/widget",
```

This eliminates the copy step in the workflow.

## How It Works

```text
┌─────────────────────────────────────────────────────────────────┐
│  Developer pushes code to GitHub (or edits in Lovable)         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  GitHub Actions detects changes in src/, vite.config.widget.ts │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Workflow runs: npm ci → npm run build:widget                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Built files committed to public/widget/                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Lovable syncs the new files automatically                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Widget available at https://your-app.lovable.app/widget/      │
└─────────────────────────────────────────────────────────────────┘
```

## Customer Integration

Once deployed, your customers can embed the widget with:

```html
<!-- Styles -->
<link rel="stylesheet" href="https://your-app.lovable.app/widget/style.css">

<!-- Widget Script -->
<script type="module">
  import { createChat } from 'https://your-app.lovable.app/widget/ev-chat.js';
  
  createChat({
    webhookUrl: 'https://your-webhook-url.com/chat'
  });
</script>
```

## Implementation Steps

1. Create `.github/workflows/build-widget.yml` - The GitHub Actions workflow file
2. Update `vite.config.widget.ts` - Change output directory to `public/widget`
3. Update `package.json` - Add `build:widget` script
4. Update `docs/WIDGET_GUIDE.md` - Update URLs to reflect the new hosting location

## Technical Notes

- The workflow uses `actions/checkout` with a token that allows pushing back to the repo
- Uses `git diff --quiet` to avoid empty commits when no changes occur
- Sourcemaps are included for debugging (can be disabled for production if preferred)
- The workflow only runs when relevant source files change, avoiding unnecessary builds
