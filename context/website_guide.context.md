# DBA Thesis Website - Setup & Usage Guide

## Overview

This is a professional academic website for documenting and showcasing a Doctor of Business Administration (DBA) thesis journey. The website features a clean, scholarly aesthetic with dynamic navigation and content organization across 8 research phases plus an ongoing reflection journal.

## Website Features

### ✨ Key Features

- **Multi-phase Navigation**: Easy navigation across all 8 thesis phases
- **Dynamic Table of Contents**: Automatically generated from HTML files in each phase
- **Previous/Next Navigation**: Sequential reading through research content
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Academic Styling**: Professional typography and color scheme
- **Print Support**: Optimized CSS for printing academic content
- **Breadcrumb Navigation**: Always know where you are in the site

### 📱 Navigation Structure

1. **Main Navigation**: Top header menu for accessing any phase
2. **Sidebar TOC**: Automatically lists all documents within a phase
3. **Breadcrumbs**: Shows current location hierarchy
4. **Page Navigation**: Previous/Next buttons for sequential reading

## Project Structure

```
ESGCIDBA_Website/
├── index.html              # Homepage
├── phase.html              # Dynamic phase content viewer
├── package.json            # Node.js configuration
├── css/
│   ├── main.css           # Core layout and styling
│   └── academic.css       # Academic content styling
├── js/
│   ├── navigation.js      # Navigation functionality
│   ├── toc-generator.js   # Table of contents generation
│   ├── phase-loader.js    # Dynamic content loading
│   └── generate-manifest.js # Manifest file generator
├── thesis_html/           # HTML content organized by phase
│   ├── 0_reflection_journal/
│   ├── 1_idea_generation/
│   ├── 2_proposal/
│   ├── 3_literature_review/
│   ├── 4_theoretical_framework/
│   ├── 5_design/
│   ├── 6_data_collection/
│   ├── 7_data_analysis/
│   └── 8_report/
└── thesis_md/             # Source markdown files (for conversion)
```

## Getting Started

### 1. Add Content

Add HTML files to the appropriate phase folders in `thesis_html/`:

```bash
# Example: Adding a literature review article
thesis_html/3_literature_review/article_analysis_smith2023.html
```

Each HTML file should have this basic structure:

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
        <p>Your content here...</p>
    </article>
</body>
</html>
```

### 2. Generate Manifest Files

After adding new HTML files, regenerate the manifest files so they appear in the table of contents:

```bash
# Using Node.js (recommended)
npm run generate-manifests

# Or directly
node js/generate-manifest.js
```

This creates/updates `manifest.json` files in each phase folder, which the website uses to build navigation.

### 3. Preview Locally

You have several options to preview the website locally:

**Option A: Using Python (if installed)**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Option B: Using Node.js**
```bash
# First install http-server
npm install

# Then serve
npm run serve-alt

# Then open: http://localhost:8000
```

**Option C: Using VS Code Live Server Extension**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### 4. Deploy to GitHub Pages

This website is designed to work with GitHub Pages:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add new content"
   git push
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Save

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/repository-name/`
   - Or your custom domain if configured (via CNAME file)

## Adding Content Workflow

### Standard Workflow

1. **Write in Markdown** (in `thesis_md/` folder)
2. **Convert to HTML** (see markdown_to_html.prompt.md for guidance)
3. **Place HTML in appropriate phase folder** (in `thesis_html/`)
4. **Run manifest generator:**
   ```bash
   npm run generate-manifests
   ```
5. **Test locally**
6. **Commit and push to GitHub**

### Quick Add Workflow

For quick additions, you can create HTML files directly in `thesis_html/`:

```bash
# Create new file
# Add content
# Regenerate manifests
npm run generate-manifests
```

## File Naming Conventions

Use clear, descriptive filenames:

```
✓ Good:
  - literature_review_methodology.html
  - theoretical_framework_overview.html
  - data_analysis_themes.html

✗ Avoid:
  - doc1.html
  - untitled.html
  - temp.html
```

Filenames are automatically converted to readable titles:
- `literature_review_methodology.html` → "Literature Review Methodology"

## Customization

### Changing Colors

Edit CSS variables in `css/main.css`:

```css
:root {
    --color-primary: #1e3a5f;      /* Main color */
    --color-secondary: #8b7355;    /* Accent color */
    --color-accent: #6b2c3e;       /* Highlight color */
    /* ... more variables ... */
}
```

### Adding New Phases

If you need to add additional phases:

1. Create folder in `thesis_html/` (e.g., `9_additional_phase/`)
2. Update configuration in `js/navigation.js` and `js/toc-generator.js`
3. Add navigation link in `index.html` and `phase.html`
4. Regenerate manifests

### Modifying Layout

- **Header/Navigation**: Edit the header section in `index.html` and `phase.html`
- **Main Layout**: Modify `css/main.css`
- **Content Styling**: Modify `css/academic.css`

## Troubleshooting

### Content Not Showing Up

1. Check that HTML files are in the correct folder
2. Regenerate manifests: `npm run generate-manifests`
3. Clear browser cache and reload
4. Check browser console for errors (F12)

### Manifest Generator Not Working

Make sure Node.js is installed:
```bash
node --version  # Should show version number
```

### Navigation Not Working

Check that:
- All JavaScript files are loaded (check browser console)
- Manifest files exist in each phase folder
- File paths are correct (case-sensitive on some systems)

### Styles Not Loading

Verify:
- CSS files exist in `css/` folder
- Links in HTML files point to correct paths
- Browser cache is cleared

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Additional Resources

- **Markdown to HTML Conversion**: See `.github/prompts/markdown_to_html.prompt.md`
- **GitHub Copilot Instructions**: See `.github/copilot-instructions.md`
- **DevOps Guide**: See `.github/prompts/devops.prompt.md`

## Tips for Success

1. **Commit Often**: Regular commits help track progress
2. **Test Locally**: Always preview before pushing
3. **Regenerate Manifests**: Don't forget after adding files
4. **Use Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
5. **Include Alt Text**: For accessibility
6. **Check Links**: Verify all internal links work

## Need Help?

- Check the browser console for error messages (F12)
- Verify file paths are correct
- Ensure manifest files are up to date
- Review the sample HTML file in `thesis_html/1_idea_generation/index.html`

---

**Happy documenting your research journey! 🎓**
