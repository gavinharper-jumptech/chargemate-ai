

# Expand Quick Reply Chip Extraction for More Question Patterns

## Problem

The current `extractSuggestions()` only matches questions where the AI offers to *do something* (e.g., "Would you like me to...", "Want to know about..."). It completely misses questions where the AI asks the user to *choose between descriptive options*, like:

> "Is the light solid blue, flashing blue, or breathing (slowly pulsing) blue?"

This is a common AI pattern — asking clarifying questions with inline choices — and produces no chips.

## Solution

Add a **fallback strategy**: if none of the existing "offer" patterns match, detect questions that contain comma-separated or "or"-separated options and extract those directly.

**Changes to `src/lib/extractSuggestions.ts`:**

1. **Add new prefix-based patterns** for common clarifying question styles:
   - `is it (.+)\?` / `is the (.+)\?` / `is your (.+)\?`
   - `are you (.+)\?` / `are they (.+)\?`
   - `do you (?:have |see |notice )?(.+)\?`
   - `does it (.+)\?`
   - `which (.+)\?`
   - `what (.+)\?`

2. **Add a generic fallback**: if no pattern matches but the last question contains comma/or-separated items (at least 2 items with "or"), extract those as options. This catches any question format that lists choices.

3. **Improve option cleaning**: strip parenthetical asides like "(slowly pulsing)" from chip labels to keep them concise, e.g. "Breathing blue" instead of "Breathing (slowly pulsing) blue".

For the screenshot example, this would produce chips: **Solid blue**, **Flashing blue**, **Breathing blue**.

