function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// Optional scroll effect for navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});