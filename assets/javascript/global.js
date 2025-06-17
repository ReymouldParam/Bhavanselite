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
