document.addEventListener("DOMContentLoaded", () => {
    /**
     * Dynamically highlight the active navigation link
     */
    function highlightActiveNav() {
        const currentPage = window.location.pathname.split("/").pop();
        const navLinks = document.querySelectorAll("nav ul li a");
        navLinks.forEach((link) => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    /**
     * Handle form submission with validation
     * @param {HTMLFormElement} form - The form element to validate
     * @param {function} callback - Function to call on successful submission
     */
    function handleFormSubmission(form, callback) {
        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const inputs = Array.from(form.querySelectorAll("input, select, textarea"));
                let isValid = true;

                inputs.forEach((input) => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add("error");
                    } else {
                        input.classList.remove("error");
                    }
                });

                if (isValid) {
                    callback();
                } else {
                    alert("Please fill out all required fields.");
                }
            });
        }
    }

    /**
     * Booking form functionality
     */
    const bookingForm = document.querySelector(".book form");
    handleFormSubmission(bookingForm, () => {
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        alert(`Your ${service} service has been booked for ${date} at ${time}.`);
        bookingForm.reset();
    });

    /**
     * Feedback form functionality
     */
    const feedbackForm = document.querySelector(".feedback form");
    handleFormSubmission(feedbackForm, () => {
        const name = document.getElementById("name").value.trim();
        const feedback = document.getElementById("feedback").value.trim();
        alert(`Thank you, ${name}, for your feedback: "${feedback}"`);
        feedbackForm.reset();
    });

    /**
     * Contact form functionality
     */
    const contactForm = document.querySelector(".contact-us form");
    handleFormSubmission(contactForm, () => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        alert(`Thank you, ${name}! We will contact you at ${email} soon.\nMessage: "${message}"`);
        contactForm.reset();
    });

    /**
     * Add hover animation for hero button
     */
    const heroButton = document.querySelector(".hero .btn");
    if (heroButton) {
        heroButton.addEventListener("mouseover", () => {
            heroButton.style.backgroundColor = "#003366";
            heroButton.style.transform = "scale(1.1)";
        });
        heroButton.addEventListener("mouseout", () => {
            heroButton.style.backgroundColor = "#004080";
            heroButton.style.transform = "scale(1)";
        });
    }

    // Highlight the active navigation link
    highlightActiveNav();
});
