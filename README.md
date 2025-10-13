# Doctoral Thesis Website - DBA Research Journey

A professional academic website documenting the complete journey of a Doctor of Business Administration (DBA) thesis, from initial ideation through final report.

## 🎓 Project Overview

This repository hosts a static website built to showcase and organize doctoral research across all phases of thesis development. The site serves as both a research portfolio and a navigation tool for the comprehensive thesis work.

### Research Phases

The thesis is organized into 8 distinct phases:

- **Phase 0**: Reflection Journal - Ongoing insights and learning documentation
- **Phase 1**: Idea Generation - Research concept development
- **Phase 2**: Proposal - Formal research proposal
- **Phase 3**: Literature Review - Comprehensive academic review
- **Phase 4**: Theoretical Framework - Conceptual foundations
- **Phase 5**: Design - Research methodology and design
- **Phase 6**: Data Collection - Primary and secondary data gathering
- **Phase 7**: Data Analysis - Findings and interpretation
- **Phase 8**: Report - Final thesis document

## 📁 Repository Structure

```
ESGCIDBA_Website/
├── .github/                        # GitHub configuration and prompts
│   ├── copilot-instructions.md     # AI assistant configuration
│   └── prompts/                    # Reusable prompt templates
│       ├── devops.prompt.md        # Repository setup instructions
│       ├── markdown_to_html.prompt.md  # Content conversion guide
│       └── website_builder.prompt.md   # Website structure guide
├── thesis_md/                      # Source Markdown files
│   ├── 0_reflection_journal/
│   ├── 1_idea_generation/
│   ├── 2_proposal/
│   ├── 3_literature_review/
│   ├── 4_theoretical_framework/
│   ├── 5_design/
│   ├── 6_data_collection/
│   ├── 7_data_analysis/
│   └── 8_report/
├── thesis_html/                    # Generated HTML pages
│   └── [Same structure as thesis_md/]
├── css/                            # Stylesheets
│   ├── main.css                    # Primary styles
│   └── academic.css                # Academic-specific styling
├── js/                             # JavaScript files
│   ├── navigation.js               # Navigation functionality
│   └── toc-generator.js            # Table of contents generator
├── assets/                         # Images, fonts, and other assets
│   ├── images/
│   └── fonts/
├── index.html                      # Homepage
├── CNAME                           # Custom domain configuration
├── .gitignore                      # Git ignore rules
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

- Git installed on your system
- A GitHub account
- A text editor or IDE (VS Code recommended)
- Basic understanding of HTML/CSS/JavaScript

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/[username]/ESGCIDBA_Website.git
   cd ESGCIDBA_Website
   ```

2. **Open in your browser:**
   - Simply open `index.html` in a web browser
   - Or use a local server (e.g., VS Code Live Server extension)

3. **Make changes:**
   - Edit Markdown files in `thesis_md/`
   - Convert to HTML using the markdown_to_html prompt
   - Preview changes locally before committing

### Deployment to GitHub Pages

This site is designed to work seamlessly with GitHub Pages without any build process.

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

3. **Access your site:**
   - Default: `https://[username].github.io/ESGCIDBA_Website/`
   - Custom domain (if configured): See CNAME file

## 📝 Content Management

### Adding New Content

1. **Create Markdown file:**
   - Write content in `thesis_md/[phase_folder]/your_file.md`
   - Include YAML frontmatter for metadata

2. **Convert to HTML:**
   - Use the `markdown_to_html.prompt.md` guide
   - Output goes to corresponding `thesis_html/[phase_folder]/`

3. **Update navigation:**
   - Table of contents updates automatically via JavaScript
   - Ensure proper file naming for correct ordering

### File Naming Convention

Use descriptive, sequential filenames:
- `01_introduction.md`
- `02_methodology_overview.md`
- `03_findings_summary.md`

This ensures proper ordering in navigation and TOC.

## 🎨 Design Philosophy

### Academic Aesthetic
- Clean, professional layout
- Serif fonts for readability (body text)
- Sans-serif for navigation and headings
- Neutral color palette (navy, gray, off-white)
- Generous whitespace for focus

### Responsive Design
- Mobile-friendly navigation
- Collapsible sidebar on small screens
- Readable on all devices

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

## 🛠️ Technology Stack

**Frontend:**
- HTML5 - Semantic markup
- CSS3 - Modern styling (no frameworks)
- Vanilla JavaScript - Dynamic functionality

**Hosting:**
- GitHub Pages - Free static hosting
- Custom domain support via CNAME

**Development Tools:**
- Git - Version control
- VS Code - Recommended editor
- GitHub Copilot - AI-assisted development

**No Build Process:**
- No Jekyll, Hugo, or other static site generators
- No npm, webpack, or build tools
- Direct deployment from repository

## 📚 Documentation

### Prompt Files

The `.github/prompts/` directory contains reusable templates:

- **copilot-instructions.md**: Configures AI assistant behavior
- **devops.prompt.md**: Repository setup and deployment
- **markdown_to_html.prompt.md**: Content conversion process
- **website_builder.prompt.md**: Website structure and design

These prompts can be used with GitHub Copilot or other AI assistants to maintain consistency and automate repetitive tasks.

## 🔧 Maintenance

### Regular Tasks

- **Content Updates**: Add new Markdown files as research progresses
- **HTML Generation**: Convert Markdown to HTML regularly
- **Git Commits**: Commit changes with clear messages
- **Backup**: Repository is automatically backed up on GitHub

### Keeping It Simple

This setup intentionally avoids:
- Complex build processes
- Package managers and dependencies
- Static site generators requiring configuration
- Server-side processing

All changes are visible immediately after pushing to GitHub.

## 📋 Workflow Summary

```
Write Research (Markdown) → Convert to HTML → Git Commit → Push to GitHub → Live on Website
```

Simple, straightforward, focused on research, not tech.

## 🤝 Contributing

This is a personal doctoral thesis project. External contributions are not expected, but if you're a colleague or supervisor providing feedback:

1. Create an issue for suggestions
2. Or contact directly via email

## 📄 License

This thesis work is the intellectual property of the author. All rights reserved.

For academic citation purposes, please contact the author.

## 📧 Contact

**Doctoral Candidate**: Clarence Wong
**Institution**: ESGCI (École Supérieure de Gestion et Commerce International)
**Program**: Doctor of Business Administration (DBA)
**Email**: clarence18.aina@gmail.com

---

**Last Updated**: October 2025
**Status**: Active Development
