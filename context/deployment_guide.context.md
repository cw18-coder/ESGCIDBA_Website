# Deployment Guide - DBA Thesis Website

## Quick Deployment Checklist

- [ ] All content HTML files added to appropriate phase folders
- [ ] Manifest files generated (run `npm run generate-manifests`)
- [ ] Tested locally (website works correctly)
- [ ] All changes committed to git
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled in repository settings

## Deployment Methods

### Method 1: GitHub Pages (Recommended)

GitHub Pages is the recommended deployment method as it's free, automatic, and works seamlessly with your repository.

#### Initial Setup

1. **Ensure GitHub Pages is enabled:**
   ```bash
   # Go to your repository on GitHub
   # Navigate to: Settings > Pages
   # Source: Deploy from a branch
   # Branch: main (root directory)
   # Click Save
   ```

2. **Configure custom domain (optional):**
   - Your CNAME file already exists with: `esgci-dba-thesis.clarencew.dev`
   - Add this custom domain in GitHub Pages settings
   - Configure DNS with your domain provider:
     ```
     Type: CNAME
     Name: esgci-dba-thesis (or your subdomain)
     Value: cw18-coder.github.io (or your GitHub Pages domain)
     ```

#### Deploying Updates

Every time you want to deploy changes:

```bash
# 1. Add new content to thesis_html folders
# 2. Generate manifest files
npm run generate-manifests

# 3. Test locally
npm run serve
# Visit http://localhost:8000 and verify everything works

# 4. Commit changes
git add .
git commit -m "Add new content: [describe your changes]"

# 5. Push to GitHub
git push origin main

# 6. Wait 1-2 minutes for GitHub Pages to rebuild
# 7. Visit your site to verify deployment
```

#### Checking Deployment Status

- Go to repository on GitHub
- Click on "Actions" tab
- View the "pages build and deployment" workflow
- Green checkmark = successful deployment
- Red X = deployment failed (check logs)

### Method 2: Local Testing Only

For development and testing without deploying:

```bash
# Option A: Python
python -m http.server 8000

# Option B: Node.js
npm run serve-alt

# Option C: Windows batch script
start-server.bat

# Option D: VS Code Live Server
# Right-click index.html > Open with Live Server
```

### Method 3: Other Hosting Providers

You can also deploy to other static hosting providers:

#### Netlify

1. Connect your GitHub repository to Netlify
2. Build settings:
   - Build command: `npm run generate-manifests` (optional)
   - Publish directory: `/` (root)
3. Deploy

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link to your project
```

#### Azure Static Web Apps

```bash
# Use Azure Portal or CLI to create Static Web App
# Connect to your GitHub repository
# No build command needed (static HTML)
# Root path: /
```

## Pre-Deployment Checklist

### Content Checklist

- [ ] All HTML files have proper structure (html, head, body, article tags)
- [ ] All images have alt text for accessibility
- [ ] Internal links use correct paths
- [ ] No broken links
- [ ] Proper heading hierarchy (h1, h2, h3, etc.)
- [ ] Citations and references formatted correctly

### Technical Checklist

- [ ] Manifest files generated and up-to-date
- [ ] All JavaScript files loading correctly
- [ ] All CSS files loading correctly
- [ ] No console errors in browser (press F12)
- [ ] Mobile responsive design tested
- [ ] Print styles working (try Print Preview)
- [ ] All phases accessible from navigation

### Testing Checklist

Test these scenarios before deploying:

1. **Homepage loads correctly**
   - All phase cards visible
   - Navigation menu works
   - Links to phases work

2. **Phase pages load correctly**
   - Breadcrumb shows correct path
   - Sidebar TOC generates properly
   - Content displays correctly

3. **Navigation works**
   - Previous/Next buttons work
   - Sidebar links work
   - Mobile menu toggles correctly

4. **Content displays properly**
   - Formatting is correct
   - Images load
   - Tables render properly
   - Code blocks formatted

5. **Mobile responsive**
   - Test on phone viewport (F12 > Device Toolbar)
   - Navigation collapses to hamburger menu
   - Content is readable
   - Buttons are tappable

## Common Deployment Issues

### Issue: Changes Not Appearing

**Solution:**
```bash
# Hard refresh browser cache
# Windows/Linux: Ctrl + Shift + R
# Mac: Cmd + Shift + R

# Or clear browser cache completely
# Chrome: Settings > Privacy > Clear browsing data
```

### Issue: 404 Not Found Errors

**Possible causes:**
- Incorrect file paths
- Case sensitivity (GitHub Pages is case-sensitive)
- Missing files

**Solution:**
```bash
# Check file exists
dir thesis_html\1_idea_generation\

# Verify manifest.json includes the file
cat thesis_html\1_idea_generation\manifest.json

# Regenerate manifests
npm run generate-manifests
```

### Issue: Manifest Files Not Loading

**Solution:**
```bash
# Ensure manifest.json files exist in all phase folders
# Regenerate all manifests
npm run generate-manifests

# Check they were created
dir thesis_html\*\manifest.json
```

### Issue: JavaScript Not Working

**Solution:**
1. Open browser console (F12)
2. Look for error messages
3. Check all .js files are in the js/ folder
4. Verify paths in HTML files are correct
5. Test locally before deploying

### Issue: Custom Domain Not Working

**Solution:**
1. Verify CNAME file exists in root directory
2. Check DNS settings with your domain provider
3. Allow 24-48 hours for DNS propagation
4. Verify in GitHub Settings > Pages that custom domain is configured

## Automated Deployment with GitHub Actions

For advanced users, you can automate manifest generation:

Create `.github/workflows/deploy.yml`:

```yaml
name: Generate Manifests and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Generate Manifests
        run: |
          npm install
          npm run generate-manifests
      
      - name: Commit Manifests
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add thesis_html/*/manifest.json
          git diff --quiet && git diff --staged --quiet || git commit -m "Auto-generate manifests"
          git push
```

## Performance Optimization

### Image Optimization

Before adding images:
```bash
# Compress images
# Use tools like TinyPNG, ImageOptim, or Squoosh

# Recommended formats:
# - Photos: JPEG (optimized)
# - Graphics/logos: PNG or SVG
# - Maximum width: 1200px for full-width images
```

### Loading Speed

- Keep HTML files under 500KB when possible
- Use external links for very large resources
- Consider lazy loading for images (add loading="lazy" attribute)

## Backup Strategy

### Regular Backups

```bash
# GitHub is your primary backup
# But consider additional backups:

# 1. Clone to another location
git clone https://github.com/cw18-coder/ESGCIDBA_Website.git backup-location

# 2. Export to ZIP periodically
# GitHub: Code > Download ZIP

# 3. Sync to cloud storage (OneDrive, Google Drive, etc.)
```

## Rollback Procedure

If something goes wrong:

```bash
# View commit history
git log --oneline

# Rollback to previous commit
git revert HEAD

# Or reset to specific commit (use with caution)
git reset --hard <commit-hash>
git push --force
```

## Monitoring

### Check Website Health

1. **Visit website regularly**
   - Test all major features
   - Check for broken links
   - Verify new content appears

2. **Monitor GitHub Actions**
   - Check for failed builds
   - Review deployment logs

3. **Check Analytics (optional)**
   - Add Google Analytics if desired
   - Monitor visitor patterns

## Support

If you encounter issues:

1. Check this guide first
2. Review error messages in browser console
3. Check GitHub Actions logs
4. Verify all files are committed and pushed
5. Test locally to isolate the problem

## Summary: Quick Deploy

```bash
# The essential deployment workflow:
npm run generate-manifests
git add .
git commit -m "Your message here"
git push origin main
# Wait 1-2 minutes, then visit your website
```

---

**Remember:** Always test locally before deploying to production! 🚀
