// toc-generator.js - Table of Contents Generation

/**
 * Configuration for thesis HTML files
 */
const TOC_CONFIG = {
    baseFolder: 'thesis_html',
    phases: [
        { number: '0', folder: '0_reflection_journal', name: 'Reflection Journal' },
        { number: '1', folder: '1_idea_generation', name: 'Idea Generation' },
        { number: '2', folder: '2_proposal', name: 'Proposal' },
        { number: '3', folder: '3_literature_review', name: 'Literature Review' },
        { number: '4', folder: '4_theoretical_framework', name: 'Theoretical Framework' },
        { number: '5', folder: '5_design', name: 'Design' },
        { number: '6', folder: '6_data_collection', name: 'Data Collection' },
        { number: '7', folder: '7_data_analysis', name: 'Data Analysis' },
        { number: '8', folder: '8_report', name: 'Report' }
    ]
};

/**
 * Get list of HTML files for a phase
 * Since we can't read the filesystem directly from the browser,
 * we'll need to maintain a manifest or discover files dynamically
 */
async function getPhaseFiles(phaseFolder) {
    // In a real implementation, you would either:
    // 1. Generate a manifest file (JSON) during build time listing all HTML files
    // 2. Use a server-side endpoint to list files
    // 3. Maintain a manual index
    
    // For now, we'll try to load a manifest file
    try {
        const response = await fetch(`${TOC_CONFIG.baseFolder}/${phaseFolder}/manifest.json`);
        if (response.ok) {
            const manifest = await response.json();
            return manifest.files || [];
        }
    } catch (error) {
        console.log(`No manifest found for ${phaseFolder}, checking for index file`);
    }
    
    // Fallback: try to load an index.html if it exists
    try {
        const response = await fetch(`${TOC_CONFIG.baseFolder}/${phaseFolder}/index.html`);
        if (response.ok) {
            return [{
                filename: 'index.html',
                title: 'Overview',
                path: `${TOC_CONFIG.baseFolder}/${phaseFolder}/index.html`
            }];
        }
    } catch (error) {
        console.log(`No files found for ${phaseFolder}`);
    }
    
    return [];
}

/**
 * Group documents by year and month
 */
function groupDocumentsByDate(documents) {
    const grouped = {};
    
    documents.forEach(doc => {
        if (doc.isPhaseOverview) {
            // Phase overview is handled separately
            return;
        }
        
        if (!doc.date) {
            console.warn(`Document ${doc.file} missing date field`);
            return;
        }
        
        const date = new Date(doc.date);
        const year = date.getFullYear();
        const month = date.toLocaleString('en-US', { month: 'long' });
        
        if (!grouped[year]) {
            grouped[year] = {};
        }
        
        if (!grouped[year][month]) {
            grouped[year][month] = [];
        }
        
        grouped[year][month].push(doc);
    });
    
    return grouped;
}

/**
 * Get current year and month
 */
function getCurrentYearMonth() {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.toLocaleString('en-US', { month: 'long' })
    };
}

/**
 * Create collapsible tree node
 */
function createCollapsibleNode(label, level, isExpanded = false) {
    const li = document.createElement('li');
    li.className = `toc-node toc-level-${level}`;
    
    const toggle = document.createElement('span');
    toggle.className = 'toc-toggle';
    toggle.innerHTML = isExpanded ? '▼' : '▶';
    toggle.setAttribute('aria-label', isExpanded ? 'Collapse' : 'Expand');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    
    const labelSpan = document.createElement('span');
    labelSpan.className = 'toc-label';
    labelSpan.textContent = label;
    
    const header = document.createElement('div');
    header.className = 'toc-node-header';
    header.appendChild(toggle);
    header.appendChild(labelSpan);
    
    const childContainer = document.createElement('ul');
    childContainer.className = 'toc-children';
    childContainer.style.display = isExpanded ? 'block' : 'none';
    
    li.appendChild(header);
    li.appendChild(childContainer);
    
    // Toggle functionality
    const toggleHandler = () => {
        const isCurrentlyExpanded = childContainer.style.display === 'block';
        childContainer.style.display = isCurrentlyExpanded ? 'none' : 'block';
        toggle.innerHTML = isCurrentlyExpanded ? '▶' : '▼';
        toggle.setAttribute('aria-label', isCurrentlyExpanded ? 'Expand' : 'Collapse');
        
        // Save state to localStorage
        const stateKey = `toc-${level}-${label}`;
        localStorage.setItem(stateKey, !isCurrentlyExpanded);
    };
    
    toggle.addEventListener('click', toggleHandler);
    toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleHandler();
        }
    });
    
    return { node: li, childContainer };
}

/**
 * Create document link
 */
function createDocumentLink(doc, phaseNumber, isCurrent = false) {
    const li = document.createElement('li');
    li.className = 'toc-document';
    
    const a = document.createElement('a');
    a.href = `?phase=${phaseNumber}&file=${doc.file}`;
    a.textContent = doc.title || formatFilename(doc.file);
    a.dataset.filepath = doc.file;
    
    if (isCurrent) {
        a.classList.add('active');
    }
    
    li.appendChild(a);
    return li;
}

/**
 * Generate table of contents for a phase
 */
async function generateTOC(phaseNumber) {
    const tocContainer = document.getElementById('tableOfContents');
    if (!tocContainer) return;
    
    const phaseInfo = TOC_CONFIG.phases.find(p => p.number === phaseNumber);
    if (!phaseInfo) {
        tocContainer.innerHTML = '<p class="empty-message">Invalid phase</p>';
        return;
    }
    
    // Update sidebar title
    const sidebarTitle = document.getElementById('sidebarTitle');
    if (sidebarTitle) {
        sidebarTitle.textContent = phaseInfo.name;
    }
    
    // Get manifest for this phase
    let manifest;
    try {
        const response = await fetch(`${TOC_CONFIG.baseFolder}/${phaseInfo.folder}/manifest.json`);
        if (response.ok) {
            manifest = await response.json();
        } else {
            throw new Error('Manifest not found');
        }
    } catch (error) {
        tocContainer.innerHTML = `
            <div class="empty-message">
                <p>No content available yet for this phase.</p>
                <p><small>Content will be added as research progresses.</small></p>
            </div>
        `;
        return;
    }
    
    const documents = manifest.documents || [];
    if (documents.length === 0) {
        tocContainer.innerHTML = `
            <div class="empty-message">
                <p>No documents found for this phase.</p>
            </div>
        `;
        return;
    }
    
    // Get current file from URL
    const currentFile = new URLSearchParams(window.location.search).get('file');
    
    // Create main TOC list
    const mainList = document.createElement('ul');
    mainList.className = 'toc-root';
    
    // 1. Add Phase Overview (always at top, always visible)
    const phaseOverview = documents.find(doc => doc.isPhaseOverview);
    if (phaseOverview) {
        const overviewLink = createDocumentLink(
            phaseOverview,
            phaseNumber,
            currentFile === phaseOverview.file || !currentFile
        );
        overviewLink.classList.add('toc-phase-overview');
        mainList.appendChild(overviewLink);
    }
    
    // 2. Group remaining documents by date
    const groupedDocs = groupDocumentsByDate(documents);
    const currentYearMonth = getCurrentYearMonth();
    
    // Sort years (descending - newest first)
    const years = Object.keys(groupedDocs).sort((a, b) => b - a);
    
    years.forEach(year => {
        const isCurrentYear = parseInt(year) === currentYearMonth.year;
        
        // Check localStorage for saved state
        const yearStateKey = `toc-year-${year}`;
        const savedYearState = localStorage.getItem(yearStateKey);
        const shouldExpandYear = savedYearState !== null ? savedYearState === 'true' : isCurrentYear;
        
        // Create year node
        const { node: yearNode, childContainer: yearContainer } = createCollapsibleNode(
            year,
            'year',
            shouldExpandYear
        );
        
        // Sort months chronologically
        const months = Object.keys(groupedDocs[year]);
        const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];
        months.sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
        
        months.forEach(month => {
            const isCurrentMonth = isCurrentYear && month === currentYearMonth.month;
            
            // Check localStorage for saved state
            const monthStateKey = `toc-month-${year}-${month}`;
            const savedMonthState = localStorage.getItem(monthStateKey);
            const shouldExpandMonth = savedMonthState !== null ? savedMonthState === 'true' : isCurrentMonth;
            
            // Create month node
            const { node: monthNode, childContainer: monthContainer } = createCollapsibleNode(
                month,
                'month',
                shouldExpandMonth
            );
            
            // Add documents for this month
            const docsInMonth = groupedDocs[year][month];
            docsInMonth.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date within month
            
            docsInMonth.forEach(doc => {
                const docLink = createDocumentLink(
                    doc,
                    phaseNumber,
                    currentFile === doc.file
                );
                monthContainer.appendChild(docLink);
            });
            
            yearContainer.appendChild(monthNode);
        });
        
        mainList.appendChild(yearNode);
    });
    
    tocContainer.innerHTML = '';
    tocContainer.appendChild(mainList);
}

/**
 * Format filename for display
 */
function formatFilename(filename) {
    return filename
        .replace('.html', '')
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Initialize sidebar toggle for mobile
 */
function initSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarContent = document.querySelector('.sidebar-content');
    
    if (sidebarToggle && sidebarContent) {
        sidebarToggle.addEventListener('click', function() {
            sidebarContent.classList.toggle('active');
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initSidebarToggle();
});

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateTOC,
        getPhaseFiles,
        formatFilename,
        TOC_CONFIG
    };
}
