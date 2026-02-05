

# Fix GitHub Action: Switch to Bun

## Problem
The workflow uses `npm ci` which requires a synchronized `package-lock.json`, but your project uses Bun (`bun.lockb` exists). The lock files are out of sync.

## Solution
Update the GitHub Action to use Bun instead of npm. This matches your local development setup and eliminates the sync issue.

## Changes to `.github/workflows/build-widget.yml`

Replace these lines:

```yaml
# REMOVE these:
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'

- name: Install dependencies
  run: npm ci

- name: Build widget
  run: npx vite build --config vite.config.widget.ts
```

```yaml
# REPLACE with:
- name: Setup Bun
  uses: oven-sh/setup-bun@v2

- name: Install dependencies
  run: bun install

- name: Build widget
  run: bun run vite build --config vite.config.widget.ts
```

## Why This Works

| Issue | Solution |
|-------|----------|
| `npm ci` requires synced `package-lock.json` | `bun install` uses `bun.lockb` which exists |
| Mismatch between local (Bun) and CI (npm) | Now both use Bun |
| Faster builds | Bun is significantly faster than npm |

