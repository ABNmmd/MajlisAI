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
});

