
// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Section 4 animations
    const roomBoxes = document.querySelectorAll('.room-box');
    roomBoxes.forEach(box => {
        observer.observe(box);
    });

}); 