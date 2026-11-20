/**
 * GLOW Skin & Laser — Main JavaScript
 * Professional interactions: navigation, forms, smooth scroll, etc.
 */

(function() {
    'use strict';

    // ==========================================================================
    // Mobile Navigation Toggle
    // ==========================================================================
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('active');
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });

        // Close menu when clicking a link
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                document.body.style.overflow = '';
                navToggle.focus();
            }
        });
    }

    // ==========================================================================
    // Header Scroll Effect
    // ==========================================================================
    const header = document.querySelector('.header');
    let ticking = false;

    function updateHeader() {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ==========================================================================
    // Smooth Scroll for Anchor Links
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Focus target for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });

    // ==========================================================================
    // Contact Form Validation & Submission
    // ==========================================================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        const fields = contactForm.querySelectorAll('.field-input, .field-select, .field-textarea');

        // Real-time validation
        fields.forEach(field => {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', () => {
                if (field.classList.contains('error')) {
                    validateField(field);
                }
            });
        });

        function validateField(field) {
            const errorEl = field.parentElement.querySelector('.field-error');
            let isValid = true;
            let errorMessage = '';

            // Required check
            if (field.hasAttribute('required') && !field.value.trim()) {
                isValid = false;
                errorMessage = 'This field is required';
            }
            // Email validation
            else if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value.trim())) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
            }
            // Phone validation
            else if (field.type === 'tel' && field.value.trim()) {
                const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
                if (!phoneRegex.test(field.value.trim())) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number';
                }
            }

            if (!isValid) {
                field.classList.add('error');
                if (errorEl) errorEl.textContent = errorMessage;
            } else {
                field.classList.remove('error');
                if (errorEl) errorEl.textContent = '';
            }

            return isValid;
        }

        // Form submission
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Validate all fields
            let isFormValid = true;
            fields.forEach(field => {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                // Focus first invalid field
                const firstError = contactForm.querySelector('.error');
                if (firstError) firstError.focus();
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Prepare form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // For demo purposes, simulate API call
                await simulateFormSubmission(data);

                // Show success
                showFormMessage('success', 'Thank you! We\'ll contact you within 2 hours to confirm your appointment.');
                contactForm.reset();

                // Track conversion (analytics)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'appointment_request', {
                        'service_type': data.interest || 'general',
                        'source': 'website_form'
                    });
                }
            } catch (error) {
                showFormMessage('error', 'Something went wrong. Please try again or call us directly at +91 98765 43210.');
            } finally {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });

        function showFormMessage(type, message) {
            // Remove existing message
            const existing = contactForm.querySelector('.form__message');
            if (existing) existing.remove();

            const messageEl = document.createElement('div');
            messageEl.className = `form__message form__message--${type}`;
            messageEl.setAttribute('role', 'alert');
            messageEl.style.cssText = `
                padding: var(--space-4);
                margin-top: var(--space-4);
                border-radius: var(--radius-md);
                font-size: var(--text-sm);
                ${type === 'success'
                    ? 'background: var(--color-success-light); color: var(--color-success); border: 1px solid var(--color-success);'
                    : 'background: var(--color-error-light); color: var(--color-error); border: 1px solid var(--color-error);'
                }
            `;
            messageEl.textContent = message;

            contactForm.appendChild(messageEl);

            // Auto-remove after 8 seconds
            setTimeout(() => {
                messageEl.style.opacity = '0';
                messageEl.style.transition = 'opacity 0.5s ease';
                setTimeout(() => messageEl.remove(), 500);
            }, 8000);
        }

        function simulateFormSubmission(data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Form submitted:', data);
                    resolve({ success: true });
                }, 1500);
            });
        }
    }

    // ==========================================================================
    // WhatsApp Click Tracking
    // ==========================================================================
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function() {
            const text = this.textContent || '';
            const action = text.includes('Book') ? 'book_appointment' :
                          text.includes('WhatsApp') ? 'whatsapp_click' : 'general_whatsapp';

            if (typeof gtag !== 'undefined') {
                gtag('event', action, {
                    'method': 'whatsapp',
                    'page_location': window.location.href
                });
            }
        });
    });

    // ==========================================================================
    // Treatment Card WhatsApp Links - Pre-fill message
    // ==========================================================================
    document.querySelectorAll('.treatment-card .btn-whatsapp, .treatment-card .btn-primary').forEach(link => {
        if (link.href.includes('wa.me')) {
            link.addEventListener('click', function() {
                const card = this.closest('.treatment-card');
                const serviceName = card?.querySelector('.treatment-title')?.textContent || 'Treatment';
                const encodedText = encodeURIComponent(`Hi, I would like to book a ${serviceName} consultation at GLOW Skin & Laser Clinic in Anna Nagar.`);
                this.href = `https://wa.me/919876543210?text=${encodedText}`;
            });
        }
    });

    // Pricing Card WhatsApp Links
    document.querySelectorAll('.pricing-card .btn-whatsapp, .pricing-card .btn-primary').forEach(link => {
        if (link.href.includes('wa.me')) {
            link.addEventListener('click', function() {
                const card = this.closest('.pricing-card');
                const planName = card?.querySelector('.pricing-name')?.textContent || 'Treatment Package';
                const encodedText = encodeURIComponent(`Hi, I would like to book the ${planName} at GLOW Skin & Laser Clinic.`);
                this.href = `https://wa.me/919876543210?text=${encodedText}`;
            });
        }
    });

    // ==========================================================================
    // Pricing Toggle
    // ==========================================================================
    const pricingLabels = document.querySelectorAll('.pricing-toggle-label');
    const pricingPrices = document.querySelectorAll('.pricing-price');

    pricingLabels.forEach(label => {
        label.addEventListener('click', function() {
            const view = this.dataset.pricing;

            // Update active state
            pricingLabels.forEach(l => {
                l.classList.remove('active');
                l.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            // Update prices
            pricingPrices.forEach(priceEl => {
                const newPrice = priceEl.dataset[view];
                if (newPrice) {
                    priceEl.textContent = newPrice;
                }
            });
        });

        // Keyboard support
        label.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // ==========================================================================
    // Counter Animation for Hero Stats
    // ==========================================================================
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    function animateCounter(el) {
        const target = parseInt(el.dataset.count, 10);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

})();