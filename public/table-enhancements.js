// Table content-based sizing and enhancements
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile detection and state tracking
    let isMobile = window.innerWidth <= 768;
    let lastProcessedTime = 0;
    const PROCESSING_COOLDOWN = 1000; // 1 second cooldown
    
    // Function to optimize table sizing based on content
    function optimizeTableSizing() {
        // Skip optimization on mobile to prevent continuous updates
        if (isMobile) return;
        
        // Prevent too frequent processing
        const now = Date.now();
        if (now - lastProcessedTime < PROCESSING_COOLDOWN) return;
        lastProcessedTime = now;
        
        const tables = document.querySelectorAll('.permission-table');
        
        tables.forEach(table => {
            const wrapper = table.closest('.table-wrapper, .table-wrapper-content, .table-auto-fit');
            if (!wrapper) return;
            
            // Check if already optimized to avoid redundant processing
            const currentClass = wrapper.className;
            if (wrapper.hasAttribute('data-sizing-optimized') && 
                wrapper.getAttribute('data-sizing-class') === currentClass) {
                return;
            }
            
            // Create a temporary table to measure content width
            const tempDiv = document.createElement('div');
            tempDiv.style.cssText = `
                position: absolute;
                visibility: hidden;
                top: -9999px;
                left: -9999px;
                width: auto;
                overflow: visible;
            `;
            
            const tempTable = table.cloneNode(true);
            tempTable.style.cssText = `
                width: auto;
                min-width: auto;
                table-layout: auto;
                background: transparent;
                box-shadow: none;
                border-radius: 0;
            `;
            
            tempDiv.appendChild(tempTable);
            document.body.appendChild(tempDiv);
            
            const contentWidth = tempTable.offsetWidth;
            const containerWidth = wrapper.offsetWidth;
            const viewportWidth = window.innerWidth;
            
            document.body.removeChild(tempDiv);
            
            // Remove existing sizing classes
            wrapper.classList.remove('table-fit-content', 'table-full-width', 'table-auto-fit', 'table-content-fit', 'table-minimal-width');
            
            // Apply appropriate sizing based on content vs container ratio
            if (contentWidth < containerWidth * 0.7 && contentWidth < viewportWidth * 0.8) {
                // Content is much smaller than container - use content-fit
                wrapper.classList.add('table-content-fit');
                wrapper.style.display = 'table';
                wrapper.style.margin = 'var(--spacing-lg) auto';
                wrapper.style.width = 'auto';
            } else if (contentWidth < containerWidth * 0.9) {
                // Content is smaller but not too small - use auto-fit
                wrapper.classList.add('table-auto-fit');
                wrapper.style.display = 'inline-block';
                wrapper.style.width = 'fit-content';
                wrapper.style.maxWidth = '100%';
                wrapper.style.margin = 'var(--spacing-lg) auto';
            } else {
                // Content is close to container width - use full width
                wrapper.classList.add('table-full-width');
                wrapper.style.display = 'block';
                wrapper.style.width = '100%';
                wrapper.style.margin = 'var(--spacing-lg) 0';
            }
            
            // Mark as optimized
            wrapper.setAttribute('data-sizing-optimized', 'true');
            wrapper.setAttribute('data-sizing-class', wrapper.className);
        });
    }
    
    // Function to add hover effects to table rows
    function enhanceTableInteractions() {
        const tables = document.querySelectorAll('.permission-table');
        
        tables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                // Add data attributes for enhanced styling
                const cells = row.querySelectorAll('td');
                cells.forEach((cell, index) => {
                    cell.setAttribute('data-column', index + 1);
                });
                
                // Enhanced hover effect
                row.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(2px)';
                    this.style.transition = 'transform 0.2s ease';
                });
                
                row.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(0)';
                });
            });
        });
    }
    
    // Function to handle responsive table behavior with mobile stability
    function handleResponsiveTable() {
        const tables = document.querySelectorAll('.permission-table');
        
        tables.forEach(table => {
            const wrapper = table.closest('.table-wrapper, .table-wrapper-content, .table-auto-fit, .table-content-fit');
            if (!wrapper) return;
            
            if (isMobile) {
                // On mobile: apply stable class and lock dimensions
                wrapper.classList.add('table-mobile-stable');
                wrapper.removeAttribute('data-sizing-optimized');
                wrapper.removeAttribute('data-sizing-class');
                
                // Check if already processed to avoid re-processing
                if (table.hasAttribute('data-responsive-processed') && 
                    table.getAttribute('data-responsive-processed') === 'mobile') return;
                
                // Mobile: ensure proper data labels
                const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
                const rows = table.querySelectorAll('tbody tr');
                
                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    cells.forEach((cell, index) => {
                        if (headers[index] && !cell.hasAttribute('data-label')) {
                            cell.setAttribute('data-label', headers[index]);
                        }
                    });
                });
                
                // Mark as processed for mobile
                table.setAttribute('data-responsive-processed', 'mobile');
            } else {
                // Desktop: remove mobile-stable class and allow dynamic sizing
                wrapper.classList.remove('table-mobile-stable');
                
                // Desktop: remove mobile-specific attributes if switching from mobile
                if (table.getAttribute('data-responsive-processed') === 'mobile') {
                    const cells = table.querySelectorAll('td[data-label]');
                    cells.forEach(cell => {
                        cell.removeAttribute('data-label');
                    });
                }
                table.setAttribute('data-responsive-processed', 'desktop');
            }
        });
    }
    
    // Function to add scroll indicators
    function addScrollIndicators() {
        const wrappers = document.querySelectorAll('.table-wrapper, .table-auto-fit');
        
        wrappers.forEach(wrapper => {
            if (wrapper.querySelector('.scroll-indicator')) return;
            
            const leftIndicator = document.createElement('div');
            const rightIndicator = document.createElement('div');
            
            leftIndicator.className = 'scroll-indicator left';
            rightIndicator.className = 'scroll-indicator right';
            
            wrapper.appendChild(leftIndicator);
            wrapper.appendChild(rightIndicator);
            
            // Update indicators on scroll
            function updateIndicators() {
                const { scrollLeft, scrollWidth, clientWidth } = wrapper;
                
                leftIndicator.style.opacity = scrollLeft > 0 ? '1' : '0';
                rightIndicator.style.opacity = scrollLeft < scrollWidth - clientWidth - 1 ? '1' : '0';
            }
            
            wrapper.addEventListener('scroll', updateIndicators);
            updateIndicators(); // Initial check
        });
    }
    
    // Initialize all table enhancements with mobile awareness
    function initializeTableEnhancements() {
        enhanceTableInteractions();
        handleResponsiveTable();
        addScrollIndicators();
        
        // Only run table sizing optimization on desktop
        if (!isMobile) {
            optimizeTableSizing();
        }
    }
    
    // Run on load
    initializeTableEnhancements();
    
    // Re-run on window resize with debounce and mobile check
    let resizeTimeout;
    let lastWidth = window.innerWidth;
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        
        // Update mobile state
        const newIsMobile = window.innerWidth <= 768;
        const mobileStateChanged = newIsMobile !== isMobile;
        isMobile = newIsMobile;
        
        // Only process if width actually changed significantly or mobile state changed
        const currentWidth = window.innerWidth;
        if (!mobileStateChanged && Math.abs(currentWidth - lastWidth) < 50) return;
        
        resizeTimeout = setTimeout(() => {
            lastWidth = currentWidth;
            
            // On mobile, only handle responsive behavior, skip sizing optimization
            if (isMobile) {
                handleResponsiveTable();
            } else {
                optimizeTableSizing();
                handleResponsiveTable();
            }
        }, 500); // Increase timeout to reduce frequency
    });
    
    // Re-run when new content is loaded (for SPA navigation) with mobile awareness
    let mutationTimeout;
    const observer = new MutationObserver((mutations) => {
        clearTimeout(mutationTimeout);
        
        mutationTimeout = setTimeout(() => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const addedNodes = Array.from(mutation.addedNodes);
                    const hasTable = addedNodes.some(node => 
                        node.nodeType === 1 && 
                        (node.querySelector && node.querySelector('.permission-table'))
                    );
                    
                    if (hasTable) {
                        // On mobile, skip table sizing optimization completely
                        if (isMobile) {
                            enhanceTableInteractions();
                            handleResponsiveTable();
                            addScrollIndicators();
                        } else {
                            initializeTableEnhancements();
                        }
                    }
                }
            });
        }, 300);
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Expose function globally for manual optimization
    window.optimizeTableSizing = optimizeTableSizing;
    
    // Function to force content-based sizing for all tables
    function forceContentBasedSizing() {
        const tables = document.querySelectorAll('.permission-table');
        
        tables.forEach(table => {
            const wrapper = table.closest('.table-wrapper, .table-wrapper-content, .table-auto-fit');
            if (!wrapper) {
                // Create wrapper if it doesn't exist
                const newWrapper = document.createElement('div');
                newWrapper.className = 'table-wrapper table-content-fit';
                table.parentNode.insertBefore(newWrapper, table);
                newWrapper.appendChild(table);
            } else {
                // Force content-based sizing
                wrapper.classList.add('table-force-content-width');
                wrapper.classList.remove('table-full-width');
            }
        });
    }
    
    // Expose globally
    window.forceContentBasedSizing = forceContentBasedSizing;
    
    // Auto-apply content-based sizing on load (desktop only)
    setTimeout(() => {
        if (!isMobile) {
            forceContentBasedSizing();
            optimizeTableSizing();
        } else {
            // On mobile, just apply basic enhancements
            enhanceTableInteractions();
            handleResponsiveTable();
            addScrollIndicators();
        }
    }, 500);
});
