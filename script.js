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
const addScrollProgress = () => {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrolled / maxScroll;
        progress.style.transform = `scaleX(${percentage})`;
    });
};

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
});

