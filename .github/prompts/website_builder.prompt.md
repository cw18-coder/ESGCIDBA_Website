# Website Builder Prompt - Doctoral Thesis Website

## Purpose
Build a professional academic website to showcase and organize the doctoral thesis across all research phases, with a clean, scholarly aesthetic appropriate for academic work.

## Website Structure Requirements

### 1. Navigation Structure
Create a multi-level navigation system:

**Top-Level Pages (Main Header Navigation):**
- Home / Overview
- Reflection Journal (Phase 0)
- Idea Generation (Phase 1)
- Proposal (Phase 2)
- Literature Review (Phase 3)
- Theoretical Framework (Phase 4)
- Design (Phase 5)
- Data Collection (Phase 6)
- Data Analysis (Phase 7)
- Report (Phase 8)

### 2. Table of Contents Navigation
Each phase page should include:
- **Side Navigation Pane**: Display a table of contents listing all HTML files within that phase's folder
- **Dynamic Content Area**: Display the selected page content
- **Responsive Design**: Nav pane should be collapsible on mobile devices

### 3. Page Navigation
Every content page must include:
- **Previous Button**: Navigate to the previous page in the current phase
- **Next Button**: Navigate to the next page in the current phase
- **Breadcrumb Navigation**: Show current location (e.g., "Home > Literature Review > Article Analysis")

### 4. Content Organization
- Read all HTML files from `thesis_html/` subfolders
- Generate table of contents automatically based on files in each phase folder
- Maintain logical ordering (alphabetical or by file prefix if numbered)
- Handle empty folders gracefully (show "Coming Soon" or similar)

## Design Requirements

### Academic Aesthetic
**Visual Design Principles:**
- Clean, professional, and distraction-free layout
- Typography: Serif fonts for body text (e.g., Georgia, Merriweather, or similar) to convey academic gravitas
- Sans-serif fonts for headings and navigation (e.g., Open Sans, Lato)
- Generous whitespace and proper line spacing for readability
- Neutral color palette: whites, grays, navy/dark blue accents

**Color Scheme Suggestions:**
- Primary: Deep navy or dark slate (#1e3a5f or similar)
- Secondary: Academic gold or burgundy for accents (#8b7355 or #6b2c3e)
- Background: Off-white or light cream (#fafaf8)
- Text: Dark charcoal for body text (#2d2d2d)

### Layout Components
**Header:**
- University/thesis title or logo area
- Horizontal navigation menu with clear active state
- Clean separation from content area

**Sidebar (Table of Contents):**
- Fixed or sticky positioning for easy access while scrolling
- Clear hierarchy and indentation for nested items
- Highlight current page in TOC

**Content Area:**
- Maximum width for optimal reading (65-75 characters per line)
- Centered or left-aligned with comfortable margins
- Support for academic formatting (citations, footnotes, figures, tables)

**Footer:**
- Copyright and date information
- Previous/Next navigation buttons (prominent and easily clickable)
- Optional: Contact information or links to related resources

### Responsive Design
- Mobile-friendly navigation (hamburger menu)
- Readable on tablets and phones
- Adjust font sizes and spacing for different screen sizes

## Technical Requirements

### Technology Stack
Choose appropriate technologies:
- **Static Site Generator**: Consider Jekyll, Hugo, or plain HTML/CSS/JavaScript
- **CSS Framework**: Bootstrap, Tailwind, or custom CSS for academic styling
- **Hosting**: GitHub Pages compatible

### File Management
- Source content from `thesis_html/` folders
- Generate navigation dynamically from folder structure
- Handle file naming conventions consistently
- Support for both Markdown and HTML content if needed

### Features to Implement
1. **Automatic TOC Generation**: Scan each phase folder and create navigation
2. **Search Functionality**: Optional but helpful for large thesis
3. **Print Styles**: CSS for academic printing
4. **Citation Support**: Proper formatting for academic citations
5. **Accessibility**: WCAG compliant (proper heading hierarchy, alt text, keyboard navigation)

## Implementation Steps

### Phase 1: Setup and Structure
1. Choose static site generator or framework
2. Set up project structure and build system
3. Create base templates (header, footer, navigation)
4. Implement responsive grid/layout system

### Phase 2: Navigation System
1. Create header with main phase navigation
2. Implement sidebar TOC that reads from folder structure
3. Add breadcrumb navigation
4. Build previous/next button logic

### Phase 3: Styling
1. Apply academic color scheme and typography
2. Style navigation components
3. Format content area for academic readability
4. Add responsive breakpoints

### Phase 4: Content Integration
1. Read HTML files from `thesis_html/` subfolders
2. Parse and display content appropriately
3. Handle metadata (titles, dates, authors)
4. Generate dynamic TOC based on actual files

### Phase 5: Polish and Testing
1. Test navigation flows
2. Verify responsive design on multiple devices
3. Check accessibility compliance
4. Optimize performance

## Configuration Files Needed

### Site Configuration
Create necessary config files:
- `_config.yml` (for Jekyll) or equivalent
- Navigation structure definitions
- Theme/styling variables
- Build scripts

### GitHub Pages Setup
- Ensure proper folder structure for GitHub Pages
- Configure custom domain if needed (CNAME file exists)
- Set up automated builds if using static site generator

## Content Guidelines

### Homepage
Should include:
- Thesis title and author
- Brief abstract or introduction
- Overview of the research journey
- Links to key sections

### Phase Pages
Each phase landing page should:
- Introduce the phase purpose
- Show table of contents for that phase
- Provide context for the work in that phase

## Notes
- Keep the design timeless and professional
- Prioritize readability and usability over decorative elements
- Ensure the website serves as both a presentation tool and a navigation aid
- The website should grow with the thesis, accommodating new content easily
