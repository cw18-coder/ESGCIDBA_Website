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
    
    // Get files for this phase
    const files = await getPhaseFiles(phaseInfo.folder);
    
    if (files.length === 0) {
        tocContainer.innerHTML = `
            <div class="empty-message">
                <p>No content available yet for this phase.</p>
                <p><small>Content will be added as research progresses.</small></p>
            </div>
        `;
        return;
    }
    
    // Generate TOC list
    const ul = document.createElement('ul');
    
    files.forEach((file, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = `?phase=${phaseNumber}&file=${file.filename}`;
        a.textContent = file.title || formatFilename(file.filename);
        a.dataset.filepath = file.path;
        a.dataset.index = index;
        
        // Highlight current file
        const currentFile = new URLSearchParams(window.location.search).get('file');
        if (currentFile === file.filename || (index === 0 && !currentFile)) {
            a.classList.add('active');
        }
        
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    tocContainer.innerHTML = '';
    tocContainer.appendChild(ul);
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
