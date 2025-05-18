// Preloader Script
window.addEventListener('load', function() {
    // Hide preloader after page loads
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('preloader-finish');

        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
