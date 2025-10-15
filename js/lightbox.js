/**
 * Lightbox Functionality
 * Provides click-to-magnify for images with lightbox-trigger class
 * 
 * Features:
 * - Click image to open in full-screen modal
 * - Close via: X button, ESC key, or click outside
 * - Prevents background scrolling when active
 * - Keyboard accessible
 */

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightbox);
    } else {
        initLightbox();
    }
    
    function initLightbox() {
        const modal = document.getElementById('lightboxModal');
        const modalImg = document.getElementById('lightboxImage');
        const closeBtn = document.querySelector('.lightbox-close');
        const lightboxContent = document.querySelector('.lightbox-content');
        const zoomInBtn = document.getElementById('zoomIn');
        const zoomOutBtn = document.getElementById('zoomOut');
        const zoomLevelDisplay = document.getElementById('zoomLevel');
        
        // Zoom state
        let currentZoom = 100;
        const zoomStep = 25;
        const minZoom = 100;
        const maxZoom = 300;
        
        // Exit if lightbox elements don't exist
        if (!modal || !modalImg) {
            console.warn('Lightbox elements not found. Skipping lightbox initialization.');
            return;
        }
        
        // Open lightbox when clicking on any image with lightbox-trigger class
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('lightbox-trigger')) {
                openLightbox(e.target);
            }
        });
        
        // Close lightbox when clicking the X button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }
        
        // Close lightbox when clicking outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeLightbox();
            }
        });
        
        // Close lightbox when pressing ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeLightbox();
            }
        });
        
        // Zoom controls
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                zoomIn();
            });
        }
        
        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                zoomOut();
            });
        }
        
        /**
         * Zoom in function
         */
        function zoomIn() {
            if (currentZoom < maxZoom) {
                currentZoom += zoomStep;
                applyZoom();
            }
        }
        
        /**
         * Zoom out function
         */
        function zoomOut() {
            if (currentZoom > minZoom) {
                currentZoom -= zoomStep;
                applyZoom();
            }
        }
        
        /**
         * Apply zoom level to image
         */
        function applyZoom() {
            modalImg.style.transform = `scale(${currentZoom / 100})`;
            
            if (zoomLevelDisplay) {
                zoomLevelDisplay.textContent = currentZoom + '%';
            }
            
            // Add/remove zoomed class for overflow handling
            if (currentZoom > 100) {
                modalImg.classList.add('zoomed');
                lightboxContent.classList.add('zoomed');
            } else {
                modalImg.classList.remove('zoomed');
                lightboxContent.classList.remove('zoomed');
            }
            
            // Update button states
            updateZoomButtons();
        }
        
        /**
         * Update zoom button disabled states
         */
        function updateZoomButtons() {
            if (zoomInBtn) {
                zoomInBtn.disabled = currentZoom >= maxZoom;
            }
            if (zoomOutBtn) {
                zoomOutBtn.disabled = currentZoom <= minZoom;
            }
        }
        
        /**
         * Reset zoom to 100%
         */
        function resetZoom() {
            currentZoom = 100;
            modalImg.style.transform = 'scale(1)';
            modalImg.classList.remove('zoomed');
            if (lightboxContent) {
                lightboxContent.classList.remove('zoomed');
                lightboxContent.scrollTop = 0;
                lightboxContent.scrollLeft = 0;
            }
            if (zoomLevelDisplay) {
                zoomLevelDisplay.textContent = '100%';
            }
            updateZoomButtons();
        }
        
        /**
         * Open lightbox with specified image
         */
        function openLightbox(imgElement) {
            const imgSrc = imgElement.getAttribute('data-lightbox-src') || imgElement.src;
            const imgAlt = imgElement.alt || 'Magnified image';
            
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Reset zoom when opening
            resetZoom();
            
            // Set focus to close button for accessibility
            if (closeBtn) {
                closeBtn.focus();
            }
        }
        
        /**
         * Close lightbox and restore page state
         */
        function closeLightbox() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
            modalImg.src = ''; // Clear image source for performance
            modalImg.alt = '';
            
            // Reset zoom on close
            resetZoom();
        }
    }
})();
