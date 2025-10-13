# DevOps Setup Prompt - Doctoral Thesis GitHub Pages

## Purpose
Set up a complete Git repository with GitHub Pages hosting for the doctoral thesis website. This setup prioritizes simplicity and ease of maintenance using only HTML, CSS, and JavaScript (no static site generators like Jekyll), allowing the researcher to focus on their doctoral work rather than complex build systems.

## Project Overview

This is a doctoral thesis website with:
- **Content Structure**: Parallel folders `thesis_md/` (source Markdown) and `thesis_html/` (generated HTML)
- **8 Research Phases**: From Phase 0 (Reflection Journal) to Phase 8 (Final Report)
- **Academic Focus**: Professional scholarly presentation
- **Technology Stack**: Plain HTML/CSS/JavaScript only
- **Hosting**: GitHub Pages (no build process required)

## Repository Setup

### Step 1: Initialize Git Repository

If starting from scratch or re-initializing:

```bash
# Navigate to project directory
cd c:\Users\clwong\OneDrive\Documents\Learning\ESGCI_DBA\ESGCIDBA_Website

# Initialize git repository (if not already initialized)
git init

# Set default branch to main
git branch -M main
```

### Step 2: Create .gitignore File

Create `.gitignore` in the root directory to exclude unnecessary files:

```gitignore
# Operating System Files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
Desktop.ini

# Editor and IDE Files
.vscode/
.idea/
*.swp
*.swo
*~
.project
.settings/
.classpath

# Node.js (if any scripts are added later)
node_modules/
npm-debug.log
yarn-error.log
package-lock.json

# Temporary Files
*.tmp
*.temp
*.log
*.cache

# Build Output (if any build tools are added later)
dist/
build/
.cache/

# Environment Variables
.env
.env.local
.env.*.local

# Backup Files
*.bak
*.backup
*~

# Personal Notes (not to be committed)
PRIVATE_NOTES.md
TODO_PERSONAL.md

# Optional: Keep .gitkeep files but ignore other empty markers
# .gitkeep files are intentionally tracked to preserve folder structure
```

### Step 3: Create README.md

Create a comprehensive `README.md` in the root directory:

```markdown
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

**Doctoral Candidate**: [Your Name]
**Institution**: ESGCI (École Supérieure de Gestion et Commerce International)
**Program**: Doctor of Business Administration (DBA)
**Email**: [Your Email]

---

**Last Updated**: October 2025
**Status**: Active Development
```

### Step 4: Create CNAME File (if using custom domain)

If you have a custom domain, create `CNAME` file in root:

```
yourdomain.com
```

Or subdomain:
```
thesis.yourdomain.com
```

**Note**: If not using a custom domain, you can skip this or remove the existing CNAME file.

### Step 5: Directory Structure Setup

Ensure these directories exist (they should already have .gitkeep files):

```bash
# These should already exist from previous setup
thesis_md/0_reflection_journal/
thesis_md/1_idea_generation/
thesis_md/2_proposal/
thesis_md/3_literature_review/
thesis_md/4_theoretical_framework/
thesis_md/5_design/
thesis_md/6_data_collection/
thesis_md/7_data_analysis/
thesis_md/8_report/

thesis_html/0_reflection_journal/
thesis_html/1_idea_generation/
thesis_html/2_proposal/
thesis_html/3_literature_review/
thesis_html/4_theoretical_framework/
thesis_html/5_design/
thesis_html/6_data_collection/
thesis_html/7_data_analysis/
thesis_html/8_report/
```

Create additional directories for website assets:

```bash
mkdir css
mkdir js
mkdir assets
mkdir assets\images
mkdir assets\fonts
```

### Step 6: Initial Commit

Stage and commit all files:

```bash
# Add all files
git add .

# Commit with meaningful message
git commit -m "Initial commit: Set up doctoral thesis website structure"
```

## GitHub Setup

### Step 7: Create GitHub Repository

1. **On GitHub.com:**
   - Click "New Repository"
   - Name: `ESGCIDBA_Website` (or preferred name)
   - Description: "Doctoral Thesis Website - DBA Research Journey"
   - Visibility: Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

2. **Connect local repository to GitHub:**
   ```bash
   # Add remote origin
   git remote add origin https://github.com/[your-username]/ESGCIDBA_Website.git
   
   # Verify remote
   git remote -v
   
   # Push to GitHub
   git push -u origin main
   ```

### Step 8: Configure GitHub Pages

1. **Navigate to repository Settings:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in left sidebar

2. **Configure Pages:**
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
   - Click "Save"

3. **Wait for deployment:**
   - GitHub will build and deploy your site (usually 1-2 minutes)
   - You'll see a message: "Your site is live at [URL]"

4. **Verify deployment:**
   - Visit the provided URL
   - Check that your homepage loads correctly

### Step 9: Custom Domain Setup (Optional)

If using a custom domain:

1. **Add CNAME record with your domain provider:**
   - Type: `CNAME`
   - Name: `@` (for root domain) or `thesis` (for subdomain)
   - Value: `[your-username].github.io`
   - TTL: 3600 (or default)

2. **Configure in GitHub:**
   - In Pages settings, enter your custom domain
   - Check "Enforce HTTPS"
   - Wait for DNS propagation (can take up to 24 hours)

## Maintenance Workflow

### Daily/Regular Research Work

```bash
# 1. Pull latest changes (if working from multiple locations)
git pull origin main

# 2. Write research content in thesis_md/ folders
# [Edit your Markdown files]

# 3. Convert Markdown to HTML using the conversion prompt
# [Use markdown_to_html.prompt.md]

# 4. Review changes locally
# [Open index.html or specific pages in browser]

# 5. Stage changes
git add .

# 6. Commit with descriptive message
git commit -m "Add literature review: systematic review methodology"

# 7. Push to GitHub (automatically deploys)
git push origin main

# 8. Verify on live site (wait ~2 minutes for GitHub Pages to update)
```

### Commit Message Guidelines

Use clear, descriptive commit messages:

**Good examples:**
- `Add reflection journal entry: research question refinement`
- `Update literature review: add thematic analysis section`
- `Fix navigation bug on mobile devices`
- `Improve CSS: enhance table styling for academic content`

**Bad examples:**
- `Update`
- `Changes`
- `Fix bug`

### Branch Strategy (Simple Approach)

For a solo researcher, a simple strategy works best:

**Single Branch (main):**
- Work directly on `main` branch
- Commit frequently with clear messages
- Push when ready to deploy

**Optional: Draft Branch (if needed):**
```bash
# Create draft branch for experimental work
git checkout -b draft

# Work on draft content
# [Make changes]

# Commit to draft
git add .
git commit -m "Draft: exploring alternative theoretical framework"

# When ready, merge to main
git checkout main
git merge draft
git push origin main

# Delete draft branch
git branch -d draft
```

## Backup and Recovery

### Automatic Backups
- Every push to GitHub creates a backup
- GitHub keeps full history of all changes
- Can restore any previous version

### Manual Backup
```bash
# Create a backup copy (optional extra safety)
# Copy entire folder to backup location periodically
```

### Restore Previous Version
```bash
# View commit history
git log --oneline

# Restore specific file to previous version
git checkout [commit-hash] -- path/to/file

# Or revert entire repository to previous state
git reset --hard [commit-hash]
git push origin main --force  # Use with caution!
```

## Troubleshooting

### Site Not Updating
1. Check GitHub Actions tab for deployment status
2. Verify you pushed to `main` branch
3. Clear browser cache and hard refresh (Ctrl+F5)
4. Wait 2-3 minutes for GitHub Pages to rebuild

### Custom Domain Not Working
1. Verify CNAME file exists in root directory
2. Check DNS settings with domain provider
3. Allow up to 24 hours for DNS propagation
4. Verify HTTPS is enforced in GitHub Pages settings

### Files Not Appearing
1. Check .gitignore - ensure files aren't excluded
2. Verify files are staged: `git status`
3. Check if files are in correct folders
4. Ensure proper file extensions (.html not .htm)

### Navigation Not Working
1. Verify JavaScript files are properly linked in HTML
2. Check browser console for errors (F12)
3. Ensure file paths are correct (case-sensitive on GitHub Pages)
4. Test locally first before pushing

## Best Practices

### For Research Focus

1. **Keep it Simple**: Don't add unnecessary complexity
2. **Regular Commits**: Commit after each writing session
3. **Clear Organization**: Use consistent file naming
4. **Document Progress**: Use commit messages to track research journey
5. **Focus on Content**: Let the simple tech stack handle itself

### For Version Control

1. **Commit Often**: Small, frequent commits are better than large ones
2. **Meaningful Messages**: Describe what and why, not how
3. **Pull Before Push**: If working from multiple devices
4. **Review Changes**: Use `git status` and `git diff` before committing

### For Website Maintenance

1. **Test Locally**: Always preview changes before pushing
2. **Consistent Styling**: Follow established CSS patterns
3. **Responsive Check**: Test on mobile before deploying
4. **Validate HTML**: Ensure proper markup structure
5. **Optimize Images**: Compress images before adding to assets/

## Security Considerations

### What to Commit
✅ HTML, CSS, JavaScript files
✅ Markdown source files
✅ Images and assets for website
✅ Configuration files (.github/)
✅ README and documentation

### What NOT to Commit
❌ Personal notes not for public view
❌ Sensitive research data (if any)
❌ Email addresses or personal contact info
❌ API keys or credentials
❌ Large binary files (use Git LFS if needed)

### Repository Visibility

**Public Repository:**
- ✅ Good for sharing research progress
- ✅ Demonstrates scholarly work
- ✅ Easy collaboration with supervisors
- ❌ Anyone can view content

**Private Repository:**
- ✅ Keep research confidential until publication
- ✅ Control who has access
- ✅ Can make public later
- ❌ Requires paid GitHub plan for GitHub Pages (or use free alternatives)

## Resources

### GitHub Documentation
- [GitHub Pages Basics](https://docs.github.com/en/pages)
- [Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

### HTML/CSS/JavaScript
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML5 Semantic Elements](https://www.w3.org/TR/html5/)
- [CSS Grid and Flexbox](https://css-tricks.com/)

### Academic Web Design
- [Web Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Typography for the Web](https://practicaltypography.com/)

## Summary Checklist

Use this checklist when setting up from scratch:

- [ ] Initialize Git repository
- [ ] Create .gitignore file
- [ ] Create comprehensive README.md
- [ ] Set up directory structure (thesis_md/, thesis_html/, css/, js/, assets/)
- [ ] Add .gitkeep files to empty directories
- [ ] Create initial index.html
- [ ] Make initial commit
- [ ] Create GitHub repository
- [ ] Connect local to remote repository
- [ ] Push to GitHub
- [ ] Enable GitHub Pages in repository settings
- [ ] Configure custom domain (if applicable)
- [ ] Verify site is live
- [ ] Set up regular backup routine
- [ ] Document workflow in README

---

**Note**: This setup is designed for simplicity and focus on research. If requirements become more complex in the future, this foundation provides a solid base for adding build tools or static site generators later. For now, keep it simple and focus on the doctoral work!