/**
 * GLOW Skin & Laser — Scroll Animations & Interactive Components
 * IntersectionObserver-based reveal animations with stagger support
 * Testimonial carousel, Image comparison slider, Pricing toggle
 */

(function() {
    'use strict';

    // ==========================================================================
    // Configuration
    // ==========================================================================
    const CONFIG = {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
        staggerDelay: 100,
        maxStagger: 600
    };

    // ==========================================================================
    // Reveal Animation Controller
    // ==========================================================================
    class RevealController {
        constructor(options = {}) {
            this.options = { ...CONFIG, ...options };
            this.observer = null;
            this.elements = new Set();
            this.init();
        }

        init() {
            // Check for reduced motion preference
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                this.disableAnimations();
                return;
            }

            this.createObserver();
            this.observeElements();

            // Re-observe on dynamic content
            this.setupMutationObserver();
        }

        createObserver() {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.revealElement(entry.target);
                        this.observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: this.options.rootMargin,
                threshold: this.options.threshold
            });
        }

        observeElements() {
            // Find all elements with .reveal class
            const revealElements = document.querySelectorAll('.reveal');

            revealElements.forEach((el, index) => {
                // Add stagger delay via CSS custom property
                const delay = Math.min(index * this.options.staggerDelay, this.options.maxStagger);
                el.style.transitionDelay = `${delay}ms`;

                this.observer.observe(el);
                this.elements.add(el);
            });
        }

        revealElement(element) {
            // Force reflow to ensure transition works
            element.offsetHeight;
            element.classList.add('is-visible');

            // Clean up transition delay after animation
            setTimeout(() => {
                element.style.transitionDelay = '';
            }, this.options.maxStagger + 600);
        }

        disableAnimations() {
            // Immediately show all elements
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.add('is-visible');
                el.style.transitionDelay = '';
            });
        }

        setupMutationObserver() {
            // Watch for dynamically added reveal elements
            const mutationObserver = new MutationObserver((mutations) => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Check the node itself
                            if (node.classList?.contains('reveal')) {
                                this.observeSingle(node);
                            }
                            // Check descendants
                            node.querySelectorAll?.('.reveal').forEach(el => {
                                this.observeSingle(el);
                            });
                        }
                    });
                });
            });

            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        observeSingle(element) {
            if (!this.elements.has(element)) {
                this.elements.add(element);
                const index = Array.from(this.elements).indexOf(element);
                const delay = Math.min(index * this.options.staggerDelay, this.options.maxStagger);
                element.style.transitionDelay = `${delay}ms`;
                this.observer.observe(element);
            }
        }

        refresh() {
            // Re-scan for new elements
            this.observeElements();
        }

        destroy() {
            if (this.observer) {
                this.observer.disconnect();
            }
        }
    }

    // ==========================================================================
    // Parallax Effect for Hero
    // ==========================================================================
    class ParallaxController {
        constructor() {
            this.elements = document.querySelectorAll('[data-parallax]');
            this.ticking = false;
            this.init();
        }

        init() {
            if (this.elements.length === 0) return;
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            window.addEventListener('scroll', () => this.onScroll(), { passive: true });
        }

        onScroll() {
            if (!this.ticking) {
                requestAnimationFrame(() => this.update());
                this.ticking = true;
            }
        }

        update() {
            const scrollY = window.scrollY;

            this.elements.forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.5;
                const offset = scrollY * speed;
                el.style.transform = `translate3d(0, ${offset}px, 0)`;
            });

            this.ticking = false;
        }
    }

    // ==========================================================================
    // Testimonial Carousel
    // ==========================================================================
    class TestimonialCarousel {
        constructor() {
            this.carousel = document.querySelector('[data-carousel]');
            if (!this.carousel) return;

            this.track = this.carousel.querySelector('.carousel-track');
            this.slides = this.carousel.querySelectorAll('.carousel-slide');
            this.prevBtn = this.carousel.querySelector('[data-carousel-prev]');
            this.nextBtn = this.carousel.querySelector('[data-carousel-next]');
            this.dotsContainer = this.carousel.querySelector('.carousel-dots');

            this.currentIndex = 0;
            this.slidesPerView = this.getSlidesPerView();
            this.maxIndex = Math.max(0, this.slides.length - this.slidesPerView);
            this.autoPlayTimer = null;
            this.isAnimating = false;

            this.init();
        }

        getSlidesPerView() {
            if (window.innerWidth >= 992) return 3;
            if (window.innerWidth >= 640) return 2;
            return 1;
        }

        init() {
            this.createDots();
            this.bindEvents();
            this.startAutoPlay();
            this.update();

            // Handle resize
            window.addEventListener('resize', () => this.handleResize());
        }

        createDots() {
            if (!this.dotsContainer) return;

            const dotCount = this.maxIndex + 1;
            this.dotsContainer.innerHTML = Array.from({ length: dotCount }, (_, i) =>
                `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
            ).join('');

            this.dots = this.dotsContainer.querySelectorAll('[data-dot]');
        }

        bindEvents() {
            this.prevBtn?.addEventListener('click', () => this.prev());
            this.nextBtn?.addEventListener('click', () => this.next());

            this.dotsContainer?.addEventListener('click', (e) => {
                const dot = e.target.closest('[data-dot]');
                if (dot) {
                    const index = parseInt(dot.dataset.dot, 10);
                    this.goTo(index);
                }
            });

            // Pause auto-play on hover/focus
            this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
            this.carousel.addEventListener('focusin', () => this.stopAutoPlay());
            this.carousel.addEventListener('focusout', () => this.startAutoPlay());

            // Keyboard navigation
            this.carousel.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            });

            // Touch swipe
            this.setupTouchSwipe();
        }

        setupTouchSwipe() {
            let startX = 0;
            let startTime = 0;

            this.track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startTime = Date.now();
            }, { passive: true });

            this.track.addEventListener('touchend', (e) => {
                const endX = e.changedTouches[0].clientX;
                const deltaX = startX - endX;
                const deltaTime = Date.now() - startTime;

                // Minimum swipe distance and maximum time
                if (Math.abs(deltaX) > 50 && deltaTime < 300) {
                    if (deltaX > 0) this.next();
                    else this.prev();
                }
            }, { passive: true });
        }

        handleResize() {
            const newSlidesPerView = this.getSlidesPerView();
            if (newSlidesPerView !== this.slidesPerView) {
                this.slidesPerView = newSlidesPerView;
                this.maxIndex = Math.max(0, this.slides.length - this.slidesPerView);
                this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
                this.createDots();
                this.update();
            }
        }

        goTo(index) {
            if (this.isAnimating || index === this.currentIndex) return;

            this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
            this.update();
        }

        prev() {
            this.goTo(this.currentIndex - 1);
        }

        next() {
            this.goTo(this.currentIndex + 1);
        }

        update() {
            if (!this.track) return;

            const slideWidth = this.slides[0]?.offsetWidth || 0;
            const gap = 24; // CSS gap value in px
            const offset = this.currentIndex * (slideWidth + gap);

            this.track.style.transform = `translateX(-${offset}px)`;

            // Update buttons
            if (this.prevBtn) {
                this.prevBtn.disabled = this.currentIndex === 0;
            }
            if (this.nextBtn) {
                this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
            }

            // Update dots
            this.dots?.forEach((dot, i) => {
                dot.classList.toggle('active', i === this.currentIndex);
            });
        }

        startAutoPlay() {
            this.stopAutoPlay();
            // Don't autoplay on mobile (touch devices)
            if (window.matchMedia('(pointer: coarse)').matches) return;

            this.autoPlayTimer = setInterval(() => {
                if (this.currentIndex >= this.maxIndex) {
                    this.goTo(0);
                } else {
                    this.next();
                }
            }, 5000);
        }

        stopAutoPlay() {
            if (this.autoPlayTimer) {
                clearInterval(this.autoPlayTimer);
                this.autoPlayTimer = null;
            }
        }
    }

    // ==========================================================================
    // Image Comparison Slider (Before/After Gallery)
    // ==========================================================================
    class ImageComparisonSlider {
        constructor() {
            this.sliders = document.querySelectorAll('.comparison-slider');
            this.init();
        }

        init() {
            if (this.sliders.length === 0) return;
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            this.sliders.forEach(slider => this.setupSlider(slider));
        }

        setupSlider(slider) {
            const beforeEl = slider.querySelector('.before-image');
            const sliderHandle = slider.querySelector('.slider-handle');

            if (!beforeEl || !sliderHandle) return;

            let isDragging = false;
            const sliderRect = () => slider.getBoundingClientRect();

            const updatePosition = (clientX) => {
                const rect = sliderRect();
                let position = ((clientX - rect.left) / rect.width) * 100;
                position = Math.max(0, Math.min(100, position));

                beforeEl.style.width = `${position}%`;
                sliderHandle.style.left = `${position}%`;
                sliderHandle.setAttribute('aria-valuenow', Math.round(position));
            };

            // Mouse events
            const onMouseMove = (e) => {
                if (!isDragging) return;
                updatePosition(e.clientX);
            };

            const onMouseUp = () => {
                isDragging = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };

            // Touch events
            const onTouchMove = (e) => {
                if (!isDragging) return;
                updatePosition(e.touches[0].clientX);
            };

            const onTouchEnd = () => {
                isDragging = false;
                document.removeEventListener('touchmove', onTouchMove);
                document.removeEventListener('touchend', onTouchEnd);
            };

            // Start drag
            const startDrag = (clientX) => {
                isDragging = true;
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
                document.addEventListener('touchmove', onTouchMove, { passive: true });
                document.addEventListener('touchend', onTouchEnd);
                updatePosition(clientX);
            };

            // Handle click on slider track
            slider.addEventListener('click', (e) => {
                if (e.target === sliderHandle || sliderHandle.contains(e.target)) return;
                startDrag(e.clientX);
            });

            // Handle drag on handle
            sliderHandle.addEventListener('mousedown', (e) => {
                e.preventDefault();
                startDrag(e.clientX);
            });

            sliderHandle.addEventListener('touchstart', (e) => {
                startDrag(e.touches[0].clientX);
            }, { passive: true });

            // Keyboard support
            sliderHandle.addEventListener('keydown', (e) => {
                let position = parseInt(sliderHandle.getAttribute('aria-valuenow')) || 50;
                switch (e.key) {
                    case 'ArrowLeft':
                    case 'ArrowDown':
                        e.preventDefault();
                        position = Math.max(0, position - 5);
                        updatePosition((position / 100) * sliderRect().width + sliderRect().left);
                        break;
                    case 'ArrowRight':
                    case 'ArrowUp':
                        e.preventDefault();
                        position = Math.min(100, position + 5);
                        updatePosition((position / 100) * sliderRect().width + sliderRect().left);
                        break;
                    case 'Home':
                        e.preventDefault();
                        position = 0;
                        updatePosition(sliderRect().left);
                        break;
                    case 'End':
                        e.preventDefault();
                        position = 100;
                        updatePosition(sliderRect().right);
                        break;
                }
            });

            // Initialize at 50%
            updatePosition(sliderRect().left + sliderRect().width / 2);
        }
    }

    // ==========================================================================
    // FAQ Accordion Enhancement
    // ==========================================================================
    class FAQAccordion {
        constructor() {
            this.accordion = document.querySelector('.accordion');
            if (!this.accordion) return;

            this.items = this.accordion.querySelectorAll('details');
            this.init();
        }

        init() {
            this.items.forEach(item => {
                const summary = item.querySelector('summary');
                if (summary) {
                    summary.addEventListener('click', (e) => {
                        // Allow default details behavior but enhance
                        setTimeout(() => this.onToggle(item), 0);
                    });
                }
            });
        }

        onToggle(item) {
            const isOpen = item.hasAttribute('open');

            // Analytics
            if (isOpen && typeof gtag !== 'undefined') {
                const question = item.querySelector('summary')?.textContent?.trim();
                gtag('event', 'faq_open', { question });
            }
        }
    }

    // ==========================================================================
    // Initialize All Controllers
    // ==========================================================================
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize reveal animations
        window.revealController = new RevealController();

        // Initialize parallax (if any elements have data-parallax)
        window.parallaxController = new ParallaxController();

        // Initialize testimonial carousel
        window.testimonialCarousel = new TestimonialCarousel();

        // Initialize image comparison sliders
        window.imageComparisonSlider = new ImageComparisonSlider();

        // Initialize FAQ accordion
        window.faqAccordion = new FAQAccordion();

        // Expose refresh method for dynamic content
        window.refreshAnimations = () => {
            window.revealController?.refresh();
            window.testimonialCarousel = new TestimonialCarousel();
            window.imageComparisonSlider = new ImageComparisonSlider();
        };
    });

    // ==========================================================================
    // Utility: Smooth Scroll Polyfill for Safari
    // ==========================================================================
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
        script.onload = () => window.__forceSmoothScrollPolyfill__ && window.__forceSmoothScrollPolyfill__();
        document.head.appendChild(script);
    }

})();