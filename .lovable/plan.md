
# Move to Versioned CDN Releases

## Problem
Currently the docs reference `@main` on jsDelivr, which requires manual cache purging after each build. jsDelivr throttles purge requests, causing stale files to be served.

## Solution
Use Git tags (e.g. `v1.0.0`) to create versioned releases. jsDelivr caches each version independently, so new versions are immediately available at a new URL -- no purging needed.

## Changes

### 1. Update GitHub Actions workflow (`.github/workflows/build-widget.yml`)
- Add a step after the commit/push that creates a Git tag from the version in `package.json` and pushes it
- This means every successful widget build automatically gets a versioned tag

```yaml
- name: Tag release
  if: steps.check_changes.outputs.changes == 'true'
  run: |
    VERSION=$(node -p "require('./package.json').version")
    git tag -f "v$VERSION"
    git push origin "v$VERSION" --force
```

### 2. Add a version bump script to `package.json`
- Add a `release` script so you can bump the version before pushing:
  ```json
  "release:patch": "npm version patch --no-git-tag-version",
  "release:minor": "npm version minor --no-git-tag-version",
  "release:major": "npm version major --no-git-tag-version"
  ```
- Bump `version` from `"0.0.0"` to `"1.0.0"` as the starting point

### 3. Update `docs/WIDGET_GUIDE.md`
- Change all CDN URLs from `@main` to `@v1.0.0` (or `@latest` for always-latest)
- Add a note explaining versioning:
  - Use `@v1.0.0` for a pinned, stable version (recommended for production)
  - Use `@main` for bleeding edge (may be cached/stale)

### 4. Update `public/test-vindis.html` (if referencing CDN URLs)
- Update any CDN references to use versioned tags

## Workflow after this change

1. Make code changes and push to `main`
2. Before pushing (or in a separate commit), bump the version: `bun run release:patch`
3. GitHub Actions builds the widget, commits built files, and tags the commit as `v1.0.1`
4. jsDelivr immediately serves the new version at `@v1.0.1` -- no purging needed
5. Users on `@v1.0.0` stay on the old version until they update their URL

## CDN URL format

```
https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@v1.0.0/public/widget/ev-chat.js
https://cdn.jsdelivr.net/gh/gavinharper-jumptech/chargemate-ai@v1.0.0/public/widget/style.css
```
