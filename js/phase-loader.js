// phase-loader.js - Dynamic content loading for phase pages

// Note: TOC_CONFIG is defined in toc-generator.js which loads before this script

document.addEventListener('DOMContentLoaded', function() {
    initPhasePage();
});

/**
 * Initialize phase page
 */
async function initPhasePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const phaseNumber = urlParams.get('phase');
    const filename = urlParams.get('file');
    
    if (!phaseNumber) {
        showError('No phase specified');
        return;
    }
    
    // Get phase info
    const phaseInfo = getPhaseInfo(phaseNumber);
    if (!phaseInfo) {
        showError('Invalid phase number');
        return;
    }
    
    // Update page title
    document.title = `${phaseInfo.name} - DBA Thesis`;
    
    // Update breadcrumb
    createBreadcrumb([
        { text: 'Home', href: 'index.html' },
        { text: phaseInfo.name, href: `phase.html?phase=${phaseNumber}` }
    ]);
    
    // Generate table of contents
    await generateTOC(phaseNumber);
    
    // Load content
    if (filename) {
        await loadContent(phaseNumber, filename);
    } else {
        showPhaseIntroduction(phaseNumber, phaseInfo);
    }
    
    // Setup page navigation
    setupPageNavigation(phaseNumber);
}

/**
 * Load content from HTML file
 */
async function loadContent(phaseNumber, filename) {
    const contentArea = document.getElementById('contentArea');
    const phaseInfo = getPhaseInfo(phaseNumber);
    
    if (!phaseInfo) return;
    
    const filepath = `thesis_html/${phaseInfo.folder}/${filename}`;
    
    try {
        const response = await fetch(filepath);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const html = await response.text();
        
        // Parse HTML to extract body content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Get main content (try to find article, main, or body content)
        let content = doc.querySelector('article') || 
                     doc.querySelector('main') || 
                     doc.querySelector('.content') ||
                     doc.body;
        
        if (content) {
            contentArea.innerHTML = content.innerHTML;
            
            // Update breadcrumb with current document
            const title = doc.querySelector('title')?.textContent || 
                         doc.querySelector('h1')?.textContent || 
                         formatFilename(filename);
            
            createBreadcrumb([
                { text: 'Home', href: 'index.html' },
                { text: phaseInfo.name, href: `phase.html?phase=${phaseNumber}` },
                { text: title }
            ]);
        } else {
            contentArea.innerHTML = html;
        }
        
        // Scroll to top
        scrollToTop();
        
        // Fix relative links in loaded content
        fixRelativeLinks(contentArea, phaseInfo.folder);
        
    } catch (error) {
        console.error('Error loading content:', error);
        showError(`Could not load content: ${filename}`);
    }
}

/**
 * Fix relative links in loaded content
 */
function fixRelativeLinks(container, phaseFolder) {
    const links = container.querySelectorAll('a[href]');
    const images = container.querySelectorAll('img[src]');
    
    const basePath = `thesis_html/${phaseFolder}/`;
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('/')) {
            link.setAttribute('href', basePath + href);
        }
    });
    
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('/')) {
            img.setAttribute('src', basePath + src);
        }
    });
}

/**
 * Show phase introduction when no specific file is selected
 */
function showPhaseIntroduction(phaseNumber, phaseInfo) {
    const contentArea = document.getElementById('contentArea');
    
    const descriptions = {
        '0': 'This section contains reflections, insights, and learning documented throughout the research journey. It serves as a personal journal of the doctoral experience.',
        '1': 'The idea generation phase explores potential research topics, identifies areas of interest, and begins to shape the research focus through brainstorming and preliminary investigation.',
        '2': 'The proposal phase presents the formal research proposal, including the research question, objectives, methodology, and expected contributions to knowledge.',
        '3': 'A comprehensive review of existing literature, identifying key theories, methodologies, and findings that inform and contextualize this research.',
        '4': 'This phase develops the theoretical framework that grounds the research, establishing the conceptual foundations and explaining the theoretical lens through which the research is conducted.',
        '5': 'The design phase details the research methodology, including the philosophical approach, research design, data collection methods, and analytical techniques.',
        '6': 'Documentation of the data collection process, including participant recruitment, interview protocols, survey administration, and other data gathering activities.',
        '7': 'This phase presents the analysis of collected data, identifying patterns, themes, and insights that emerge from the research.',
        '8': 'The final report synthesizes all phases of the research into a comprehensive thesis document, presenting findings, contributions, and implications.'
    };
    
    contentArea.innerHTML = `
        <div class="phase-introduction">
            <h1>${phaseInfo.name}</h1>
            <p class="phase-description">${descriptions[phaseNumber] || 'This phase of the research journey.'}</p>
        </div>
        <div class="empty-state">
            <p>Click "Next" below to view the phase overview, or select a specific document from the table of contents.</p>
        </div>
    `;
}

/**
 * Show error message
 */
function showError(message) {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div class="empty-state">
            <h2>Error</h2>
            <p>${message}</p>
            <p><a href="index.html">Return to home page</a></p>
        </div>
    `;
}

/**
 * Setup previous/next page navigation
 */
async function setupPageNavigation(phaseNumber) {
    const urlParams = new URLSearchParams(window.location.search);
    const currentFile = urlParams.get('file');
    
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const phaseInfo = getPhaseInfo(phaseNumber);
    
    // Get all files including the phase overview
    const allFiles = await getAllPhaseFiles(phaseInfo.folder);
    
    if (!currentFile) {
        // On phase landing page (no file parameter)
        // Next button should go to the phase overview (index.html)
        const overviewFile = allFiles.find(f => f.isPhaseOverview);
        if (overviewFile) {
            nextButton.style.display = 'flex';
            nextButton.onclick = () => {
                window.location.href = `phase.html?phase=${phaseNumber}&file=${overviewFile.filename}`;
            };
        }
        // No previous button on landing page
        prevButton.style.display = 'none';
        return;
    }
    
    // Find current file in all files list
    const currentIndex = allFiles.findIndex(f => f.filename === currentFile);
    
    if (currentIndex === -1) return;
    
    const currentFileData = allFiles[currentIndex];
    
    // Setup previous button
    if (currentFileData.isPhaseOverview) {
        // On phase overview, previous goes back to phase landing
        prevButton.style.display = 'flex';
        prevButton.onclick = () => {
            window.location.href = `phase.html?phase=${phaseNumber}`;
        };
    } else if (currentIndex > 0) {
        // On a regular file, previous goes to the previous file (could be overview or another entry)
        prevButton.style.display = 'flex';
        prevButton.onclick = () => {
            window.location.href = `phase.html?phase=${phaseNumber}&file=${allFiles[currentIndex - 1].filename}`;
        };
    } else {
        // This shouldn't happen if overview is first, but hide button just in case
        prevButton.style.display = 'none';
    }
    
    // Setup next button
    if (currentIndex < allFiles.length - 1) {
        // There's a next file in this phase
        nextButton.style.display = 'flex';
        nextButton.onclick = () => {
            window.location.href = `phase.html?phase=${phaseNumber}&file=${allFiles[currentIndex + 1].filename}`;
        };
    } else {
        // Last file in phase, next goes to next phase landing if it exists
        const nextPhaseNumber = (parseInt(phaseNumber) + 1).toString();
        if (parseInt(nextPhaseNumber) <= 8) {
            nextButton.style.display = 'flex';
            nextButton.onclick = () => {
                window.location.href = `phase.html?phase=${nextPhaseNumber}`;
            };
        } else {
            // No next phase
            nextButton.style.display = 'none';
        }
    }
}

/**
 * Get all phase files including the phase overview
 * This is used for navigation to include index.html in the sequence
 */
async function getAllPhaseFiles(phaseFolder) {
    try {
        const response = await fetch(`${TOC_CONFIG.baseFolder}/${phaseFolder}/manifest.json`);
        if (response.ok) {
            const manifest = await response.json();
            const docs = manifest.documents || manifest.files || [];
            
            // Return all files including phase overview, preserving order
            // Phase overview should be first
            const files = docs.map(doc => ({
                filename: doc.file || doc.filename,
                title: doc.title,
                path: doc.path || `${TOC_CONFIG.baseFolder}/${phaseFolder}/${doc.file || doc.filename}`,
                date: doc.date,
                category: doc.category,
                isPhaseOverview: doc.isPhaseOverview || false
            }));
            
            return files;
        }
    } catch (error) {
        console.log(`No manifest found for ${phaseFolder}`);
    }
    
    return [];
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initPhasePage,
        loadContent,
        showPhaseIntroduction,
        setupPageNavigation
    };
}
