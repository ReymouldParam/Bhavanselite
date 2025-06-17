const words = ["BLISS", "PEACE", "SERENITY"];

$(document).ready(function () {
    $('.slider-container').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        cssEase: 'ease-in-out',
        swipeToSlide: true,
        adaptiveHeight: true,
        vertical: false,
        verticalSwiping: false,
        lazyLoad: 'ondemand'
    });

    $('.slider-container').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        const wordEl = $('#dynamic-word');
        wordEl.fadeOut(300, function () {
            wordEl.text(words[nextSlide % words.length]).fadeIn(300);
        });
    });
});
// section 2
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("bhavan-in-view");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
    });

    document.querySelectorAll(".animate-bhavan").forEach(el => {
        observer.observe(el);
    });
});


// section5,section6
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".room-detail-section");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;

                    section.querySelector(".room-info")?.classList.add("animate-left");
                    section.querySelector(".room-main-img")?.classList.add("animate-up");

                    const galleryImgs = section.querySelectorAll(".room-gallery img");
                    galleryImgs.forEach(img => img.classList.add("animate-right"));

                    observer.unobserve(section);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
});
// section 7
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target;

                    // Animate parts of room-item
                    if (item.classList.contains("room-item")) {
                        const photo = item.querySelector(".room-photo");
                        const desc = item.querySelector(".room-description");

                        if (item.classList.contains("room-reversed")) {
                            photo?.classList.add("animate-right");
                            desc?.classList.add("animate-left");
                        } else {
                            photo?.classList.add("animate-left");
                            desc?.classList.add("animate-right");
                        }
                    }

                    // Animate parts of feature-item
                    if (item.classList.contains("feature-item")) {
                        const image = item.querySelector(".feature-image");
                        const text = item.querySelector(".feature-text");

                        image?.classList.add("animate-left");
                        text?.classList.add("animate-up");
                    }

                    observer.unobserve(item); // Animate once
                }
            });
        },
        { threshold: 0.2 }
    );

    // Observe each block
    document.querySelectorAll(".room-item, .feature-item").forEach(el => {
        observer.observe(el);
    });
});
// section 8
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => observer.observe(el));
});

// Vertical Carousel for Section 3
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.overlap-carousel');
    const images = carousel.querySelectorAll('.overlap-image');
    let currentIndex = 0;
    let isAnimating = false;

    // Set initial state
    images[0].classList.add('active');

    function nextSlide() {
        if (isAnimating) return;
        isAnimating = true;

        const currentImage = images[currentIndex];
        currentImage.classList.remove('active');
        currentImage.classList.add('prev');

        currentIndex = (currentIndex + 1) % images.length;
        const nextImage = images[currentIndex];
        nextImage.classList.add('active');

        // Reset animation state after transition
        setTimeout(() => {
            currentImage.classList.remove('prev');
            isAnimating = false;
        }, 800);
    }

    // Auto-advance slides every 3 seconds
    setInterval(nextSlide, 3000);
});
