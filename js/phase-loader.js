// phase-loader.js - Dynamic content loading for phase pages

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
            <p>Select a document from the table of contents to begin exploring this phase.</p>
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
    
    if (!currentFile) {
        // On phase intro page, only show next button if files exist
        const phaseInfo = getPhaseInfo(phaseNumber);
        const files = await getPhaseFiles(phaseInfo.folder);
        
        if (files.length > 0) {
            nextButton.style.display = 'flex';
            nextButton.onclick = () => {
                window.location.href = `phase.html?phase=${phaseNumber}&file=${files[0].filename}`;
            };
        }
        return;
    }
    
    const phaseInfo = getPhaseInfo(phaseNumber);
    const files = await getPhaseFiles(phaseInfo.folder);
    const currentIndex = files.findIndex(f => f.filename === currentFile);
    
    if (currentIndex === -1) return;
    
    // Setup previous button
    if (currentIndex > 0) {
        prevButton.style.display = 'flex';
        prevButton.onclick = () => {
            window.location.href = `phase.html?phase=${phaseNumber}&file=${files[currentIndex - 1].filename}`;
        };
    } else {
        // First file, previous goes to phase intro
        prevButton.style.display = 'flex';
        prevButton.onclick = () => {
            window.location.href = `phase.html?phase=${phaseNumber}`;
        };
    }
    
    // Setup next button
    if (currentIndex < files.length - 1) {
        nextButton.style.display = 'flex';
        nextButton.onclick = () => {
            window.location.href = `phase.html?phase=${phaseNumber}&file=${files[currentIndex + 1].filename}`;
        };
    } else {
        // Last file, next goes to next phase if it exists
        const nextPhaseNumber = (parseInt(phaseNumber) + 1).toString();
        if (parseInt(nextPhaseNumber) <= 8) {
            nextButton.style.display = 'flex';
            nextButton.onclick = () => {
                window.location.href = `phase.html?phase=${nextPhaseNumber}`;
            };
        }
    }
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
