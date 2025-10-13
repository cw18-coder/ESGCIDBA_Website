// navigation.js - Main navigation functionality

document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    highlightCurrentPage();
});

/**
 * Initialize mobile navigation toggle
 */
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translateY(8px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-8px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.querySelectorAll('span').forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    }
}

/**
 * Highlight current page in navigation
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const currentParams = new URLSearchParams(window.location.search);
    const currentPhase = currentParams.get('phase');
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkPath = new URL(link.href).pathname;
        const linkParams = new URLSearchParams(new URL(link.href).search);
        const linkPhase = linkParams.get('phase');
        
        // Check if this is the current page
        if (currentPath.endsWith(linkPath) || currentPath.endsWith(linkPath.replace('.html', ''))) {
            if (currentPhase === null && linkPhase === null) {
                link.classList.add('active');
            } else if (currentPhase === linkPhase) {
                link.classList.add('active');
            }
        }
    });
}

/**
 * Get phase information by number
 */
function getPhaseInfo(phaseNumber) {
    const phases = {
        '0': { name: 'Reflection Journal', folder: '0_reflection_journal' },
        '1': { name: 'Idea Generation', folder: '1_idea_generation' },
        '2': { name: 'Proposal', folder: '2_proposal' },
        '3': { name: 'Literature Review', folder: '3_literature_review' },
        '4': { name: 'Theoretical Framework', folder: '4_theoretical_framework' },
        '5': { name: 'Design', folder: '5_design' },
        '6': { name: 'Data Collection', folder: '6_data_collection' },
        '7': { name: 'Data Analysis', folder: '7_data_analysis' },
        '8': { name: 'Report', folder: '8_report' }
    };
    
    return phases[phaseNumber] || null;
}

/**
 * Format phase number for display
 */
function formatPhaseNumber(phaseNumber) {
    return `Phase ${phaseNumber}`;
}

/**
 * Create breadcrumb trail
 */
function createBreadcrumb(items) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    
    const ol = breadcrumb.querySelector('ol');
    if (!ol) return;
    
    ol.innerHTML = '';
    
    items.forEach((item, index) => {
        const li = document.createElement('li');
        
        if (index < items.length - 1 && item.href) {
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
        } else {
            li.textContent = item.text;
        }
        
        ol.appendChild(li);
    });
}

/**
 * Smooth scroll to top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMobileNav,
        highlightCurrentPage,
        getPhaseInfo,
        formatPhaseNumber,
        createBreadcrumb,
        scrollToTop
    };
}
