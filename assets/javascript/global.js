// header full width js
const headerWrapper = document.querySelector(".header-wrapper");
const headerContainer = document.querySelector(".header-container");
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        headerWrapper.classList.add("scrolled");
        headerContainer.classList.add("scrolled-container");
        navBar.classList.add("hide-nav");
    } else {
        headerWrapper.classList.remove("scrolled");
        headerContainer.classList.remove("scrolled-container");
        navBar.classList.remove("hide-nav");
    }
});
// Overlay container of header
// Show menu overlay when menu section is clicked
document.querySelector('.menu-section').addEventListener('click', function () {
    document.getElementById('overlayMenu').classList.add('active');
    showImage('home'); // Show Home images by default
});
// Close menu when close button is clicked
function closeMenu() {
    document.getElementById('overlayMenu').classList.remove('active');
}

// Update image on menu item click
let currentSection = null;

function showImage(section) {
    if (currentSection === section) return; // Skip if already shown
    currentSection = section;


    // Update active class on menu items
    const menuItems = document.querySelectorAll('.menu-left .menu-items li');
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (
            item.textContent.trim().toLowerCase() === section.toLowerCase() ||
            item.querySelector('strong')?.textContent.trim().toLowerCase() === section.toLowerCase()
        ) {
            item.classList.add('active');
        }
    });

    const imageMap = {
        home: ['assets/images/section1-img1.png', 'assets/images/section1-img2.png'],
        discover: ['assets/images/stay-img1.png', 'assets/images/stay-img2.png', 'assets/images/stay-img3.png'],
        rooms: ['assets/images/super-room3.png', 'assets/images/super-room1.png', 'assets/images/super-room1.png'],
        bathroom: ['assets/images/bathroom.png', 'assets/images/outdoor.png'],
        amenities: ['assets/images/amenities.jpg'],
        contact: ['assets/images/hotel-view.png']
    };

    const container = document.getElementById('menuImagesContainer');
    container.innerHTML = '';

    const images = imageMap[section] || ['assets/images/home.jpg'];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = section;
        img.classList.add('menu-image');
        container.appendChild(img);
    });
}
