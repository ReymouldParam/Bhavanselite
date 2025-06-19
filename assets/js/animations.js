// Best-in-class scroll-based and staggered animations for rooms and discover pages (except discover banner)

document.addEventListener('DOMContentLoaded', () => {
    // Helper: Add advanced animation classes to elements
    function addAdvancedAnimationClasses() {
        // Room sections (parallax for block, staggered for children)
        const classicRooms = document.querySelectorAll('.classic-room');
        const superiorRooms = document.querySelectorAll('.superior-room');
        const allRooms = [...classicRooms, ...superiorRooms];
        allRooms.forEach((room, i) => {
            room.classList.add('ani-parallax-up', 'ani-delay-' + (i % 2));
            // Animate children: title, desc, amenities, thumbs, main-img
            const title = room.querySelector('.room-title');
            const desc = room.querySelector('.room-desc');
            const amenities = room.querySelector('.room-amenities');
            const thumbs = room.querySelector('.room-thumbs');
            const mainImg = room.querySelector('.room-main-img, .room-main-img2');
            if (title) title.classList.add('ani-slide-left', 'ani-delay-0');
            if (desc) desc.classList.add('ani-fade-stagger', 'ani-delay-1');
            if (amenities) amenities.classList.add('ani-fade-stagger', 'ani-delay-2');
            if (thumbs) thumbs.classList.add('ani-slide-right', 'ani-delay-3');
            if (mainImg) mainImg.classList.add('ani-bounce-up', 'ani-delay-4');
        });

        // Amenities section
        const amenitiesSection = document.querySelector('.amenities-section');
        if (amenitiesSection) amenitiesSection.classList.add('ani-slide-left', 'ani-delay-0');
        const amenitiesList = document.querySelectorAll('.amenities-content ul li');
        amenitiesList.forEach((li, i) => {
            li.classList.add('ani-fade-stagger', 'ani-delay-' + (i % 4));
        });
        const carouselImgs = document.querySelectorAll('.carousel-slide img');
        carouselImgs.forEach((img, i) => {
            img.classList.add('ani-bounce-up', 'ani-delay-' + (i % 3));
        });

        // Location highlights
        const locationBoxes = document.querySelectorAll('.location-box');
        locationBoxes.forEach((box, i) => {
            box.classList.add('ani-bounce-up', 'ani-delay-' + (i % 4));
        });

        // Hotel booking section
        const hotelImage = document.querySelector('.hotel-image');
        const bookingText = document.querySelector('.booking-text');
        if (hotelImage) hotelImage.classList.add('ani-slide-left', 'ani-delay-0');
        if (bookingText) bookingText.classList.add('ani-slide-right', 'ani-delay-1');

        // Footer images
        const footerImgs = document.querySelectorAll('.footer-left img');
        footerImgs.forEach((img, i) => {
            img.classList.add('ani-bounce-up', 'ani-delay-' + (i % 3));
        });

        // Footer contact and links
        const footerContacts = document.querySelectorAll('.footer-contact .contact-item');
        footerContacts.forEach((item, i) => {
            item.classList.add('ani-fade-stagger', 'ani-delay-' + (i % 3));
        });
        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks.forEach((link, i) => {
            link.classList.add('ani-fade-stagger', 'ani-delay-' + (i % 4));
        });

        // Discover section (skip .contact-hero)
        const discoverSection = document.querySelector('.discover-section');
        if (discoverSection) discoverSection.classList.add('ani-parallax-up', 'ani-delay-0');
        const discoverText = document.querySelector('.discover-text');
        const discoverImage = document.querySelector('.discover-image');
        if (discoverText) discoverText.classList.add('ani-slide-left', 'ani-delay-1');
        if (discoverImage) discoverImage.classList.add('ani-bounce-up', 'ani-delay-2');

        // Room highlight section
        const roomHighlight = document.querySelector('.room-highlight-section');
        if (roomHighlight) roomHighlight.classList.add('ani-parallax-up', 'ani-delay-0');
        const roomLeftImg = document.querySelector('.room-left-image');
        const roomRightText = document.querySelector('.room-right-text');
        if (roomLeftImg) roomLeftImg.classList.add('ani-bounce-up', 'ani-delay-1');
        if (roomRightText) roomRightText.classList.add('ani-slide-right', 'ani-delay-2');
        const roomBlocks = document.querySelectorAll('.room-block');
        roomBlocks.forEach((block, i) => {
            block.classList.add('ani-fade-stagger', 'ani-delay-' + (i % 3));
        });

        // Offer banner section
        const offerBanner = document.querySelector('.offer-banner-section');
        if (offerBanner) offerBanner.classList.add('ani-parallax-up', 'ani-delay-0');
        const offerLeftBar = document.querySelector('.offer-left-bar');
        const offerCarousel = document.querySelector('.offer-carousel-wrapper');
        const offerTextBox = document.querySelector('.offer-text-box');
        if (offerLeftBar) offerLeftBar.classList.add('ani-slide-left', 'ani-delay-1');
        if (offerCarousel) offerCarousel.classList.add('ani-bounce-up', 'ani-delay-2');
        if (offerTextBox) offerTextBox.classList.add('ani-slide-right', 'ani-delay-3');
        const offerImgs = document.querySelectorAll('.offer-carousel-css img');
        offerImgs.forEach((img, i) => {
            img.classList.add('ani-bounce-up', 'ani-delay-' + (i % 3));
        });
        const offerTextBoxChildren = offerTextBox ? offerTextBox.querySelectorAll('h4, .subtext, h2, .discount, button') : [];
        offerTextBoxChildren.forEach((el, i) => {
            el.classList.add('ani-fade-stagger', 'ani-delay-' + (i % 5));
        });

        // Proximity section (footer top)
        const proximityContainer = document.querySelector('.proximity-container');
        if (proximityContainer) proximityContainer.classList.add('ani-parallax-up', 'ani-delay-0');
        const proximityTitle = document.querySelector('.proximity-title');
        if (proximityTitle) proximityTitle.classList.add('ani-slide-left', 'ani-delay-1');
        const proximityItems = document.querySelectorAll('.proximity-item');
        proximityItems.forEach((item, i) => {
            item.classList.add('ani-bounce-up', 'ani-delay-' + (i % 4));
        });
    }

    // Intersection Observer to trigger animations
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    // Add advanced animation classes
    addAdvancedAnimationClasses();

    // Observe all elements with advanced animation classes
    const animatedEls = document.querySelectorAll('[class*="ani-"]');
    animatedEls.forEach(el => {
        observer.observe(el);
    });
});