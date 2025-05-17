// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle functionality
    const menuIcon = document.querySelector('#menu-icon')
    const navbar = document.querySelector('.navbar')
    const header = document.querySelector('.header')

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x')
        navbar.classList.toggle('active')
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x')
            navbar.classList.remove('active')
        })
    })

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })

    // Scroll reveal animation
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 400,
        reset: true
    })

    sr.reveal('.home-content', { origin: 'left' })
    sr.reveal('.home-img', { origin: 'right' })
    sr.reveal('.about-img', { origin: 'left' })
    sr.reveal('.about-content', { origin: 'right' })
    sr.reveal('.heading', { origin: 'top' })
    sr.reveal('.services-box', { origin: 'bottom', interval: 200 })
    sr.reveal('.project-box', { origin: 'bottom', interval: 200 })
    sr.reveal('.contact-sec form', { origin: 'bottom' })
    sr.reveal('.footer .social-icons, .footer ul, .footer .copyright', {
        origin: 'top',
        interval: 200
    })
})