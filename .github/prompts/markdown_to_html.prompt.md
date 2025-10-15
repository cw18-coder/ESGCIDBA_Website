# Markdown to HTML Converter Prompt

## Purpose
Convert individual Markdown files from the `thesis_md/` directory into properly formatted HTML files in the corresponding `thesis_html/` directory, maintaining the parallel folder structure and ensuring consistent styling for the academic thesis website.

## Usage

### Single File Conversion
```
@workspace /markdown_to_html file={{path_to_markdown_file}} [*yolo]
```

### Batch Conversion
```
@workspace /markdown_to_html folder={{path_to_folder}} [*yolo]
```

## Parameters

### Required Parameters (User-Provided)
- `file` (mutually exclusive with `folder`): Path to a single Markdown file to convert
  - Can be absolute or relative path
  - Example: `thesis_md/3_literature_review/article_analysis_01.md`
  
- `folder` (mutually exclusive with `file`): Path to a folder containing Markdown files
  - Converts all `.md` files in the specified folder
  - Example: `thesis_md/3_literature_review/`

### Optional Parameters (User-Provided)
- `*yolo` (optional): Skip plan approval and convert immediately

### System Parameters (Agent-Generated)
These are automatically determined by the agent:
- Output file path: Mirrors input structure, replacing `thesis_md/` with `thesis_html/` and `.md` with `.html`
- Document metadata: Extracted from YAML frontmatter or content (title, date, author)
- ISO date format: Parsed from document date field and converted to YYYY-MM-DD
- Navigation links: Previous/Next links based on manifest order
- Phase information: Determined from folder structure

## Instructions for Agent

### Step 1: Validate Input
1. Check if either `file` or `folder` parameter is provided (not both)
2. Verify the path exists and is accessible
3. For `file`: Confirm it's a `.md` file
4. For `folder`: Identify all `.md` files within the folder (non-recursive)
5. Validate that paths are within the `thesis_md/` directory structure
6. **Check for existing HTML files**:
   - For each Markdown file, determine the corresponding HTML output path
   - Check if the HTML file already exists in `thesis_html/`
   - If file exists, skip it from the conversion list
   - Log which files are being skipped due to existing HTML versions

### Step 2: Prepare Conversion Plan
1. **For Single File:**
   - Parse the file path to extract phase folder
   - Determine output path (replace `thesis_md/` with `thesis_html/`, `.md` with `.html`)
   - Read existing manifest.json from the phase folder
   
2. **For Batch Conversion:**
   - List all `.md` files in the specified folder
   - Check each file against existing HTML files in `thesis_html/`
   - Filter out files that already have HTML versions
   - Create conversion plan only for new/missing HTML files
   - Calculate total files to convert (excluding existing)

3. **Present Plan** (unless `*yolo` flag is set):
   ```
   I will convert the following Markdown file(s) to HTML:
   
   [Single file:]
   - Source: thesis_md/3_literature_review/article_analysis_01.md
   - Destination: thesis_html/3_literature_review/article_analysis_01.html
   - Phase: Literature Review (Phase 3)
   
   [OR for batch:]
   - Folder: thesis_md/3_literature_review/
   - Total Markdown files found: 7
   - Existing HTML files (skipped): 2
     ⊘ article_analysis_01.md (HTML already exists)
     ⊘ article_analysis_02.md (HTML already exists)
   - Files to convert: 5
     1. systematic_review_methodology.md
     2. thematic_synthesis.md
     3. literature_gaps.md
     4. theoretical_perspectives.md
     5. synthesis_framework.md
   
   Actions:
   ✓ Convert Markdown to HTML with academic formatting
   ✓ Extract metadata (title, date, author)
   ✓ Update manifest.json with document entries
   ✓ Apply responsive design classes
   ✓ Generate navigation links
   
   Proceed with conversion? (yes/no)
   ```
   
   Wait for user approval before proceeding (unless `*yolo` flag is provided).

### Step 3: Read and Parse Markdown
For each file to convert:

1. **Read file content**
2. **Parse YAML frontmatter** (if present):
   ```yaml
   ---
   title: "Document Title"
   date: 2025-01-15
   author: "Author Name"
   phase: "Phase Name"
   tags: ["tag1", "tag2"]
   ---
   ```
3. **Extract metadata from content** (if not in frontmatter):
   - Search for date patterns: "**Session Date**: DD Month YYYY" or "**Date**: DD Month YYYY"
   - Common formats: "12 October 2025", "12th October 2025", "15th January 2026"
   - Extract title from first `# Heading` if not in frontmatter
4. **Convert date to ISO format** (YYYY-MM-DD):
   - Example: "12th October 2025" → "2025-10-12"
   - Store both display format (for HTML) and ISO format (for manifest)

### Step 4: Convert Markdown to HTML
Apply comprehensive Markdown-to-HTML conversion:

**Text Formatting:**
- `# Heading` → `<h1>Heading</h1>` (h1-h6)
- `**bold**` → `<strong>bold</strong>`
- `*italic*` → `<em>italic</em>`
- `` `code` `` → `<code>code</code>`

**Lists:**
- Unordered: `<ul><li>...</li></ul>`
- Ordered: `<ol><li>...</li></ol>`
- Maintain proper nesting hierarchy

**Links & Images:**
- `[text](url)` → `<a href="url">text</a>`
- `![alt](image.jpg)` → `<img src="image.jpg" alt="alt">`

**Block Elements:**
- Paragraphs → `<p>...</p>`
- Blockquotes → `<blockquote>...</blockquote>`
- Code blocks → `<pre><code class="language-xxx">...</code></pre>`

**Tables (CRITICAL):**
- Convert to HTML `<table>` with `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- **ALWAYS wrap in**: `<div class="table-wrapper"><table>...</table></div>`
- This enables mobile responsiveness

**Academic Elements:**
- Citations: `<span class="citation">(Author, Year)</span>`
- Footnotes: `<sup class="footnote-ref"><a href="#fn1">1</a></sup>`

### Step 5: Apply HTML Template
Wrap converted content in complete HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Extracted Title]</title>
    <meta name="description" content="[Brief description]">
    <meta name="author" content="[Author name]">
    <meta name="keywords" content="doctoral thesis, DBA, [phase name]">
    
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/academic.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <!-- Site header inserted by header-footer.js -->
    </header>
    
    <main class="content-wrapper">
        <aside class="toc-sidebar">
            <!-- TOC inserted by toc-generator.js -->
        </aside>
        
        <article class="main-content">
            [CONVERTED MARKDOWN CONTENT]
        </article>
    </main>
    
    <footer>
        <!-- Footer inserted by header-footer.js -->
    </footer>
    
    <script src="/js/navigation.js"></script>
</body>
</html>
```

### Step 6: Update Manifest and Save
1. **Read existing manifest.json** from phase folder
2. **Create document entry**:
   ```json
   {
     "file": "article_analysis_01.html",
     "title": "Article Analysis 01",
     "date": "2025-10-12",
     "category": "literature_analysis"
   }
   ```
   - For `index.html`: Add `"isPhaseOverview": true` and omit `date`
   - For other docs: Include `date` in ISO format (YYYY-MM-DD)
3. **Add entry to documents array** (if not already present)
4. **Sort documents by date** (oldest first)
5. **Save updated manifest.json**
6. **Save HTML file** to destination path
7. **Log success** with details

### Step 7: Confirm Completion
Provide detailed confirmation:

**For Single File:**
```
✅ Successfully converted Markdown to HTML!

Source: thesis_md/3_literature_review/article_analysis_01.md
Destination: thesis_html/3_literature_review/article_analysis_01.html

Details:
- Title: "Critical Analysis of Article 01"
- Date: 2025-10-12 (12th October 2025)
- Phase: Literature Review (Phase 3)
- Word count: 2,450 words
- Tables: 2 (wrapped for mobile)
- Images: 3

✓ HTML file created with semantic structure
✓ Manifest.json updated with document entry
✓ Academic styling classes applied
✓ Responsive design implemented
✓ Navigation ready (Previous/Next will auto-populate)

Next steps:
1. View the file in your browser
2. TOC will automatically update on page load
3. Verify all links and images display correctly
```

**For Batch Conversion:**
```
✅ Batch conversion completed!

Converted files from: thesis_md/3_literature_review/

Results:
⊘ article_analysis_01.md (skipped - HTML already exists)
⊘ article_analysis_02.md (skipped - HTML already exists)
✓ systematic_review_methodology.md → systematic_review_methodology.html
✓ thematic_synthesis.md → thematic_synthesis.html
✓ literature_gaps.md → literature_gaps.html
✓ theoretical_perspectives.md → theoretical_perspectives.html
✓ synthesis_framework.md → synthesis_framework.html

Summary:
- Total Markdown files: 7
- Skipped (already exist): 2
- Converted: 5
- Failed: 0
- Total words converted: ~12,340
- Manifest entries added: 5

All files are now available at: thesis_html/3_literature_review/
The Table of Contents will automatically reflect the new documents on page load.
```

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

## Examples

### Example 1: Simple Single File Conversion with YOLO
```
@workspace /markdown_to_html file=thesis_md/1_idea_generation/2025/October/brainstorming_session1.md *yolo
```
Immediately converts the file without showing a plan.

**Expected Output:**
```
✅ Successfully converted Markdown to HTML!

Source: thesis_md/1_idea_generation/2025/October/brainstorming_session1.md
Destination: thesis_html/1_idea_generation/brainstorming_session1.html

Details:
- Title: "Brainstorming Session 1"
- Date: 2025-10-12
- Phase: Idea Generation (Phase 1)
- Word count: 1,840 words

✓ HTML file created
✓ Manifest.json updated
```

### Example 2: Single File with Plan Approval
```
@workspace /markdown_to_html file=thesis_md/3_literature_review/systematic_review_methodology.md
```
Shows a plan and waits for user approval before converting.

**Expected Plan:**
```
I will convert the following Markdown file to HTML:

- Source: thesis_md/3_literature_review/systematic_review_methodology.md
- Destination: thesis_html/3_literature_review/systematic_review_methodology.html
- Phase: Literature Review (Phase 3)

Actions:
✓ Convert Markdown to HTML with academic formatting
✓ Extract metadata (title, date, author)
✓ Update manifest.json
✓ Apply responsive design classes

Proceed with conversion? (yes/no)
```

### Example 3: Batch Conversion of Folder
```
@workspace /markdown_to_html folder=thesis_md/2_proposal/
```
Converts all `.md` files in the proposal folder, showing plan first.

**Expected Plan:**
```
I will convert the following Markdown files to HTML:

- Folder: thesis_md/2_proposal/
- Total Markdown files found: 4
- Existing HTML files (skipped): 1
  ⊘ research_problem.md (HTML already exists)
- Files to convert: 3
  1. research_questions.md
  2. proposed_methodology.md
  3. literature_foundation.md

Actions:
✓ Convert each file to HTML
✓ Extract metadata from each
✓ Update manifest.json with all entries
✓ Apply consistent styling
✓ Skip files that already have HTML versions

Proceed with conversion? (yes/no)
```

### Example 4: Batch Conversion with YOLO
```
@workspace /markdown_to_html folder=thesis_md/0_reflection_journal/2025/October/ *yolo
```
Immediately converts all files in the October reflection folder without approval.

### Example 5: Converting a Phase Overview (index file)
```
@workspace /markdown_to_html file=thesis_md/4_theoretical_framework/index.md *yolo
```
Creates `index.html` and marks it with `isPhaseOverview: true` in manifest, omitting the date field.

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

## Batch Conversion Behavior

When using the `folder` parameter:
1. **Non-recursive**: Only converts `.md` files in the specified folder, not subfolders
2. **Existing File Protection**: Automatically skips Markdown files that already have corresponding HTML files in `thesis_html/`
3. **Sequential Processing**: Files are converted one at a time to maintain consistency
4. **Comprehensive Logging**: Each file's status is reported individually (converted, skipped, or failed)
5. **Continues on Error**: If one file fails, the rest continue processing
6. **Summary Statistics**: Provides overall success/skipped/failure count at completion

**Subfolder Handling:**
If you need to convert files in subfolders (e.g., `thesis_md/0_reflection_journal/2025/October/`), specify the full path to that subfolder.

**Overwriting Existing Files:**
To force conversion of files that already exist in `thesis_html/`, you must either:
- Delete the existing HTML file first, then run the conversion
- Use a dedicated overwrite parameter (if user explicitly requests it)

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
