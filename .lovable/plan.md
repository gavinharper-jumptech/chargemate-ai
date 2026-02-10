

# Fix: Versioned Tag Not Being Created

## Problem
The "Tag release" step in the GitHub Actions workflow only runs when `steps.check_changes.outputs.changes == 'true'`. If the built widget files haven't changed (which is likely when only bumping the version), the tag is never created -- so jsDelivr has nothing to serve at `@v1.0.0`.

## Fix

### `.github/workflows/build-widget.yml`
- **Always create the tag** after a successful build, regardless of whether the built files changed
- Move the tag step outside the `changes == 'true'` condition
- Keep the commit/push step conditional (no point committing identical files)

```yaml
      - name: Commit and push
        if: steps.check_changes.outputs.changes == 'true'
        run: |
          git config --local user.email "github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"
          git commit -m "chore: build widget [skip ci]"
          git push

      - name: Tag release
        run: |
          VERSION=$(node -p "require('./package.json').version")
          git tag -f "v$VERSION"
          git push origin "v$VERSION" --force
```

The only change: remove the `if: steps.check_changes.outputs.changes == 'true'` line from the "Tag release" step.

## After this change
1. Push this fix to `main`
2. The workflow triggers (since `package.json` is in the paths filter), builds, and creates the `v1.0.0` tag
3. jsDelivr can then serve files at `@v1.0.0`

If the workflow doesn't auto-trigger, use the **Run workflow** button on the Actions tab (the `workflow_dispatch` trigger is already configured).
