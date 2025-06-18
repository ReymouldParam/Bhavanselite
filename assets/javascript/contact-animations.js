// Contact Page Professional Animations JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SCROLL TRIGGERED ANIMATIONS =====
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all scroll-animate elements
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(el => observer.observe(el));

    // ===== PARALLAX EFFECT =====
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach(element => {
            const speed = 0.3;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // ===== FORM ANIMATIONS =====
    const form = document.querySelector('form');
    const formInputs = document.querySelectorAll('.form-input-animate');
    const submitButton = document.querySelector('button[type="submit"]');

    // Enhanced form input animations (without floating labels)
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            this.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            this.classList.remove('focused');
        });

        // Real-time content detection
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.add('has-content');
            } else {
                this.classList.remove('has-content');
            }
        });
    });

    // ===== FORM SUBMISSION ANIMATION =====
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            submitButton.classList.add('loading');
            submitButton.textContent = 'Sending...';
            
            // Simulate form submission
            setTimeout(() => {
                submitButton.classList.remove('loading');
                submitButton.textContent = 'Message Sent!';
                submitButton.style.background = '#4CAF50';
                submitButton.style.color = 'white';
                
                // Show success animation
                showSuccessMessage();
                
                // Reset form after delay
                setTimeout(() => {
                    submitButton.textContent = 'Submit';
                    submitButton.style.background = '#f6b733';
                    submitButton.style.color = '#000';
                    form.reset();
                    formInputs.forEach(input => input.classList.remove('has-content'));
                }, 3000);
            }, 2000);
        });
    }

    // ===== SUCCESS MESSAGE ANIMATION =====
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message animate-bounce-in';
        successDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 10000;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
            ">
                ✓ Message sent successfully!
            </div>
        `;
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    // ===== BUTTON RIPPLE EFFECT =====
    const buttons = document.querySelectorAll('.btn-animate');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ===== IMAGE HOVER ENHANCEMENTS =====
    const images = document.querySelectorAll('.image-hover');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        // Add click zoom effect
        img.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });

    // ===== TEXT REVEAL ANIMATION =====
    function animateTextReveal() {
        const textElements = document.querySelectorAll('.text-reveal');
        textElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            element.className = 'text-reveal';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.animationDelay = `${index * 0.05}s`;
                element.appendChild(span);
            });
        });
    }

    // ===== STAGGER ANIMATION ENHANCEMENT =====
    function enhanceStaggerAnimations() {
        const staggerContainers = document.querySelectorAll('.stagger-animation');
        
        staggerContainers.forEach(container => {
            const elements = Array.from(container.children);
            elements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.15}s`;
            });
        });
    }

    // ===== FLOATING ANIMATION VARIATIONS =====
    const floatingElements = document.querySelectorAll('.animate-float');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.8}s`;
        element.style.animationDuration = `${3 + index * 0.5}s`;
    });

    // ===== SMOOTH SCROLL =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== PERFORMANCE OPTIMIZATION =====
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    const throttledScroll = throttle(requestTick, 16);
    window.addEventListener('scroll', throttledScroll);

    // ===== PAGE LOAD ANIMATIONS =====
    window.addEventListener('load', function() {
        document.body.classList.add('page-loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            animateTextReveal();
            enhanceStaggerAnimations();
        }, 100);
    });

    // ===== REVEAL ON SCROLL =====
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.scroll-animate');
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }

    // Call reveal function on scroll
    window.addEventListener('scroll', throttle(revealOnScroll, 16));

    // ===== INITIALIZATION =====
    setTimeout(() => {
        revealOnScroll();
        enhanceStaggerAnimations();
    }, 100);

    // ===== ADDITIONAL CSS FOR ENHANCED EFFECTS =====
    const additionalCSS = `
        .image-hover.clicked {
            transform: scale(1.1);
        }
        
        .success-message {
            animation: slideInFromTop 0.5s ease-out;
        }
        
        .focused {
            transform: translateY(-2px);
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);

    console.log('🎨 Contact page animations initialized successfully!');
}); 