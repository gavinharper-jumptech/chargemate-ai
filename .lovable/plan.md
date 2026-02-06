

# Fix: Chat Messages Overflowing Beyond Container

## Problem
Messages overflow past the chat input and beyond the viewport on the main preview page (`/`). The flex layout containers lack `overflow-hidden`, so `flex-1 min-h-0` children expand beyond their parent instead of scrolling internally.

## Why This Is Safe
- The scrolling fix (internal `ScrollArea` relative calculations) lives in `ChatMessages.tsx` and is completely untouched
- `overflow-hidden` works at the outer container level -- it enforces the height constraint that lets the internal `ScrollArea` activate properly
- The Vindis preview is unaffected because its host div already has a fixed height

## Changes

### 1. `src/App.tsx` (line 70)
Add `overflow-hidden` to the className passed to Index:
```
"flex h-screen flex-col bg-background" -> "flex h-screen flex-col bg-background overflow-hidden"
```

### 2. `src/pages/Index.tsx` (lines 42 and 79)
Add `overflow-hidden` to both layout wrapper default classNames:
```
"flex h-full flex-col bg-background relative" -> "flex h-full flex-col bg-background relative overflow-hidden"
```

### 3. `src/pages/VindisPreview.tsx` (line 125)
Add `overflow-hidden` to the className passed to Index:
```
"flex h-full flex-col bg-background" -> "flex h-full flex-col bg-background overflow-hidden"
```

## Result
Messages scroll inside the chat container instead of overflowing the viewport. No impact on the internal scrolling behavior.
