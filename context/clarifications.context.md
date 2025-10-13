# Clarifications - Website Implementation

## Question 1: Markdown Conversion Method

**Q: Should I use markdown_to_html.prompt.md or npm run generate-manifests?**

**A: Use BOTH - they serve different purposes:**

### markdown_to_html.prompt.md
- **Purpose**: Convert Markdown files → HTML files
- **When**: Creating new content documents
- **Input**: `thesis_md/3_literature_review/article.md`
- **Output**: `thesis_html/3_literature_review/article.html`
- **How**: Use with GitHub Copilot Chat
- **Guarantees**: Consistent HTML structure, styling, metadata

### npm run generate-manifests
- **Purpose**: Scan HTML files → Create navigation indexes
- **When**: After adding/removing/renaming HTML files
- **Input**: All `.html` files in `thesis_html/*/`
- **Output**: `manifest.json` files in each phase folder
- **How**: Run command in terminal
- **Guarantees**: Accurate navigation tables of contents

### Complete Workflow
```bash
# 1. Create content (Markdown)
thesis_md/3_literature_review/smith_analysis.md

# 2. Convert to HTML (use markdown_to_html.prompt.md)
→ Creates: thesis_html/3_literature_review/smith_analysis.html

# 3. Generate navigation index
npm run generate-manifests
→ Updates: thesis_html/3_literature_review/manifest.json

# 4. Deploy
git add . && git commit -m "Add Smith analysis" && git push
```

### For Consistency & Repeatability
**Use `markdown_to_html.prompt.md` for content conversion because:**
1. ✅ Enforces consistent HTML structure
2. ✅ Applies uniform styling classes
3. ✅ Ensures proper semantic markup
4. ✅ Includes required metadata
5. ✅ Works with GitHub Copilot for automation

**Alternative (less consistent):**
- Manual HTML creation works but may have inconsistencies
- Direct HTML editing is fine for quick fixes
- But for new documents, the prompt ensures quality

---

## Question 2: Purpose of manifest.json Files

**Q: What is the purpose of manifest.json files?**

**A: Navigation indexes for the browser**

### The Problem
JavaScript running in a browser **cannot read the filesystem**. It can't do:
```javascript
// ❌ This doesn't work in browser
fs.readdir('thesis_html/3_literature_review/');
```

### The Solution
Pre-generate a "table of contents" file that lists all HTML files:

```json
{
  "phase": "3_literature_review",
  "fileCount": 3,
  "files": [
    {
      "filename": "article_smith_2023.html",
      "title": "Analysis of Smith (2023)",
      "path": "thesis_html/3_literature_review/article_smith_2023.html"
    },
    {
      "filename": "article_jones_2024.html",
      "title": "Jones (2024) Review",
      "path": "thesis_html/3_literature_review/article_jones_2024.html"
    }
  ]
}
```

### How It's Used
```javascript
// js/toc-generator.js reads the manifest
const response = await fetch('thesis_html/3_literature_review/manifest.json');
const manifest = await response.json();

// Then builds sidebar navigation from manifest.files[]
manifest.files.forEach(file => {
  // Create link: <a href="?phase=3&file=article_smith_2023.html">
  //               Analysis of Smith (2023)
  //              </a>
});
```

### What Manifests Contain
- **Phase identifier**: Which phase folder it represents
- **File count**: Total number of documents
- **File list**: Array of all HTML files with:
  - `filename`: The actual file name
  - `title`: Extracted from HTML `<title>` or `<h1>`
  - `path`: Full relative path
  - `modified`: Last modification timestamp

### When to Regenerate
```bash
✅ After adding new HTML files → npm run generate-manifests
✅ After deleting HTML files → npm run generate-manifests
✅ After renaming HTML files → npm run generate-manifests
❌ After editing HTML content → NOT needed (content change only)
```

### Where They're Used
1. **Sidebar TOC**: `js/toc-generator.js` reads manifests to build navigation
2. **Phase landing pages**: Shows available documents
3. **Previous/Next logic**: Determines navigation order
4. **Empty state detection**: Shows "no content yet" if fileCount = 0

---

## Question 3: File Organization

**Q: Shouldn't WEBSITE_GUIDE.md be in context/ and referenced by website_builder.prompt.md?**

**A: You're absolutely correct! ✅**

### Changes Made

**Files Moved:**
```
WEBSITE_GUIDE.md → context/website_guide.context.md
DEPLOYMENT_GUIDE.md → context/deployment_guide.context.md
```

**New File Created:**
```
context/implementation_summary.context.md (comprehensive tech details)
```

**References Updated:**
- ✅ README.md now points to context/ locations
- ✅ website_builder.prompt.md references context files
- ✅ QUICK_REFERENCE.md remains at root (frequently accessed)

### New Structure

```
ESGCIDBA_Website/
├── README.md                    # Project overview (root for GitHub)
├── QUICK_REFERENCE.md           # Command cheat sheet (root for access)
├── index.html                   # Website homepage
├── phase.html                   # Website phase viewer
│
├── .github/
│   ├── copilot-instructions.md  # AI assistant behavior
│   └── prompts/                 # Reusable AI prompts
│       ├── devops.prompt.md
│       ├── markdown_to_html.prompt.md
│       └── website_builder.prompt.md (now references context/)
│
├── context/                     # Supporting documentation
│   ├── idea_generation.context.md
│   ├── website_guide.context.md         # ← Moved here
│   ├── deployment_guide.context.md      # ← Moved here
│   └── implementation_summary.context.md # ← New comprehensive doc
│
├── css/, js/, assets/           # Website assets
└── thesis_html/, thesis_md/    # Content
```

### Rationale

**Why context/ folder?**
1. ✅ Keeps documentation organized
2. ✅ Separates context from executable code
3. ✅ AI assistants can reference these files
4. ✅ Cleaner root directory
5. ✅ Follows established pattern (.context.md suffix)

**Why QUICK_REFERENCE.md stays at root?**
1. Frequently accessed by users
2. Should be immediately visible
3. Entry point for common tasks
4. Complements README.md

**Why README.md stays at root?**
1. GitHub convention (shows on repo homepage)
2. First thing visitors see
3. Contains quick start information
4. Links to detailed docs in context/

### Updated website_builder.prompt.md

Now includes at the end:
```markdown
## Related Documentation

After implementation, refer to:
- context/website_guide.context.md - Complete usage guide
- context/deployment_guide.context.md - Deployment instructions  
- context/implementation_summary.context.md - Technical details
- QUICK_REFERENCE.md - Quick command reference
```

---

## Summary

### Your Questions - Answered

1. **Markdown conversion**: Use `markdown_to_html.prompt.md` for consistency
   - Then run `npm run generate-manifests` for navigation

2. **manifest.json purpose**: Navigation indexes for browser JavaScript
   - Lists available content since browser can't read filesystem

3. **File organization**: Fixed! ✅
   - Guides moved to `context/` folder
   - Prompts updated to reference them
   - Structure now more logical and organized

### What You Should Know

**Two separate processes:**
```
Content Creation:      Markdown → HTML (markdown_to_html.prompt.md)
Navigation Building:   HTML files → manifest.json (npm run generate-manifests)
```

**Every time you add content:**
```bash
1. Write .md file (or create .html directly)
2. Convert to HTML (if from .md)
3. Run: npm run generate-manifests
4. Test, commit, push
```

**Manifests are essential:**
- Without them, navigation won't work
- They're small JSON files (few KB each)
- Must be regenerated after file changes
- Committed to Git like any other file

**Documentation is now organized:**
- Quick reference at root (QUICK_REFERENCE.md)
- Detailed guides in context/ folder
- Prompts reference the context files
- Everything cross-referenced properly

---

## Next Steps

1. ✅ Review the moved files in `context/` folder
2. ✅ Check QUICK_REFERENCE.md for updated workflow
3. ✅ Read implementation_summary.context.md for full details
4. ✅ Test the workflow:
   - Create a test HTML file
   - Run `npm run generate-manifests`
   - View locally to verify navigation works
5. ✅ Commit these organizational changes

**All documentation is now properly organized and cross-referenced!** 🎉

---

## Question 4: Header and Footer Template System

**Q: How do I maintain consistent headers and footers across all pages?**

**A: Use the centralized template system in `js/header-footer.js`**

### Overview

The website uses a centralized header and footer template system to maintain consistency across all pages and make updates easier.

### How It Works

All header and footer content is defined in `js/header-footer.js`. This file contains:

- `getHeaderHTML(activePage)` - Returns the header HTML with navigation
- `getFooterHTML()` - Returns the footer HTML
- `initializeHeaderFooter(activePage)` - Initializes both on page load

### Making Changes

#### To Update the Site Title or Subtitle

Edit the `getHeaderHTML()` function in `js/header-footer.js`:

```javascript
<h1 class="site-title">Your New Title</h1>
<p class="site-subtitle">Your New Subtitle</p>
```

#### To Update the Footer

Edit the `getFooterHTML()` function in `js/header-footer.js`:

```javascript
<p>&copy; 2024-2025 Your Name. All rights reserved.</p>
<p class="footer-note">Your message here</p>
<p class="footer-contact">Contact: <a href="mailto:your@email.com">your@email.com</a></p>
```

#### To Add/Remove Navigation Items

Edit the navigation menu in `getHeaderHTML()` function in `js/header-footer.js`.

### Pages Using This System

- `index.html` - Home page (activePage: 'home')
- `contact.html` - Contact page (activePage: 'contact')
- `phase.html` - Phase pages (activePage: 'phase0', 'phase1', etc.)

### Benefits

1. **Single Source of Truth** - Update header/footer once, applies everywhere
2. **Consistency** - All pages automatically have the same header/footer
3. **Maintainability** - Easier to update and less prone to errors
4. **Active Page Highlighting** - Automatically highlights the current page in navigation

### Technical Details

Each page includes:

```html
<header></header>
<!-- page content -->
<footer></footer>

<script src="js/header-footer.js"></script>
<script>
    initializeHeaderFooter('activePage');
</script>
```

The empty `<header>` and `<footer>` tags are populated by the JavaScript on page load.

### Example: Updating Site Title

**Old Way (without template system):**
```
❌ Update index.html
❌ Update contact.html  
❌ Update phase.html
❌ Risk of inconsistencies
```

**New Way (with template system):**
```
✅ Edit js/header-footer.js once
✅ Changes apply to all pages automatically
✅ Guaranteed consistency
```

---
