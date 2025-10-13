// Common Header and Footer Templates
// This file provides reusable header and footer HTML that all pages can use

function getHeaderHTML(activePage = '') {
    return `
        <div class="header-container">
            <div class="logo-section">
                <h1 class="site-title">My DBA Experience</h1>
                <p class="site-subtitle">A Research Journey</p>
            </div>
            <nav class="main-nav" id="mainNav">
                <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
                    <li><a href="phase.html?phase=0" ${activePage === 'phase0' ? 'class="active"' : ''}>Reflection Journal</a></li>
                    <li><a href="phase.html?phase=1" ${activePage === 'phase1' ? 'class="active"' : ''}>Idea Generation</a></li>
                    <li><a href="phase.html?phase=2" ${activePage === 'phase2' ? 'class="active"' : ''}>Proposal</a></li>
                    <li><a href="phase.html?phase=3" ${activePage === 'phase3' ? 'class="active"' : ''}>Literature Review</a></li>
                    <li><a href="phase.html?phase=4" ${activePage === 'phase4' ? 'class="active"' : ''}>Theoretical Framework</a></li>
                    <li><a href="phase.html?phase=5" ${activePage === 'phase5' ? 'class="active"' : ''}>Design</a></li>
                    <li><a href="phase.html?phase=6" ${activePage === 'phase6' ? 'class="active"' : ''}>Data Collection</a></li>
                    <li><a href="phase.html?phase=7" ${activePage === 'phase7' ? 'class="active"' : ''}>Data Analysis</a></li>
                    <li><a href="phase.html?phase=8" ${activePage === 'phase8' ? 'class="active"' : ''}>Report</a></li>
                    <li><a href="contact.html" ${activePage === 'contact' ? 'class="active"' : ''}>Contact</a></li>
                </ul>
            </nav>
        </div>
    `;
}

function getFooterHTML() {
    return `
        <div class="footer-container">
            <p>&copy; 2024-2025 Clarence Wong. All rights reserved.</p>
            <p class="footer-note">This website documents ongoing doctoral research.</p>
            <p class="footer-contact">Contact: <a href="mailto:clarence18.aina@gmail.com">clarence18.aina@gmail.com</a></p>
        </div>
    `;
}

// Initialize header and footer on page load
function initializeHeaderFooter(activePage = '') {
    // Load header
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = getHeaderHTML(activePage);
    }

    // Load footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = getFooterHTML();
    }
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getHeaderHTML, getFooterHTML, initializeHeaderFooter };
}
