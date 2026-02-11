
# Clean Up Repository for Public Visibility

## What needs cleaning

After auditing the codebase, here's what was found:

**Vindis-branded test pages (biggest concern):**
- `public/test-vindis.html` — full Vindis Group branded demo page with their logo URLs, product images, and branding
- `public/widget/test-vindis.html` — identical copy

These contain Vindis logos, copyrights, product images, and the text "ASK VINDIS AI SPECIALIST". They should be removed entirely.

**Vindis reference in documentation:**
- `docs/WIDGET_GUIDE.md` line 457 uses "ASK VINDIS AI SPECIALIST" in a theming example — should be changed to a generic brand name

**No actual webhook URLs found** — all webhook references use placeholders like `https://your-api.com/chat` or `https://...`, so that's clean.

## Scrubbing Git history

Simply deleting these files leaves them in the Git history, still viewable on GitHub. To truly remove all traces, you have two options:

| Approach | Pros | Cons |
|----------|------|------|
| **Option A: Rewrite history** with `git filter-repo` | Completely removes files from all history | Force-push required; breaks existing clones/forks |
| **Option B: Delete files + force-push a squashed history** | Clean single-commit history | Loses all commit history |

**Recommended: Option A** — use `git filter-repo` to surgically remove the two test-vindis.html files from all commits. This keeps your commit history intact while erasing the sensitive files.

## Changes in Lovable

1. **Delete** `public/test-vindis.html`
2. **Delete** `public/widget/test-vindis.html`
3. **Update** `docs/WIDGET_GUIDE.md` — replace "ASK VINDIS AI SPECIALIST" with a generic example like "ASK AI SPECIALIST"

## Manual step: Scrub Git history

After the Lovable changes are merged, run this locally:

```bash
# Install git-filter-repo (if not already installed)
# macOS: brew install git-filter-repo
# pip: pip install git-filter-repo

# Clone a fresh copy to work on
git clone https://github.com/gavinharper-jumptech/chargemate-ai.git chargemate-clean
cd chargemate-clean

# Remove the Vindis test pages from ALL history
git filter-repo --path public/test-vindis.html --invert-paths
git filter-repo --path public/widget/test-vindis.html --invert-paths

# Also remove the deleted VindisPreview page from history
git filter-repo --path src/pages/VindisPreview.tsx --invert-paths

# Force push the cleaned history
git remote add origin https://github.com/gavinharper-jumptech/chargemate-ai.git
git push origin main --force
```

After force-pushing, GitHub may still cache old data briefly. You can request a garbage collection via GitHub Support if needed, but typically the old blobs become inaccessible within a few hours.
