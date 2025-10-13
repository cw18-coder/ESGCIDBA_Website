# System Architecture Diagram

## Complete Website System Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         DBA THESIS WEBSITE                               │
│                  Professional Academic Research Portal                   │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ CONTENT CREATION WORKFLOW                                                 │
└──────────────────────────────────────────────────────────────────────────┘

    ┌──────────────┐
    │   Write MD   │  thesis_md/3_literature_review/article.md
    │   Document   │
    └──────┬───────┘
           │
           ↓
    ┌──────────────────────────────────────────┐
    │  markdown_to_html.prompt.md              │
    │  (via GitHub Copilot)                    │
    │  ✓ Consistent HTML structure             │
    │  ✓ Academic styling                      │
    │  ✓ Proper metadata                       │
    └──────┬───────────────────────────────────┘
           │
           ↓
    ┌──────────────┐
    │  HTML File   │  thesis_html/3_literature_review/article.html
    │   Created    │
    └──────┬───────┘
           │
           ↓
    ┌──────────────────────────────────────────┐
    │  npm run generate-manifests              │
    │  (Node.js script)                        │
    │  Scans: thesis_html/*/                   │
    │  Creates: manifest.json in each phase    │
    └──────┬───────────────────────────────────┘
           │
           ↓
    ┌──────────────┐
    │ manifest.json│  thesis_html/3_literature_review/manifest.json
    │    Created   │  {files: [{filename, title, path}...]}
    └──────┬───────┘
           │
           ↓
    ┌──────────────┐
    │     Test     │  python -m http.server 8000
    │    Locally   │  http://localhost:8000
    └──────┬───────┘
           │
           ↓
    ┌──────────────┐
    │ Git Commit   │  git add . && git commit -m "..." && git push
    │  & Deploy    │
    └──────┬───────┘
           │
           ↓
    ┌──────────────┐
    │ GitHub Pages │  https://esgci-dba-thesis.clarencew.dev
    │     Live     │  Automatic deployment (1-2 min)
    └──────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ RUNTIME ARCHITECTURE (Browser)                                           │
└──────────────────────────────────────────────────────────────────────────┘

    User visits: https://esgci-dba-thesis.clarencew.dev
                            ↓
    ┌──────────────────────────────────────────┐
    │           index.html                     │
    │  • Hero section                          │
    │  • Phase cards (0-8)                     │
    │  • Navigation menu                       │
    └──────────────┬───────────────────────────┘
                   │
                   │ User clicks "Phase 3"
                   ↓
    ┌──────────────────────────────────────────┐
    │        phase.html?phase=3                │
    │  • Header with navigation                │
    │  • Breadcrumb (Home > Lit Review)        │
    │  • Sidebar (empty, loading...)           │
    │  • Main content area                     │
    └──────────────┬───────────────────────────┘
                   │
                   │ JavaScript loads
                   ↓
    ┌──────────────────────────────────────────┐
    │     js/phase-loader.js                   │
    │  1. Read URL: ?phase=3                   │
    │  2. Update breadcrumb                    │
    │  3. Call generateTOC(3)                  │
    │  4. Show phase introduction              │
    └──────────────┬───────────────────────────┘
                   │
                   ↓
    ┌──────────────────────────────────────────┐
    │     js/toc-generator.js                  │
    │  1. Fetch manifest.json for phase 3      │
    │  2. Parse file list                      │
    │  3. Build sidebar HTML                   │
    │  4. Inject into page                     │
    └──────────────┬───────────────────────────┘
                   │
                   │ Fetches
                   ↓
    ┌──────────────────────────────────────────┐
    │  thesis_html/3_literature_review/        │
    │           manifest.json                  │
    │  {                                       │
    │    "files": [                            │
    │      {                                   │
    │        "filename": "article.html",       │
    │        "title": "Smith Analysis"         │
    │      }                                   │
    │    ]                                     │
    │  }                                       │
    └──────────────┬───────────────────────────┘
                   │
                   │ Sidebar now shows:
                   │  • Smith Analysis
                   │  • Jones Review
                   │  • ...
                   │
                   │ User clicks "Smith Analysis"
                   ↓
    ┌──────────────────────────────────────────┐
    │  phase.html?phase=3&file=article.html    │
    │  • Sidebar highlights current file       │
    │  • Main area loads content               │
    └──────────────┬───────────────────────────┘
                   │
                   ↓
    ┌──────────────────────────────────────────┐
    │     js/phase-loader.js                   │
    │  1. Fetch: thesis_html/3_lit.../article  │
    │  2. Parse HTML content                   │
    │  3. Extract <article> or <main>          │
    │  4. Inject into content area             │
    │  5. Update breadcrumb with doc title     │
    │  6. Setup prev/next buttons              │
    └──────────────┬───────────────────────────┘
                   │
                   ↓
    ┌──────────────────────────────────────────┐
    │         Content Displayed                │
    │  • Article heading and content           │
    │  • Previous button (if applicable)       │
    │  • Next button (if applicable)           │
    └──────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ FILE STRUCTURE                                                            │
└──────────────────────────────────────────────────────────────────────────┘

ESGCIDBA_Website/
│
├─ Static HTML Pages
│  ├─ index.html          ← Homepage with phase cards
│  └─ phase.html          ← Dynamic content viewer
│
├─ Styling
│  ├─ css/main.css        ← Layout, colors, components
│  └─ css/academic.css    ← Content styling, print styles
│
├─ Client-Side JavaScript
│  ├─ js/navigation.js    ← Mobile menu, highlighting
│  ├─ js/toc-generator.js ← Reads manifests → builds TOC
│  └─ js/phase-loader.js  ← Loads HTML content dynamically
│
├─ Build Script (Node.js)
│  └─ js/generate-manifest.js ← Scans HTML → creates manifests
│
├─ Content (Published)
│  └─ thesis_html/
│     ├─ 0_reflection_journal/
│     │  ├─ *.html              ← Actual content
│     │  └─ manifest.json       ← Navigation index
│     ├─ 1_idea_generation/
│     │  ├─ *.html
│     │  └─ manifest.json
│     ├─ 2_proposal/
│     ⋮
│     └─ 8_report/
│
├─ Content (Source)
│  └─ thesis_md/          ← Markdown sources (optional)
│
├─ Documentation
│  ├─ README.md           ← Project overview
│  ├─ QUICK_REFERENCE.md  ← Command cheat sheet
│  └─ context/
│     ├─ website_guide.context.md        ← Usage guide
│     ├─ deployment_guide.context.md     ← Deployment help
│     ├─ implementation_summary.context.md ← Tech details
│     └─ clarifications.context.md       ← This Q&A
│
└─ AI Assistant Config
   └─ .github/
      ├─ copilot-instructions.md  ← AI behavior config
      └─ prompts/
         ├─ markdown_to_html.prompt.md    ← MD→HTML conversion
         ├─ website_builder.prompt.md     ← Website structure
         └─ devops.prompt.md              ← Repo management

┌──────────────────────────────────────────────────────────────────────────┐
│ DATA FLOW                                                                 │
└──────────────────────────────────────────────────────────────────────────┘

    ┌─────────────┐
    │ Markdown    │  thesis_md/3_literature_review/article.md
    │   Source    │
    └──────┬──────┘
           │
           │ markdown_to_html.prompt.md (via AI)
           │
           ↓
    ┌─────────────┐
    │    HTML     │  thesis_html/3_literature_review/article.html
    │   Content   │  <article><h1>Title</h1><p>Content...</p></article>
    └──────┬──────┘
           │
           │ generate-manifest.js (Node.js)
           │ Extracts: filename, title, path
           │
           ↓
    ┌─────────────┐
    │  Manifest   │  thesis_html/3_literature_review/manifest.json
    │   (Index)   │  {"files": [{"filename": "article.html", ...}]}
    └──────┬──────┘
           │
           │ Git commit & push
           │
           ↓
    ┌─────────────┐
    │   GitHub    │  Repository: cw18-coder/ESGCIDBA_Website
    │    Repo     │
    └──────┬──────┘
           │
           │ GitHub Pages auto-deploy
           │
           ↓
    ┌─────────────┐
    │ Live Site   │  https://esgci-dba-thesis.clarencew.dev
    └──────┬──────┘
           │
           │ User visits
           │
           ↓
    ┌─────────────┐
    │   Browser   │
    │  1. Loads index.html or phase.html
    │  2. JS fetches manifest.json
    │  3. JS builds navigation
    │  4. User clicks link
    │  5. JS fetches article.html
    │  6. JS displays content
    └─────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ KEY CONCEPTS                                                              │
└──────────────────────────────────────────────────────────────────────────┘

1. TWO-STEP PROCESS
   Step 1: Markdown → HTML (content creation)
   Step 2: HTML files → manifest.json (navigation indexing)

2. MANIFESTS ARE ESSENTIAL
   • Browser JavaScript cannot read filesystem
   • Manifests provide "directory listing" as JSON
   • Must be regenerated when files change

3. STATIC SITE
   • No server-side processing
   • No database
   • No build process for deployment
   • Pure HTML/CSS/JavaScript

4. DYNAMIC NAVIGATION
   • Navigation built at runtime in browser
   • Content loaded dynamically via fetch()
   • Single-page app experience with multiple HTML files

5. SEPARATION OF CONCERNS
   ┌──────────────────┬─────────────────────────────────┐
   │ thesis_md/       │ Source content (Markdown)       │
   │ thesis_html/     │ Published content (HTML)        │
   │ manifest.json    │ Navigation indexes              │
   │ js/*.js          │ Dynamic behavior                │
   │ css/*.css        │ Presentation                    │
   │ context/         │ Documentation                   │
   └──────────────────┴─────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ COMMON OPERATIONS                                                         │
└──────────────────────────────────────────────────────────────────────────┘

Add Content:
  1. Create/edit HTML in thesis_html/[phase]/
  2. npm run generate-manifests
  3. git add . && git commit && git push

Change Styles:
  1. Edit css/main.css or css/academic.css
  2. git add . && git commit && git push

Fix Bug:
  1. Edit js/[file].js
  2. Test locally: python -m http.server 8000
  3. git add . && git commit && git push

Reorganize Content:
  1. Move/rename HTML files
  2. npm run generate-manifests (IMPORTANT!)
  3. git add . && git commit && git push

┌──────────────────────────────────────────────────────────────────────────┐
│ TROUBLESHOOTING FLOW                                                      │
└──────────────────────────────────────────────────────────────────────────┘

Content not appearing?
  ↓
Check: Does HTML file exist in thesis_html/[phase]/? 
  ↓ YES
Check: Does manifest.json exist in that folder?
  ↓ NO → Run: npm run generate-manifests
  ↓ YES
Check: Is the file listed in manifest.json?
  ↓ NO → Run: npm run generate-manifests
  ↓ YES
Check: Browser console (F12) for errors?
  ↓ Has errors → Fix JavaScript/path issues
  ↓ No errors
Check: Clear browser cache (Ctrl+Shift+R)
  ↓
Should work now!

Navigation broken?
  ↓
Check: manifest.json files exist in all phase folders?
  ↓ NO → Run: npm run generate-manifests
  ↓ YES
Check: Are they valid JSON? (open and verify)
  ↓ Invalid → Regenerate: npm run generate-manifests
  ↓ Valid
Check: Browser console for JavaScript errors?
  ↓ Has errors → Check js/ files loaded correctly
  ↓
Should work now!

┌──────────────────────────────────────────────────────────────────────────┐
│ SUCCESS CRITERIA                                                          │
└──────────────────────────────────────────────────────────────────────────┘

✅ Content workflow clear and repeatable
✅ Manifests generated correctly
✅ Navigation works on all devices
✅ Content displays properly
✅ Deployment is automatic
✅ Documentation is organized
✅ System is maintainable

═══════════════════════════════════════════════════════════════════════════

This diagram shows the complete system architecture from content creation
through to live deployment. The key innovation is using manifest.json files
as navigation indexes, allowing pure static hosting while maintaining dynamic
navigation capabilities.

═══════════════════════════════════════════════════════════════════════════
