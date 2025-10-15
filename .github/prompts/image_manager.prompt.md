# Image Manager Prompt

## Purpose
Insert images into HTML pages from the `thesis_html/` directory with proper semantic markup, accessibility features, responsive design, and interactive lightbox functionality for magnified viewing. Supports single or multiple image insertions with automatic caption generation and alt text for screen readers.

## Usage

### Single Image Insertion
```
@workspace /image_manager image={{path_to_image}} page={{path_to_html}} [section={{section_identifier}}] [*yolo]
```

### Multiple Images Insertion (Same Page)
```
@workspace /image_manager images={{path1,path2,path3}} page={{path_to_html}} [section={{section_identifier}}] [*yolo]
```

## Parameters

### Required Parameters (User-Provided)
- `image` (mutually exclusive with `images`): Relative path to a single image file
  - Example: `assets/images/gantt_chart_phase1.png`
  - Supported formats: `.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`, `.webp`
  
- `images` (mutually exclusive with `image`): Comma-separated list of relative paths to multiple image files
  - Example: `assets/images/diagram1.png,assets/images/chart2.svg,assets/images/photo3.jpg`
  - All images will be inserted in the specified order
  
- `page`: Relative path to the target HTML file
  - Example: `thesis_html/3_literature_review/article_analysis_01.html`
  - Must be an existing HTML file in the workspace

### Optional Parameters (User-Provided)
- `section` (optional): Identifier for where to insert the image(s) on the page
  - Can be a heading text, HTML element ID, or a unique text string
  - Examples: `"Research Methodology"`, `"#results"`, `"Figure 1 shows"`
  - If omitted: Images are inserted **after the last line of text content** in `<article class="main-content">`
  
- `*yolo` (optional): Skip plan approval and insert immediately

### System Parameters (Agent-Generated)
These are automatically determined by the agent:
- Image dimensions (width × height)
- File size
- Image format/type
- Semantic figure numbering (Figure 1, Figure 2, etc.)
- Descriptive captions based on filename and context
- Alt text for accessibility based on image content and context
- Insertion point coordinates in HTML

## Instructions for Agent

### Step 1: Validate Input
1. Check if either `image` or `images` parameter is provided (not both)
2. Verify all image paths exist and are accessible
3. Validate image file formats (must be supported web formats)
4. Verify the target HTML page exists and is a valid HTML file
5. If `section` is provided, verify it can be located in the HTML content
6. Read and parse the target HTML file structure

### Step 2: Analyze Images
For each image to be inserted:
1. **Extract filename and extension**
2. **Determine image metadata**:
   - File size (KB/MB)
   - Dimensions (if determinable)
   - Format type
3. **Generate semantic caption**:
   - Parse filename for context clues
   - Consider page context and surrounding content
   - Create descriptive, academic-style caption
   - Format: "Figure X: [Descriptive Caption]"
   - Example: `gantt_chart_phase1.png` → "Figure 1: Gantt chart illustrating Phase 1 timeline and milestones"
4. **Generate accessibility alt text**:
   - Describe what the image shows (not just repeat the caption)
   - Include key information visible in the image
   - Keep concise but informative (100-150 characters ideal)
   - Example: "Gantt chart with 8 milestones spanning October 2025 to March 2026, showing parallel research activities"

### Step 3: Determine Insertion Points
1. **If `section` parameter provided**:
   - Search for the section identifier in the HTML content
   - Look for: `<h1>`, `<h2>`, `<h3>` with matching text
   - Or search for element with matching ID attribute
   - Or find unique text string in content
   - Insert images **immediately after** the identified section element
   - If section not found, warn user and fall back to default position

2. **If `section` parameter NOT provided** (default):
   - Locate the `<article class="main-content">` element
   - Find the **last block-level text element** before any `</article>` closing tag
   - Insert images **after** this last text element
   - Exclude footer, navigation, or metadata sections

3. **Multiple images handling**:
   - All images in an `images` list are inserted at the same location
   - They are added sequentially in the order provided
   - Each image gets its own `<figure>` element
   - Automatic figure numbering continues sequentially

### Step 4: Prepare Insertion Plan
Present a detailed plan (unless `*yolo` flag is set):

**For Single Image:**
```
I will insert the following image into the HTML page:

Image Details:
- File: assets/images/gantt_chart_phase1.png
- Size: 245 KB
- Dimensions: 1200×800 px
- Format: PNG

Target Page:
- File: thesis_html/1_idea_generation/brainstorming_session1.html
- Section: "Research Timeline" (after <h2> heading)
- [OR if no section:] Position: After last content paragraph

Generated Content:
- Figure Number: Figure 1
- Caption: "Gantt chart illustrating Phase 1 timeline and milestones from October 2025 to March 2026"
- Alt Text: "Gantt chart with 8 milestones spanning October 2025 to March 2026, showing parallel research activities including literature review and methodology design"

Features to Add:
✓ Semantic HTML5 <figure> and <figcaption> elements
✓ Responsive image sizing (max-width: 100%)
✓ Accessibility alt text for screen readers
✓ Click-to-magnify lightbox functionality
✓ Keyboard navigation (ESC to close)
✓ Click-outside-to-close behavior
✓ Close button (X) in magnified view

Proceed with insertion? (yes/no)
```

**For Multiple Images:**
```
I will insert the following images into the HTML page:

Target Page: thesis_html/3_literature_review/systematic_review.html
Insertion Point: After "Methodology" section

Images to Insert:
1. assets/images/search_strategy_flowchart.png
   - Size: 180 KB | Format: PNG
   - Caption: "Figure 1: Systematic literature search strategy flowchart"
   - Alt Text: "Flowchart showing database selection, search terms, inclusion/exclusion criteria, and final selection of 47 articles"

2. assets/images/prisma_diagram.svg
   - Size: 95 KB | Format: SVG
   - Caption: "Figure 2: PRISMA diagram showing article selection process"
   - Alt Text: "PRISMA flow diagram with 4 phases: identification (n=1,247), screening (n=423), eligibility (n=89), included (n=47)"

3. assets/images/thematic_map.jpg
   - Size: 312 KB | Format: JPEG
   - Caption: "Figure 3: Thematic map of literature review findings"
   - Alt Text: "Concept map showing 5 main themes with interconnecting relationships and 18 sub-themes organized hierarchically"

All images will include:
✓ Click-to-magnify lightbox functionality
✓ Full accessibility support
✓ Responsive design for mobile devices
✓ Sequential figure numbering
✓ Professional academic styling

Proceed with insertion? (yes/no)
```

Wait for user approval before proceeding (unless `*yolo` flag is provided).

### Step 5: Generate HTML Markup
For each image, generate the complete HTML structure:

```html
<figure class="academic-figure" data-figure-number="1">
    <img src="/assets/images/gantt_chart_phase1.png" 
         alt="Gantt chart with 8 milestones spanning October 2025 to March 2026, showing parallel research activities including literature review and methodology design"
         class="responsive-image lightbox-trigger"
         loading="lazy"
         data-lightbox-src="/assets/images/gantt_chart_phase1.png">
    <figcaption>
        <span class="figure-label">Figure 1:</span> 
        <span class="figure-caption">Gantt chart illustrating Phase 1 timeline and milestones from October 2025 to March 2026</span>
        <span class="expand-hint">(click to expand)</span>
    </figcaption>
</figure>
```

**Note**: Always include `<span class="expand-hint">(click to expand)</span>` at the end of every figcaption to inform users of the interactive lightbox capability.

### Step 6: Add Lightbox Infrastructure
Ensure the HTML page has the necessary CSS and JavaScript files linked:

**Required Files to Create (if they don't exist):**

1. **CSS File**: `css/lightbox.css` (create if missing)
2. **JavaScript File**: `js/lightbox.js` (create if missing)
3. **Lightbox HTML Structure**: Add to page body if missing

**Check and Add CSS Link (in `<head>` section):**
```html
<link rel="stylesheet" href="/css/lightbox.css">
```

**Check and Add JavaScript Link (before closing `</body>` tag):**
```html
<script src="/js/lightbox.js"></script>
```

**Check and Add HTML Structure (before closing `</body>` tag, before script tags):**
```html
<!-- Lightbox Modal -->
<div id="lightboxModal" class="lightbox-modal" role="dialog" aria-modal="true" aria-label="Image Lightbox">
    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
    <div class="lightbox-content">
        <img id="lightboxImage" class="lightbox-image" src="" alt="">
    </div>
</div>
```

**Create `css/lightbox.css` if it doesn't exist with the following content:**
```css
/* ===================================
   Lightbox Modal Styles
   Provides click-to-magnify functionality for images
   =================================== */

/* Modal Container */
.lightbox-modal {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
}

.lightbox-modal.active {
    display: flex;
}

/* Modal Content */
.lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lightbox-image {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
}

/* Close Button */
.lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: #ffffff;
    cursor: pointer;
    background: none;
    border: none;
    padding: 10px;
    line-height: 1;
    transition: color 0.3s ease;
    z-index: 10000;
}

.lightbox-close:hover,
.lightbox-close:focus {
    color: #cccccc;
    outline: none;
}

/* ===================================
   Responsive Image Styles
   Applied to images with lightbox functionality
   =================================== */

.responsive-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.responsive-image:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* ===================================
   Academic Figure Styles
   Semantic styling for figures with captions
   =================================== */

.academic-figure {
    margin: 2rem auto;
    max-width: 100%;
    text-align: center;
}

.academic-figure figcaption {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    font-style: italic;
    color: #555555;
    text-align: center;
    line-height: 1.6;
}

.figure-label {
    font-weight: 600;
    color: #333333;
    font-style: normal;
}

.figure-caption {
    display: inline;
}

/* ===================================
   Mobile Responsiveness
   =================================== */

@media (max-width: 768px) {
    .lightbox-close {
        top: 10px;
        right: 10px;
        font-size: 30px;
    }
    
    .lightbox-content {
        max-width: 95%;
        max-height: 95%;
    }
    
    .academic-figure {
        margin: 1.5rem auto;
    }
    
    .academic-figure figcaption {
        font-size: 0.85rem;
    }
}

@media (max-width: 480px) {
    .lightbox-close {
        font-size: 24px;
        padding: 8px;
    }
}
```

**Create `js/lightbox.js` if it doesn't exist with the following content:**
```javascript
/**
 * Lightbox Functionality
 * Provides click-to-magnify for images with lightbox-trigger class
 * 
 * Features:
 * - Click image to open in full-screen modal
 * - Close via: X button, ESC key, or click outside
 * - Prevents background scrolling when active
 * - Keyboard accessible
 */

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightbox);
    } else {
        initLightbox();
    }
    
    function initLightbox() {
        const modal = document.getElementById('lightboxModal');
        const modalImg = document.getElementById('lightboxImage');
        const closeBtn = document.querySelector('.lightbox-close');
        
        // Exit if lightbox elements don't exist
        if (!modal || !modalImg) {
            console.warn('Lightbox elements not found. Skipping lightbox initialization.');
            return;
        }
        
        // Open lightbox when clicking on any image with lightbox-trigger class
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('lightbox-trigger')) {
                openLightbox(e.target);
            }
        });
        
        // Close lightbox when clicking the X button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }
        
        // Close lightbox when clicking outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeLightbox();
            }
        });
        
        // Close lightbox when pressing ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeLightbox();
            }
        });
        
        /**
         * Open lightbox with specified image
         */
        function openLightbox(imgElement) {
            const imgSrc = imgElement.getAttribute('data-lightbox-src') || imgElement.src;
            const imgAlt = imgElement.alt || 'Magnified image';
            
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Set focus to close button for accessibility
            if (closeBtn) {
                closeBtn.focus();
            }
        }
        
        /**
         * Close lightbox and restore page state
         */
        function closeLightbox() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
            modalImg.src = ''; // Clear image source for performance
            modalImg.alt = '';
        }
    }
})();
```

### Step 7: Insert Images and Save

**IMPORTANT: Check for Dynamic Page Loaders**

Before modifying individual HTML files, determine if the site uses a dynamic page loading system:

1. **Check if pages are loaded dynamically**:
   - Look for URLs like: `phase.html?phase=X&file=Y.html`
   - Check if there's a master template file (e.g., `phase.html`, `index.html`)
   - Look for JavaScript files like `phase-loader.js` or similar that load content dynamically

2. **If using dynamic page loader**:
   - **DO NOT add lightbox infrastructure to individual content HTML files**
   - Add lightbox infrastructure ONLY to the **master template** (e.g., `phase.html`)
   - Content HTML files should ONLY contain the `<figure>` element with the image
   - The master template handles all CSS links, JS links, and lightbox modal structure

3. **If NOT using dynamic page loader** (standalone HTML files):
   - Add lightbox infrastructure to each individual HTML file as described below

**For standalone HTML files (non-dynamic):**

1. **Ensure lightbox infrastructure is in place**:
   
   a. **Check for CSS file**:
      - Verify `css/lightbox.css` exists
      - If missing, create it with the content from Step 6
      - Check if `<link rel="stylesheet" href="/css/lightbox.css">` is in `<head>`
      - If missing, add it after existing CSS links
   
   b. **Check for JavaScript file**:
      - Verify `js/lightbox.js` exists
      - If missing, create it with the content from Step 6
      - Check if `<script src="/js/lightbox.js"></script>` is before closing `</body>`
      - If missing, add it after existing JavaScript links
   
   c. **Check for HTML structure**:
      - Search for `id="lightboxModal"` in the HTML body
      - If not found, add the lightbox modal HTML structure before closing `</body>` tag (before scripts)
      - If found, skip HTML structure addition

**For ALL cases (dynamic or standalone):**

2. **Locate insertion point** based on `section` parameter or default position

3. **Insert figure elements** at the determined location:
   - For single image: Insert one `<figure>` element
   - For multiple images: Insert all `<figure>` elements sequentially
   - Maintain proper HTML indentation
   - Ensure proper spacing between elements

4. **Update figure numbering** if needed:
   - Scan entire page for existing figures
   - Number new figures sequentially
   - Update `data-figure-number` attributes

5. **Validate HTML structure**:
   - Ensure all tags are properly closed
   - Verify proper nesting
   - Check for any syntax errors
   - Verify CSS and JS file links are correct

6. **Save all files**:
   - Save updated HTML file
   - Save `css/lightbox.css` if newly created
   - Save `js/lightbox.js` if newly created

### Step 8: Confirm Completion
Provide detailed confirmation:

**For Single Image:**
```
✅ Successfully inserted image into HTML page!

Image: assets/images/gantt_chart_phase1.png (245 KB)
Page: thesis_html/1_idea_generation/brainstorming_session1.html
Position: After "Research Timeline" heading

Added Features:
✓ Semantic HTML5 <figure> element
✓ Figure 1: Gantt chart illustrating Phase 1 timeline and milestones from October 2025 to March 2026
✓ Accessibility alt text for screen readers (142 characters)
✓ Responsive image sizing (mobile-friendly)
✓ Click-to-magnify lightbox functionality
✓ Keyboard navigation (ESC to close)
✓ Click-outside-to-close behavior
✓ Close button (X) in magnified view

Lightbox Infrastructure:
✓ CSS file: css/lightbox.css (created/verified)
✓ JavaScript file: js/lightbox.js (created/verified)
✓ CSS link added to <head>
✓ JS link added before </body>
✓ Modal HTML structure added to <body>

Files Modified/Created:
- thesis_html/1_idea_generation/brainstorming_session1.html (updated)
- css/lightbox.css (created/verified)
- js/lightbox.js (created/verified)

Next Steps:
1. Open the page in your browser to verify the image displays correctly
2. Click the image to test the lightbox magnification
3. Test keyboard (ESC) and click-outside closing behavior
4. Verify mobile responsiveness
5. Note: All future pages can now use the same lightbox.css and lightbox.js files!
```

**For Multiple Images:**
```
✅ Successfully inserted 3 images into HTML page!

Page: thesis_html/3_literature_review/systematic_review.html
Position: After "Methodology" section heading

Images Inserted:
1. ✓ assets/images/search_strategy_flowchart.png (180 KB)
   - Figure 1: Systematic literature search strategy flowchart
   
2. ✓ assets/images/prisma_diagram.svg (95 KB)
   - Figure 2: PRISMA diagram showing article selection process
   
3. ✓ assets/images/thematic_map.jpg (312 KB)
   - Figure 3: Thematic map of literature review findings

All images include:
✓ Semantic HTML5 markup
✓ Descriptive captions
✓ Accessibility alt text (100-150 characters each)
✓ Responsive design
✓ Lightbox functionality
✓ Sequential figure numbering

Lightbox Infrastructure:
✓ CSS file: css/lightbox.css (already exists - reused!)
✓ JavaScript file: js/lightbox.js (already exists - reused!)
✓ Links verified in HTML <head> and <body>
✓ Modal structure already present

Files Modified:
- thesis_html/3_literature_review/systematic_review.html (updated)

Total file size added: 587 KB

Next Steps:
1. Review all three images in your browser
2. Test lightbox functionality for each image
3. Verify figure numbering is sequential
4. Check mobile responsiveness for all images
5. Benefit from consistent UX across all pages using shared CSS/JS!
```

## Features and Specifications

### Image Markup Structure
All images use semantic HTML5 with the following structure:
- `<figure>` wrapper with `academic-figure` class
- `data-figure-number` attribute for programmatic access
- `<img>` with responsive classes and lazy loading
- `lightbox-trigger` class to enable click-to-magnify
- `data-lightbox-src` attribute for high-resolution source
- `<figcaption>` with figure label and descriptive caption

### Accessibility Features
- **Alt Text**: Descriptive alternative text for screen readers (100-150 characters)
- **ARIA Labels**: Proper ARIA attributes on modal dialog
- **Keyboard Navigation**: Full keyboard support (Tab, Enter, ESC)
- **Semantic HTML**: Use of `<figure>` and `<figcaption>` elements
- **Focus Management**: Focus trap within lightbox when active

### Responsive Design
- **Mobile-First**: Images scale to container width (max-width: 100%)
- **Lazy Loading**: Use `loading="lazy"` attribute for performance
- **Touch Support**: Lightbox works with touch gestures
- **Viewport Consideration**: Lightbox images sized to fit 90% of viewport

### Lightbox Functionality
- **Click to Magnify**: Click any image to open in full-screen lightbox
- **Multiple Close Methods**:
  1. Click the X (close) button in top-right corner
  2. Press ESC key on keyboard
  3. Click anywhere outside the magnified image
- **Background Overlay**: Semi-transparent black overlay (90% opacity)
- **Centered Display**: Image centered in viewport with max 90% width/height
- **Smooth Transitions**: Fade-in/fade-out animations
- **Scroll Lock**: Prevents background page scrolling when lightbox is active

### Figure Numbering
- **Automatic Numbering**: Figures numbered sequentially (Figure 1, Figure 2, etc.)
- **Page-Level Scope**: Numbering starts at 1 for each page
- **Insertion Awareness**: New figures continue from highest existing number
- **Data Attribute**: `data-figure-number` for scripting access

### Caption Generation Guidelines
- **Academic Style**: Formal, descriptive, objective tone
- **Informative**: Explain what the figure shows and why it's relevant
- **Concise**: Typically 10-20 words
- **Context-Aware**: Reference page content and research context
- **Examples**:
  - `gantt_chart_phase1.png` → "Gantt chart illustrating Phase 1 timeline and milestones from October 2025 to March 2026"
  - `data_analysis_flow.svg` → "Data analysis workflow showing coding, categorization, and thematic synthesis stages"
  - `interview_protocol.jpg` → "Semi-structured interview protocol with core questions and follow-up prompts"

### Alt Text Generation Guidelines
- **Descriptive, Not Decorative**: Describe content, not appearance
- **Concise**: Aim for 100-150 characters
- **Informative**: Include key data points or insights from the image
- **Context-Free**: Assume reader cannot see the image
- **Examples**:
  - For Gantt chart: "Gantt chart with 8 milestones spanning October 2025 to March 2026, showing parallel research activities including literature review and methodology design"
  - For flowchart: "Flowchart with 6 decision points and 12 process steps showing systematic literature search from database selection to final article inclusion"
  - For concept map: "Concept map showing 5 main themes with interconnecting relationships and 18 sub-themes organized hierarchically"

## Error Handling

### Image Not Found
- Return clear error message with the invalid path
- Suggest checking file path and trying again
- List available images in `assets/images/` directory

### HTML Page Not Found
- Return error with the invalid page path
- Suggest checking file path
- List available HTML files in the specified phase folder

### Section Not Found
- Warn user that the specified section couldn't be located
- Fall back to default insertion point (after last content)
- Suggest alternative section identifiers

### Invalid Image Format
- List supported formats: PNG, JPG, JPEG, SVG, GIF, WebP
- Reject unsupported formats (BMP, TIFF, raw formats)
- Suggest converting to web-friendly format

### Multiple Insertions Conflict
- If inserting at the same location multiple times, warn user
- Provide options to append or replace existing figures

### HTML Parse Errors
- If HTML structure is malformed, report specific issues
- Suggest manual review before insertion
- Optionally attempt to fix common issues (missing closing tags)

## Examples

### Example 1: Single Image with Section Specification
```
@workspace /image_manager image=assets/images/gantt_chart_phase1.png page=thesis_html/1_idea_generation/brainstorming_session1.html section="Research Timeline"
```

Shows plan, waits for approval, then inserts the Gantt chart after the "Research Timeline" heading.

### Example 2: Single Image at Default Position with YOLO
```
@workspace /image_manager image=assets/images/conceptual_framework.svg page=thesis_html/4_theoretical_framework/index.html *yolo
```

Immediately inserts the conceptual framework diagram after the last content paragraph without showing a plan.

### Example 3: Multiple Images in Literature Review
```
@workspace /image_manager images=assets/images/search_strategy.png,assets/images/prisma_diagram.svg,assets/images/thematic_map.jpg page=thesis_html/3_literature_review/systematic_review.html section="Methodology"
```

Inserts three figures sequentially after the "Methodology" section, with automatic numbering (Figure 1, 2, 3).

### Example 4: Multiple Images with YOLO at Default Position
```
@workspace /image_manager images=assets/images/chart1.png,assets/images/chart2.png,assets/images/chart3.png page=thesis_html/7_data_analysis/findings.html *yolo
```

Immediately inserts three charts at the end of the content without plan approval.

### Example 5: Image with ID-Based Section
```
@workspace /image_manager image=assets/images/participants_demographics.png page=thesis_html/6_data_collection/participant_overview.html section="#demographics-section"
```

Inserts the demographics chart after the HTML element with `id="demographics-section"`.

## Quality Checks

Before finalizing the insertion:
- [ ] Image file exists and is accessible
- [ ] Image format is web-compatible
- [ ] Target HTML page exists and is valid
- [ ] Insertion point is correctly identified
- [ ] Figure number is sequential and correct
- [ ] Caption is descriptive and academic in tone
- [ ] Alt text is informative and concise (100-150 characters)
- [ ] Lightbox infrastructure is present (CSS, HTML, JS)
- [ ] HTML structure is valid after insertion
- [ ] Responsive design classes are applied
- [ ] All accessibility attributes are present
- [ ] File is saved successfully

## Notes

- **Non-Destructive**: Original images are not modified, only referenced
- **Semantic HTML**: Always use `<figure>` and `<figcaption>` for images with captions
- **Performance**: Use lazy loading (`loading="lazy"`) for below-the-fold images
- **Accessibility First**: Alt text and ARIA labels are mandatory, not optional
- **Mobile-Friendly**: All images must be responsive and touch-enabled
- **Academic Standards**: Follow academic conventions for figure numbering and citations
- **Consistency**: Maintain consistent styling across all images on all pages
- **⚠️ CRITICAL - Dynamic Page Loaders**: If the website uses a dynamic page loading system (e.g., `phase.html?phase=X&file=Y.html`), add lightbox infrastructure ONLY to the master template file, NOT to individual content HTML files. Content files should only contain the `<figure>` elements.

## Dependencies

The image manager relies on:
- Valid HTML5 structure in target pages
- **Modular CSS files**:
  - `css/main.css` (site-wide styles)
  - `css/academic.css` (academic document styles)
  - `css/lightbox.css` (lightbox functionality - created by this tool if missing)
- **Modular JavaScript files**:
  - `js/lightbox.js` (lightbox event handlers - created by this tool if missing)
- Modern browser support for:
  - CSS Flexbox
  - ES6 JavaScript
  - addEventListener API
  - classList API
  - CSS transitions and transforms

## Modular Architecture Benefits

This prompt uses a **modular, reusable architecture**:

1. **Single Source of Truth**: All lightbox styles in `css/lightbox.css`, all lightbox logic in `js/lightbox.js`
2. **Easy Maintenance**: Update one file to change behavior across all pages
3. **Consistent UX**: All images across the entire site behave identically
4. **Performance**: Browser caches CSS/JS files once, used by all pages
5. **Clean HTML**: No inline styles or scripts cluttering HTML files
6. **Separation of Concerns**: HTML (structure), CSS (presentation), JS (behavior)
7. **Reusability**: Once created, files are reused for all subsequent image insertions
8. **Scalability**: Add 100 images across 50 pages - still only 2 additional files (CSS + JS)

## Future Enhancements

Consider adding:
- Image optimization and compression before insertion
- Automatic thumbnail generation for large images
- Image gallery functionality (prev/next navigation in lightbox)
- Zoom controls in lightbox (zoom in/out)
- Support for image annotations or highlights
- Automatic copyright/attribution footer for images
- Integration with academic citation tools
- Batch insertion from entire folder
- Drag-and-drop positioning interface
- Version control for image updates
