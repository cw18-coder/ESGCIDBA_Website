# Markdown to HTML Converter Prompt

## Purpose
Convert individual Markdown files from the `thesis_md/` directory into properly formatted HTML files in the corresponding `thesis_html/` directory, maintaining the parallel folder structure and ensuring consistent styling for the academic thesis website.

## ⚠️ CRITICAL WARNINGS

### DO NOT Use `npm run generate-manifests`
**NEVER run the `npm run generate-manifests` command after converting files!** This command uses an incompatible manifest structure and will break:
- Hierarchical table of contents (TOC) organization by year/month
- Previous/Next navigation buttons
- Phase overview pages

### Required Manifest Structure
The manifest.json file MUST use this structure:
```json
{
  "phase": "phase_folder_name",
  "title": "Phase Human-Readable Name",
  "generated": "ISO timestamp",
  "documents": [
    {
      "file": "index.html",
      "title": "Phase Overview - Name",
      "isPhaseOverview": true
    },
    {
      "file": "document.html",
      "title": "Document Title",
      "date": "YYYY-MM-DD",
      "category": "optional_category"
    }
  ]
}
```

### Requirements Checklist
Before completing any conversion, verify:
- [ ] Phase has an `index.html` overview file (see existing phases for examples)
- [ ] manifest.json uses `documents` array (NOT `files` array)
- [ ] index.html is marked with `isPhaseOverview: true` and has NO date field
- [ ] All other documents have `date` field in ISO format (YYYY-MM-DD)
- [ ] Documents are sorted by date (oldest first)
- [ ] DO NOT run `npm run generate-manifests` after conversion

## Input Parameters

When invoking this prompt, provide:
- **Markdown File Path**: The relative or absolute path to the `.md` file to convert
  - Example: `thesis_md/3_literature_review/article_analysis_01.md`

## Folder Structure Mapping

The conversion maintains a 1:1 mapping between source and destination folders:

```
thesis_md/                          →  thesis_html/
├── 0_reflection_journal/           →  ├── 0_reflection_journal/
├── 1_idea_generation/              →  ├── 1_idea_generation/
├── 2_proposal/                     →  ├── 2_proposal/
├── 3_literature_review/            →  ├── 3_literature_review/
├── 4_theoretical_framework/        →  ├── 4_theoretical_framework/
├── 5_design/                       →  ├── 5_design/
├── 6_data_collection/              →  ├── 6_data_collection/
├── 7_data_analysis/                →  ├── 7_data_analysis/
└── 8_report/                       →  └── 8_report/
```

## Conversion Process

### Step 1: Parse Input
1. Extract the filename from the provided Markdown file path
2. Identify the phase folder (e.g., `3_literature_review`)
3. Determine the destination path by replacing `thesis_md/` with `thesis_html/`
4. Change file extension from `.md` to `.html`

**Example:**
- Input: `thesis_md/3_literature_review/article_analysis_01.md`
- Output: `thesis_html/3_literature_review/article_analysis_01.html`

### Step 2: Read Markdown Content
1. Read the entire Markdown file content
2. Parse any frontmatter (YAML metadata) if present
3. Extract title, date, author, or other metadata
4. **Date Extraction (Critical for TOC Organization)**:
   - Search for date patterns in the document content in the format: "**Session Date**: DD Month YYYY" or "**Date**: DD Month YYYY"
   - Common formats to recognize:
     - "12 October 2025"
     - "12th October 2025" 
     - "15th January 2026"
     - "3rd March 2025"
   - Parse the date string and convert to ISO format (YYYY-MM-DD) for manifest.json
   - Example: "12th October 2025" → "2025-10-12"
   - If no explicit date field found in content, check YAML frontmatter for date metadata
   - Store both the original display format (for HTML display) and ISO format (for TOC organization)
   - This date will be used by the TOC generator to organize documents hierarchically by Year → Month
4. **Date Extraction (Critical for TOC Organization)**:
   - Search for date patterns in the format: "**Session Date**: DD Month YYYY" or "**Date**: DD Month YYYY"
   - Examples: "12 October 2025", "15th January 2026", "3rd March 2025"
   - Parse the date and convert to ISO format (YYYY-MM-DD) for manifest.json
   - If no explicit date field found, check document metadata or filename for date information
   - Store both the original display format and ISO format for later use

### Step 3: Convert Markdown to HTML
Convert Markdown syntax to semantic HTML:

**Text Formatting:**
- `# Heading 1` → `<h1>Heading 1</h1>`
- `## Heading 2` → `<h2>Heading 2</h2>`
- `**bold**` → `<strong>bold</strong>`
- `*italic*` → `<em>italic</em>`
- `` `code` `` → `<code>code</code>`

**Lists:**
- Unordered lists → `<ul><li>...</li></ul>`
- Ordered lists → `<ol><li>...</li></ol>`
- Nested lists maintain proper hierarchy

**Links and Images:**
- `[text](url)` → `<a href="url">text</a>`
- `![alt](image.jpg)` → `<img src="image.jpg" alt="alt">`

**Block Elements:**
- Paragraphs → `<p>...</p>`
- Blockquotes → `<blockquote>...</blockquote>`
- Code blocks → `<pre><code class="language-xxx">...</code></pre>`
- Horizontal rules → `<hr>`

**Tables:**
- Convert Markdown tables to HTML `<table>` with proper `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` elements
- **IMPORTANT**: Wrap all tables in a `<div class="table-wrapper">` for responsive mobile scrolling
- Example: `<div class="table-wrapper"><table>...</table></div>`

**Academic Citations:**
- Recognize citation formats (APA, Harvard, etc.)
- Wrap citations in appropriate semantic HTML
- Support footnotes and references sections

### Step 4: Apply HTML Template
Wrap the converted content in a complete HTML document structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Title from metadata or first H1]</title>
    <meta name="description" content="[Brief description if available]">
    <meta name="author" content="[Author name]">
    <meta name="keywords" content="doctoral thesis, DBA, [phase name]">
    
    <!-- CSS Links -->
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/academic.css">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <!-- Site header with navigation will be inserted here -->
    </header>
    
    <main class="content-wrapper">
        <aside class="toc-sidebar">
            <!-- Table of contents navigation will be inserted here -->
        </aside>
        
        <article class="main-content">
            [CONVERTED MARKDOWN CONTENT GOES HERE]
        </article>
    </main>
    
    <footer>
        <!-- Site footer content will be inserted here by header-footer.js -->
    </footer>
    
    <script src="/js/navigation.js"></script>
</body>
</html>
```

### Step 5: Handle Metadata and Context
Extract and utilize metadata from the Markdown file:

**Frontmatter Example:**
```yaml
---
title: "Article Analysis 01"
date: 2025-01-15
author: "Doctoral Candidate"
phase: "Literature Review"
tags: ["literature review", "qualitative analysis"]
---
```

Use this metadata to:
- Set the page `<title>`
- Add meta tags for SEO
- Create breadcrumb navigation
- Generate appropriate heading hierarchy

### Step 6: Update Manifest and Generate HTML
1. **Update manifest.json with document metadata**:
   - Read the existing manifest.json from the phase folder
   - Add new document entry with: `file`, `title`, `date` (ISO format), and optional `category`
   - If document is "index.html", mark it with `isPhaseOverview: true` and omit the date
   - Sort documents by date (oldest to newest)
   - Save updated manifest.json back to the phase folder
2. Combine template + content + navigation
3. Ensure proper HTML indentation and formatting
4. Validate HTML structure
5. Save to the corresponding `thesis_html/` location
6. Confirm successful creation with output message

**Manifest Entry Example**:
```json
{
  "file": "brainstorming_session1.html",
  "title": "Brainstorming Session 1",
  "date": "2025-10-12",
  "category": "brainstorming"
}
```

## Styling Considerations

### Academic Formatting
Ensure the HTML includes classes for academic elements:

```html
<!-- Citations -->
<span class="citation">(Author, Year)</span>

<!-- Footnotes -->
<sup class="footnote-ref"><a href="#fn1">1</a></sup>
<div class="footnotes">
    <ol>
        <li id="fn1">Footnote text here.</li>
    </ol>
</div>

<!-- Figures and Tables -->
<figure class="academic-figure">
    <img src="image.jpg" alt="Description">
    <figcaption>Figure 1: Caption text</figcaption>
</figure>

<!-- CRITICAL: Always wrap tables in table-wrapper div for mobile responsiveness -->
<div class="table-wrapper">
    <table class="academic-table">
        <!-- table content -->
    </table>
</div>

<!-- Blockquotes -->
<blockquote class="academic-quote">
    <p>Quote text...</p>
    <cite>Source attribution</cite>
</blockquote>
```

### Responsive Design Classes
Add appropriate classes for responsive layout:
- `.content-wrapper` - Main container
- `.main-content` - Article content area
- `.toc-sidebar` - Navigation sidebar
- `.table-wrapper` - **REQUIRED wrapper for all tables** to enable horizontal scrolling on mobile devices
- `.mobile-only` / `.desktop-only` - Conditional visibility

### Mobile Responsiveness Requirements
**CRITICAL for mobile devices:**
1. **Tables**: ALL tables MUST be wrapped in `<div class="table-wrapper">` to prevent horizontal page scrolling
2. **Code blocks**: Use `<pre><code>` which automatically wraps on mobile via CSS
3. **Long text**: Ensure no fixed-width elements that exceed mobile viewport

## Error Handling

### File Not Found
- If the source Markdown file doesn't exist, return clear error message
- Suggest checking the file path and trying again

### Invalid Markdown
- Handle malformed Markdown gracefully
- Convert what's valid, flag issues in comments
- Don't fail the entire conversion for minor syntax issues

### Missing Metadata
- Use filename as fallback title
- Generate default metadata if frontmatter is absent
- Log warnings for missing recommended metadata

### Path Issues
- Create destination directory if it doesn't exist
- Handle both relative and absolute paths
- Validate that paths are within `thesis_md/` and `thesis_html/` folders

## Post-Conversion Tasks

After successful conversion:
1. ✅ Confirm HTML file created at correct location
2. ✅ Confirm manifest.json updated with document metadata (including date in ISO format)
3. 📝 Log conversion details (source, destination, timestamp, extracted date)
4. 🔍 Optionally validate HTML (check for broken links, missing images)
5. 📊 Report any warnings or issues found
6. 💡 Suggest next steps (e.g., view in browser, TOC will auto-update on page load)

## Usage Example

**Invocation:**
```
Convert this Markdown file to HTML:
thesis_md/3_literature_review/systematic_review_methodology.md
```

**Expected Output:**
```
✅ Conversion successful!

Source: thesis_md/3_literature_review/systematic_review_methodology.md
Destination: thesis_html/3_literature_review/systematic_review_methodology.html

Details:
- Title: "Systematic Review Methodology"
- Phase: Literature Review (Phase 3)
- Word count: 2,450
- Previous page: article_analysis_02.html
- Next page: thematic_synthesis.html

The HTML file has been created with:
✓ Proper semantic structure
✓ Academic styling classes
✓ Navigation links
✓ Responsive design
✓ Metadata tags

You can now view it in your browser or add it to the website navigation.
```

## Batch Conversion Support

For converting multiple files at once:
1. Accept an array of file paths or a folder path
2. Process each file sequentially
3. Maintain a conversion log
4. Report success/failure for each file
5. Provide summary statistics at the end

**Example:**
```
Convert all Markdown files in: thesis_md/3_literature_review/
```

## Dependencies and Tools

Recommended tools for conversion:
- **Markdown Parser**: markdown-it, marked, or similar JavaScript library
- **Frontmatter Parser**: gray-matter or js-yaml
- **HTML Templating**: Handlebars, EJS, or template literals
- **File System Operations**: Node.js fs module or equivalent

## Quality Checks

Before finalizing the HTML file:
- [ ] Valid HTML5 structure
- [ ] All Markdown elements properly converted
- [ ] Links are functional (or flagged if broken)
- [ ] Images paths are correct
- [ ] Metadata is populated
- [ ] Previous/Next navigation is accurate
- [ ] Academic formatting is preserved
- [ ] Responsive design classes applied

## Notes

- **Preserve Academic Integrity**: Maintain exact content, citations, and references
- **Consistency**: Use consistent styling and structure across all converted pages
- **Extensibility**: Design templates to accommodate future enhancements
- **Performance**: Optimize HTML output (minimize whitespace, efficient CSS classes)
- **Accessibility**: Ensure converted HTML meets WCAG standards

## Future Enhancements

Consider adding support for:
- Auto-generating table of contents from headings
- Cross-referencing between pages
- Search index generation
- PDF export functionality
- Version tracking and change history
- Collaborative commenting system
