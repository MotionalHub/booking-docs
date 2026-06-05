// Smart Table Overflow Detection
// Only show scrollbar when table content actually overflows

document.addEventListener('DOMContentLoaded', function() {
    function checkTableOverflow() {
        const tableWrappers = document.querySelectorAll('.table-wrapper');
        
        tableWrappers.forEach(wrapper => {
            const table = wrapper.querySelector('.permission-table');
            if (!table) return;
            
            // Reset classes first
            wrapper.classList.remove('needs-scroll', 'no-overflow');
            
            // Check if content overflows
            const wrapperWidth = wrapper.clientWidth;
            const tableWidth = table.scrollWidth;
            
            // Only add scroll if table is actually wider than container
            if (tableWidth > wrapperWidth + 5) { // 5px tolerance
                wrapper.classList.add('needs-scroll');
            } else {
                wrapper.classList.add('no-overflow');
            }
        });
    }
    
    // Check on load
    checkTableOverflow();
    
    // Check on resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkTableOverflow, 150);
    });
    
    // Re-check when content changes (for dynamic content)
    const observer = new MutationObserver(function(mutations) {
        let shouldCheck = false;
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                shouldCheck = true;
            }
        });
        
        if (shouldCheck) {
            setTimeout(checkTableOverflow, 100);
        }
    });
    
    // Observe table containers for changes
    document.querySelectorAll('.table-wrapper').forEach(wrapper => {
        observer.observe(wrapper, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style']
        });
    });
});
