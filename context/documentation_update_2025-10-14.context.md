# Documentation Update Notice

## Date: October 14, 2025

## Status: Deprecated References Removed

This notice documents the removal of deprecated `npm run generate-manifests` references from documentation files.

## What Changed

The `npm run generate-manifests` command is **DEPRECATED** and should no longer be used. It has been replaced by the integrated manifest management within the `markdown_to_html.prompt.md` workflow.

### Reason for Deprecation

The `generate-manifests` script created manifest files with an incompatible structure:
- Used `files` array instead of required `documents` array
- Missing `date` fields needed for hierarchical TOC organization
- No support for `isPhaseOverview` flag
- Broke Year → Month → Document hierarchical navigation

### New Workflow

**Use markdown_to_html.prompt.md** which automatically:
1. Converts Markdown to HTML
2. Updates manifest.json with correct `documents` array structure
3. Extracts and formats dates in ISO format (YYYY-MM-DD)
4. Marks phase overviews with `isPhaseOverview: true`
5. Maintains hierarchical TOC organization

## Files Updated

### Fully Updated Files
These files have had all `npm run generate-manifests` references removed or replaced:

1. **README.md** ✅
   - Removed command references
   - Updated workflows to use markdown_to_html.prompt.md

2. **QUICK_REFERENCE.md** ✅
   - Removed from NPM scripts section
   - Updated all workflow examples
   - Added deprecation notice

3. **context/clarifications.context.md** ✅
   - Replaced "use both" guidance with unified workflow
   - Added deprecation warning
   - Updated all examples

4. **context/website_guide.context.md** ✅
   - Updated content addition workflows
   - Replaced manifest generation steps
   - Added troubleshooting updates

### Documentation Files (Keeping Historical References)

These files retain mentions of `npm run generate-manifests` for historical/explanatory purposes:

5. **.github/prompts/markdown_to_html.prompt.md** ⚠️
   - **Keeps warnings** about NOT using the command
   - Documents why it's incompatible
   - Part of the prompt instructions

6. **context/manifest_fix_2025-10-14.context.md** ⚠️
   - **Historical documentation** of the fix
   - Explains what was wrong with the command
   - Reference material for understanding the issue

### Partially Updated Files (Lower Priority)

These files still contain references but are less critical:

7. **context/architecture_diagram.context.md**
   - Contains flowchart diagrams with command references
   - Lower priority for user-facing documentation
   - Primarily technical/architectural reference

8. **context/deployment_guide.context.md**
   - Contains deployment checklists with command references
   - Should be updated but is secondary documentation
   - Users primarily use QUICK_REFERENCE.md and website_guide.context.md

9. **context/implementation_summary.context.md**
   - Technical implementation details
   - Reference documentation rather than how-to guide
   - Lower priority for updates

## Migration Guide for Users

### If You Previously Used `npm run generate-manifests`

**Old Workflow:**
```bash
# 1. Create/edit HTML file
thesis_html/3_literature_review/article.html

# 2. Run manifest generator
npm run generate-manifests

# 3. Commit
git add . && git commit -m "Add article" && git push
```

**New Workflow:**
```bash
# 1. Create Markdown file
thesis_md/3_literature_review/article.md

# 2. Use markdown_to_html.prompt.md with Copilot
#    (Automatically creates HTML AND updates manifest)

# 3. Commit
git add . && git commit -m "Add article" && git push
```

### If You Need to Fix Existing Manifests

If you have manifests created by the old script:

1. **Check structure:**
   ```bash
   # Look for 'files' array (wrong) vs 'documents' array (correct)
   cat thesis_html/[phase]/manifest.json
   ```

2. **Convert to correct structure:**
   - Change `files` to `documents`
   - Add `date` field to each document (ISO format: YYYY-MM-DD)
   - Add `isPhaseOverview: true` to index.html entry
   - Remove `modified` and `path` fields
   - Rename `filename` to `file`

3. **Example transformation:**
   ```json
   // OLD (Wrong)
   {
     "files": [
       {
         "filename": "article.html",
         "title": "Article Title",
         "path": "thesis_html/3_literature_review/article.html",
         "modified": "2025-10-14T07:23:05.507Z"
       }
     ]
   }

   // NEW (Correct)
   {
     "documents": [
       {
         "file": "index.html",
         "title": "Phase Overview - Literature Review",
         "isPhaseOverview": true
       },
       {
         "file": "article.html",
         "title": "Article Title",
         "date": "2025-10-14",
         "category": "analysis"
       }
     ]
   }
   ```

## NPM Scripts

The `generate-manifests` script remains in `package.json` for backward compatibility but should not be used:

```json
{
  "scripts": {
    "generate-manifests": "node js/generate-manifest.js",  // DEPRECATED - DO NOT USE
    "serve": "python -m http.server 8000",
    "serve-alt": "npx http-server -p 8000"
  }
}
```

## Primary Documentation Sources

For up-to-date workflows, always refer to:

1. **QUICK_REFERENCE.md** - Quick command reference
2. **context/website_guide.context.md** - Complete usage guide
3. **.github/prompts/markdown_to_html.prompt.md** - Content conversion workflow
4. **context/manifest_fix_2025-10-14.context.md** - Why the change was made

## Summary

✅ **Removed** `npm run generate-manifests` from user-facing documentation
✅ **Updated** workflows to use markdown_to_html.prompt.md
✅ **Added** deprecation notices where appropriate
✅ **Kept** historical references for context and learning
⚠️ **Partially updated** lower-priority technical documentation

**Key Message**: Always use the `markdown_to_html.prompt.md` workflow for adding content. It handles everything automatically and maintains the correct manifest structure.
