

# Fix Quick Reply Chip Extraction

## Problem

The `extractSuggestions()` function in `src/lib/extractSuggestions.ts` uses a small set of rigid regex patterns that miss many common AI question phrasings. For example, "Want to know about specific tariffs or how to set up smart charging schedules?" fails because the regex expects "Do you want" not just "Want".

## Solution

Expand the regex patterns to cover more natural AI question styles:

**Add/update these patterns in `extractSuggestions.ts`:**

- `want to know/learn/hear about X?` (without "do you" prefix)
- `should I explain/cover X?`
- `can I help with/explain X?`
- `any questions about X?`
- `would you prefer X?`
- `like to know/learn about X?`

Also make the existing `do you want` pattern handle the case where "do you" is omitted (i.e., just "want to know about X or Y?").

**Specific regex changes:**
- Change `do you want (?:me to |to )?(?:know |learn |hear )?(about |more about )?(.+)\?` to `(?:do you )?want (?:me to |to )?(?:know |learn |hear )?(about |more about )?(.+)\?`
- Add: `/should i (?:explain|cover|go over|help with) (.+)\?/i`
- Add: `/(?:any |have )?questions? (?:about|on|regarding) (.+)\?/i`
- Add: `/like (?:me )?to (?:explain|cover|help with|go over) (.+)\?/i`

This is a targeted fix — just expanding the pattern list in the existing function.

