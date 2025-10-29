document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const submitButton = contactForm.querySelector('.cta-button');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const formData = new FormData(contactForm);
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                submitButton.textContent = 'Message Sent!';
                contactForm.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        submitButton.textContent = 'Error!';
                        alert('Oops! There was a problem submitting your form.');
                    }
                })
            }
        }).catch(error => {
            submitButton.textContent = 'Error!';
            alert('Oops! There was a problem submitting your form.');
        }).finally(() => {
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }, 3000);
        });
    });
});