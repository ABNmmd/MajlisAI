document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlist-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        // Here you would typically send the email to your server or API
        console.log('Submitted email:', email);

        // For demonstration purposes, we'll just show an alert
        alert('Thank you for joining the waitlist!');
        form.reset();
    });
});

