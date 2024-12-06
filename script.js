Ydocument.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlist-form');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        try {
            // Submit form
            showToast('Successfully joined the waitlist!');
            form.reset();
        } catch (error) {
            showToast('Error joining waitlist. Please try again.', 'error');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlist-form-top');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        try {
            // Submit form
            showToast('Successfully joined the waitlist!');
            form.reset();
        } catch (error) {
            showToast('Error joining waitlist. Please try again.', 'error');
        }
    });
});

// Toast notification implementation
const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = type === 'success' ? '✓' : '✕';
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = window.scrollY / windowHeight;
    scrollProgress.style.transform = `scaleX(${progress})`;
});

// Add loading state to forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        const button = form.querySelector('button[type="submit"]');
        button.classList.add('loading');
        // Remove loading class after form submission (adjust timing as needed)
        setTimeout(() => button.classList.remove('loading'), 2000);
    });
});

// Add index for staggered mobile menu animations
document.querySelectorAll('.mobile-menu-links a').forEach((link, index) => {
    link.style.setProperty('--index', index);
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    addScrollProgress();

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileMenuClose?.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Show/hide header based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down & past header
            header.classList.add('hidden');
        } else {
            // Scrolling up or at top
            header.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust offset as needed
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial check
});

