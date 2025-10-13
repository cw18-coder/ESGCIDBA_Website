# Quick Reference Card - DBA Thesis Website

> **🎯 Quick Start**: Your daily command cheat sheet for working with the website.
> 
> For detailed guides, see:
> - [Website Usage Guide](context/website_guide.context.md) - Complete workflows and setup
> - [Deployment Guide](context/deployment_guide.context.md) - Production deployment procedures
> - [Technical Details](context/implementation_summary.context.md) - Architecture reference
> - [Implementation Q&A](context/clarifications.context.md) - Design decisions explained

## 🚀 Common Tasks

### Add New Content (Complete Workflow)
```bash
# 1. Write content in Markdown
thesis_md/3_literature_review/my_article.md

# 2. Convert Markdown → HTML using .github/prompts/markdown_to_html.prompt.md
#    (Creates: thesis_html/3_literature_review/my_article.html)

# 3. Regenerate navigation manifests
npm run generate-manifests

# 4. Test locally
python -m http.server 8000

# 5. Commit and deploy
git add .
git commit -m "Add new literature review"
git push
```

### Quick Add (HTML Direct)
```bash
# 1. Create HTML directly in phase folder
thesis_html/3_literature_review/my_new_article.html

# 2. Regenerate manifests
npm run generate-manifests

# 3. Test, commit, push
```

### Start Local Server
```bash
# Windows Quick Start
start-server.bat

# Python (if installed)
python -m http.server 8000

# Node.js (if installed)
npm run serve

# Then visit: http://localhost:8000
```

### Two-Step Process Explained

**Step 1: Markdown → HTML** (content creation)
```bash
# Use .github/prompts/markdown_to_html.prompt.md with GitHub Copilot
# Input:  thesis_md/3_literature_review/article.md
# Output: thesis_html/3_literature_review/article.html
```

**Step 2: HTML → Manifests** (navigation index)
```bash
# Run after adding/removing/renaming HTML files
npm run generate-manifests
# Creates/updates: thesis_html/*/manifest.json
# These files tell the website what content exists
```

**Important:** 
- manifest.json = navigation index (not content)
- Manifests must be regenerated when:
  - Adding new HTML files ✅
  - Removing HTML files ✅
  - Renaming HTML files ✅
  - Editing HTML content ❌ (not needed)

## 📁 File Locations

### Content
```
thesis_html/0_reflection_journal/    # Reflection Journal
thesis_html/1_idea_generation/       # Idea Generation
thesis_html/2_proposal/              # Proposal
thesis_html/3_literature_review/     # Literature Review
thesis_html/4_theoretical_framework/ # Theoretical Framework
thesis_html/5_design/                # Design
thesis_html/6_data_collection/       # Data Collection
thesis_html/7_data_analysis/         # Data Analysis
thesis_html/8_report/                # Report
```

### Key Files
```
index.html              # Homepage
phase.html              # Phase viewer
css/main.css           # Core styles
css/academic.css       # Content styles
js/navigation.js       # Navigation logic
js/toc-generator.js    # TOC generation
js/phase-loader.js     # Content loading
```

## 🎨 Customization

### Change Colors
Edit `css/main.css`:
```css
:root {
    --color-primary: #1e3a5f;    /* Navy */
    --color-secondary: #8b7355;  /* Gold */
    --color-accent: #6b2c3e;     /* Burgundy */
}
```

### Change Fonts
Edit `css/main.css`:
```css
:root {
    --font-serif: Georgia, serif;
    --font-sans: 'Segoe UI', sans-serif;
}
```

### Modify Homepage
Edit `index.html` - update text in hero section and phase cards

## 🔧 Troubleshooting

### Content Not Showing
```bash
# Check manifest exists
dir thesis_html\[phase_folder]\manifest.json

# Regenerate if missing
npm run generate-manifests

# Clear browser cache: Ctrl+Shift+R
```

### JavaScript Errors
```
# Open browser console: F12
# Look for error messages
# Check all .js files are loaded
# Verify file paths are correct
```

### Navigation Not Working
```bash
# Check manifest.json files exist
# Verify HTML files are in correct folders
# Test locally before deploying
# Check browser console for errors
```

## 📝 HTML Template

Basic HTML structure for content files:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Document Title</title>
</head>
<body>
    <article>
        <h1>Main Heading</h1>
        
        <section>
            <h2>Section Title</h2>
            <p>Your content here...</p>
        </section>
        
        <section>
            <h2>Another Section</h2>
            <p>More content...</p>
        </section>
    </article>
</body>
</html>
```

## 🌐 URLs

### Local Development
```
Homepage:        http://localhost:8000
Phase 1:         http://localhost:8000/phase.html?phase=1
Phase 3:         http://localhost:8000/phase.html?phase=3
Specific file:   http://localhost:8000/phase.html?phase=3&file=article.html
```

### Production
```
Homepage:        https://esgci-dba-thesis.clarencew.dev
Phase 1:         https://esgci-dba-thesis.clarencew.dev/phase.html?phase=1
```

## 📦 NPM Scripts

```bash
npm run generate-manifests    # Generate all manifest files
npm run serve                 # Start Python server (port 8000)
npm run serve-alt            # Start Node http-server (port 8000)
```

## 🔍 Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline
```

## 📊 Project Stats

- **9 Phases** (0-8)
- **3 CSS Files** (main, academic)
- **4 JavaScript Files** (navigation, toc, loader, generator)
- **2 HTML Pages** (index, phase)
- **0 Build Dependencies** (pure static site)
- **~2000 Lines** of code total

## ✅ Pre-Deployment Checklist

Before pushing to GitHub:
- [ ] All new HTML files added to correct phase folders
- [ ] Manifests regenerated (`npm run generate-manifests`)
- [ ] Tested locally (all navigation works)
- [ ] No JavaScript errors in console
- [ ] All images load correctly
- [ ] Mobile responsive tested (F12 > Device Toolbar)
- [ ] Git commit message is descriptive

## 🎯 Best Practices

### File Naming
✅ `literature_review_smith_2023.html`
✅ `data_analysis_themes.html`
✅ `theoretical_framework_overview.html`

❌ `doc1.html`
❌ `untitled.html`
❌ `new_file.html`

### Commit Messages
✅ "Add literature review analysis of Smith (2023)"
✅ "Update theoretical framework with new citations"
✅ "Fix navigation issue in phase 3"

❌ "Update"
❌ "Changes"
❌ "Fix stuff"

### Content Organization
- One HTML file per document/topic
- Use clear section headings (h2, h3)
- Include proper citations and references
- Add alt text to all images
- Use semantic HTML elements

## 📚 Documentation

- **context/website_guide.context.md** - Full usage guide
- **context/deployment_guide.context.md** - Deployment instructions
- **context/implementation_summary.context.md** - Technical overview
- **context/clarifications.context.md** - Implementation Q&A
- **README.md** - Project overview (at root)

## 🆘 Emergency Fixes

### Site Broken After Push
```bash
# Rollback to previous commit
git revert HEAD
git push origin main
```

### Lost Changes
```bash
# View recent changes
git log --oneline -10

# Restore specific file
git checkout HEAD~1 -- path/to/file.html
```

### Start Fresh
```bash
# Pull latest from GitHub (overwrites local)
git fetch origin
git reset --hard origin/main
```

## 💡 Tips

1. **Commit often** - Small commits are easier to track
2. **Test locally first** - Catch errors before deployment
3. **Regenerate manifests** - After adding any HTML files
4. **Clear cache** - Use Ctrl+Shift+R to force refresh
5. **Check console** - F12 shows JavaScript errors
6. **Use semantic HTML** - Proper heading hierarchy
7. **Mobile test** - Use device toolbar in browser
8. **Read docs** - All answers are in the documentation

## 🎓 Support

Need help? Check:
1. Browser console (F12) for errors
2. Documentation files
3. Git commit history for working versions
4. Manifest files are up to date

---

**Keep this file bookmarked for quick reference! 📌**
