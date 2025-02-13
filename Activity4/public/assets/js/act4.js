document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav-links');

    menuToggle.onclick = () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('open'); 
    };
});