// Enhanced mobile navigation and theme handling
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading states to buttons
    document.querySelectorAll('.sl-link-button, a[data-type="button"]').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.href || this.href.startsWith('#')) return;
            
            this.classList.add('loading');
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.classList.remove('loading');
                this.style.pointerEvents = 'auto';
            }, 1000);
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards and callouts
    document.querySelectorAll('.feature-card, .callout, .sl-card').forEach(el => {
        observer.observe(el);
    });

    // Enhanced table responsiveness
    document.querySelectorAll('.permission-table').forEach(table => {
        const wrapper = table.closest('.table-wrapper');
        if (wrapper) {
            // Add scroll indicators
            const leftIndicator = document.createElement('div');
            const rightIndicator = document.createElement('div');
            
            leftIndicator.className = 'scroll-indicator left';
            rightIndicator.className = 'scroll-indicator right';
            
            leftIndicator.style.cssText = `
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 20px;
                background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s;
            `;
            
            rightIndicator.style.cssText = `
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                width: 20px;
                background: linear-gradient(to left, rgba(0,0,0,0.1), transparent);
                pointer-events: none;
                opacity: 1;
                transition: opacity 0.3s;
            `;
            
            wrapper.style.position = 'relative';
            wrapper.appendChild(leftIndicator);
            wrapper.appendChild(rightIndicator);
            
            wrapper.addEventListener('scroll', () => {
                const { scrollLeft, scrollWidth, clientWidth } = wrapper;
                
                leftIndicator.style.opacity = scrollLeft > 0 ? '1' : '0';
                rightIndicator.style.opacity = scrollLeft < scrollWidth - clientWidth ? '1' : '0';
            });
        }
    });

    // Add hover effects to badges
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Alt + number keys to navigate to sections
        if (e.altKey && e.key >= '1' && e.key <= '9') {
            e.preventDefault();
            const headings = document.querySelectorAll('h2, h3');
            const index = parseInt(e.key) - 1;
            if (headings[index]) {
                headings[index].scrollIntoView({ behavior: 'smooth' });
                headings[index].focus();
            }
        }
    });

    // Theme-aware animations
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    function updateThemeAnimations(isDark) {
        document.documentElement.style.setProperty(
            '--animation-glow', 
            isDark ? '0 0 20px rgba(88, 101, 242, 0.3)' : '0 0 20px rgba(88, 101, 242, 0.1)'
        );
    }
    
    updateThemeAnimations(prefersDark.matches);
    prefersDark.addEventListener('change', (e) => updateThemeAnimations(e.matches));
});
