# Website Navigation Flow Documentation

## Overview
This document describes the complete navigation flow for the DBA thesis website, including cross-phase navigation logic.

## Navigation Structure

### 1. Main Landing Page (`index.html`)
- **Next Button**: "Begin Journey" → `phase.html?phase=0` (Phase 0 Landing)
- **Previous Button**: None (this is the start)

---

### 2. Phase Landing Pages (`phase.html?phase=n`)
Shows the phase introduction with a brief description.

#### Phase 0 Landing (`phase.html?phase=0`)
- **Previous**: → `index.html` (Main Landing)
- **Next**: → `phase.html?phase=0&file=index.html` (Phase 0 Overview)

#### Phase n Landing (`phase.html?phase=n` where n > 0)
- **Previous**: → Last entry in Phase (n-1)
  - Example: `phase.html?phase=2` Previous → `phase.html?phase=1&file=[last-file-in-phase-1]`
- **Next**: → `phase.html?phase=n&file=index.html` (Phase n Overview)

---

### 3. Phase Overview Pages (`phase.html?phase=n&file=index.html`)
The first content page in each phase, providing an overview of that phase.

- **Previous**: → `phase.html?phase=n` (Back to phase landing)
- **Next**: → First entry in the phase
  - Example: `phase.html?phase=1&file=brainstorming_session1.html`

---

### 4. Phase Entry Pages (`phase.html?phase=n&file=[filename]`)
Individual content pages within a phase.

#### Middle Entries (not first or last)
- **Previous**: → Previous entry in same phase
- **Next**: → Next entry in same phase

#### Last Entry in Phase
- **Previous**: → Previous entry in same phase
- **Next**: → `phase.html?phase={n+1}` (Next phase landing page)
  - Example: Last entry in Phase 1 Next → `phase.html?phase=2`

---

## Complete Navigation Example

```
index.html (Main Landing)
    ↓ [Begin Journey]
    
phase.html?phase=0 (Phase 0 Landing)
    ↑ [Previous: Main Landing]
    ↓ [Next: Phase 0 Overview]
    
phase.html?phase=0&file=index.html (Phase 0 Overview)
    ↑ [Previous: Phase 0 Landing]
    ↓ [Next: First Entry]
    
phase.html?phase=0&file=thoughts-1.html (Phase 0 Entry)
    ↑ [Previous: Phase 0 Overview]
    ↓ [Next: Next Entry or Phase 1 Landing if last]
    
...
    
phase.html?phase=0&file=[last-entry].html (Last Entry in Phase 0)
    ↑ [Previous: Previous Entry]
    ↓ [Next: Phase 1 Landing]
    
phase.html?phase=1 (Phase 1 Landing)
    ↑ [Previous: Last Entry in Phase 0]
    ↓ [Next: Phase 1 Overview]
    
phase.html?phase=1&file=index.html (Phase 1 Overview)
    ↑ [Previous: Phase 1 Landing]
    ↓ [Next: First Entry in Phase 1]
    
... (continues through all phases)
```

---

## Key Implementation Details

### Dynamic Navigation
- Navigation is **fully dynamic** based on `manifest.json` files
- No hardcoded filenames (except `index.html` as the overview)
- Order of files determined by `manifest.json` array order
- Last entry automatically detected as `allFiles[allFiles.length - 1]`

### Cross-Phase Navigation
- When on a **phase landing** (n > 0), Previous button:
  1. Gets previous phase info
  2. Fetches all files from previous phase's `manifest.json`
  3. Navigates to the last file in that array

- When on **last entry** in a phase, Next button:
  1. Detects it's the last entry (`currentIndex === allFiles.length - 1`)
  2. Navigates to next phase landing page (`phase.html?phase={n+1}`)

### File Order Management
Files must be listed in reading order in each phase's `manifest.json`:
```json
{
  "documents": [
    {
      "file": "index.html",
      "title": "Phase Overview",
      "isPhaseOverview": true
    },
    {
      "file": "entry1.html",
      "title": "First Entry"
    },
    {
      "file": "entry2.html",
      "title": "Second Entry"
    }
  ]
}
```

---

## Testing Checklist

- [ ] Main landing "Begin Journey" goes to Phase 0 landing
- [ ] Phase 0 landing Previous goes to main landing
- [ ] Phase 0 landing Next goes to Phase 0 overview
- [ ] Phase 0 overview Previous goes to Phase 0 landing
- [ ] Last entry in Phase 0 Next goes to Phase 1 landing
- [ ] Phase 1 landing Previous goes to last entry in Phase 0
- [ ] Phase 1 landing Next goes to Phase 1 overview
- [ ] Navigation works correctly for all entries within a phase
- [ ] Cross-phase navigation works for all phases (0-8)
- [ ] Last entry in Phase 8 has no Next button (end of journey)

---

## Files Modified

1. **index.html** - Updated "Begin Journey" button to go to `phase.html?phase=0`
2. **js/phase-loader.js** - Updated `setupPageNavigation()` function with cross-phase navigation logic
3. **css/academic.css** - Added centered styling for single navigation buttons

---

Last Updated: October 14, 2025
