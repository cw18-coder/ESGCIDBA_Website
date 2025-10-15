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
        }
    }
})();
