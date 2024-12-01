document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlist-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlist-form-top');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        
        form.reset();
    });
});

