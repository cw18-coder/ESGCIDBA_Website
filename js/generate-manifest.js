// generate-manifest.js - Node.js script to generate manifest files
// Run this script to automatically create manifest.json files for each phase folder

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'thesis_html';
const PHASES = [
    '0_reflection_journal',
    '1_idea_generation',
    '2_proposal',
    '3_literature_review',
    '4_theoretical_framework',
    '5_design',
    '6_data_collection',
    '7_data_analysis',
    '8_report'
];

/**
 * Get all HTML files in a directory
 */
function getHtmlFiles(dirPath) {
    try {
        const files = fs.readdirSync(dirPath);
        return files
            .filter(file => file.endsWith('.html'))
            .sort()
            .map(filename => {
                const filePath = path.join(dirPath, filename);
                const stats = fs.statSync(filePath);
                
                // Try to extract title from HTML file
                let title = formatFilename(filename);
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
                    if (titleMatch) {
                        title = titleMatch[1].replace(' - DBA Thesis', '').trim();
                    } else {
                        const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
                        if (h1Match) {
                            title = h1Match[1].replace(/<[^>]*>/g, '').trim();
                        }
                    }
                } catch (err) {
                    console.log(`Could not extract title from ${filename}`);
                }
                
                return {
                    filename: filename,
                    title: title,
                    path: `${BASE_DIR}/${path.basename(dirPath)}/${filename}`,
                    modified: stats.mtime.toISOString()
                };
            });
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
        return [];
    }
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
 * Generate manifest for a phase
 */
function generateManifest(phaseFolder) {
    const dirPath = path.join(BASE_DIR, phaseFolder);
    
    if (!fs.existsSync(dirPath)) {
        console.log(`Directory does not exist: ${dirPath}`);
        return;
    }
    
    const files = getHtmlFiles(dirPath);
    
    const manifest = {
        phase: phaseFolder,
        generated: new Date().toISOString(),
        fileCount: files.length,
        files: files
    };
    
    const manifestPath = path.join(dirPath, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    
    console.log(`✓ Generated manifest for ${phaseFolder} (${files.length} files)`);
}

/**
 * Main function
 */
function main() {
    console.log('Generating manifest files for all phases...\n');
    
    // Check if base directory exists
    if (!fs.existsSync(BASE_DIR)) {
        console.error(`Base directory does not exist: ${BASE_DIR}`);
        process.exit(1);
    }
    
    // Generate manifest for each phase
    PHASES.forEach(phase => {
        generateManifest(phase);
    });
    
    console.log('\n✓ All manifest files generated successfully!');
    console.log('\nTo regenerate manifests after adding new HTML files, run:');
    console.log('  node js/generate-manifest.js');
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { generateManifest, getHtmlFiles };
