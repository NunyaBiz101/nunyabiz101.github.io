document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        console.log('Form Data:', Object.fromEntries(formData));
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        console.log('Form Data:', Object.fromEntries(formData));

        setTimeout(function () {
            window.location.reload();
        }, 1000); 
    });
});
