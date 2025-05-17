// Preloader Script
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish');
    
    setTimeout(() => {
        preloader.style.display = 'none';
        
        // Animate content after preloader is gone
        document.querySelectorAll('.animate-on-load').forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate');
            }, 200 * index);
        });
    }, 1500);
});
