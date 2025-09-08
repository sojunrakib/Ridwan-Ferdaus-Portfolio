document.addEventListener('DOMContentLoaded', function () {
    // --- Enrollment Form Logic ---
    const enrollButton = document.getElementById('enrollButton');
    const enrollFormContainer = document.getElementById('enrollmentFormContainer');
    const cancelButton = document.getElementById('cancelButton');
    const enrollmentForm = document.getElementById('enrollmentForm');

    if (enrollButton) {
        enrollButton.addEventListener('click', function () {
            if (enrollFormContainer) {
                enrollFormContainer.style.display = 'block'; // Show the form
            } else {
                // fallback alert if no form container
                alert('You have successfully enrolled!');
            }
        });
    }

    if (cancelButton && enrollFormContainer) {
        cancelButton.addEventListener('click', function () {
            enrollFormContainer.style.display = 'none'; // Hide the form
        });
    }

    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const phone = document.getElementById('phone')?.value || '';

            alert(`Thank you for enrolling, ${name}!\nWe will contact you at ${email} and ${phone}.`);

            if (enrollFormContainer) {
                enrollFormContainer.style.display = 'none';
            }
            this.reset();
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

    // --- Header scroll effect ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Back to top button ---
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Typing effect ---
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const words = ['Arabic Teacher and M.phil researcher at Al-Azhar'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 1500;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        setTimeout(type, 1000);
    }

    // --- Smooth scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Contact form submission ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // --- Copyright year ---
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

