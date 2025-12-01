const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    burgerMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = '';
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

const slideshowDir = 'assets/';
const slideshowImageFiles = [
    'Cardiologist-pana.svg',
    'Doctor-pana.svg',
    'World Hepatitis Day-bro.svg',
    'Health professional team-pana.svg',
    'Medical care-pana.svg',
    'Winning the battle against Coronavirus-bro.svg',
    'Medicine-amico.svg',
    'Cardiologist-rafiki.svg',
    'Winning the battle against Coronavirus-rafiki.svg',
    'Doctors-bro.svg',
];

const slideshowImages = slideshowImageFiles.map(file => slideshowDir + file);
let currentImageIndex = 0;
const headerImage = document.getElementById('headerSlideshow');

function changeImage() {
    headerImage.classList.add('fade');
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
        headerImage.src = slideshowImages[currentImageIndex];
        headerImage.classList.remove('fade');
    }, 500);
}

setInterval(changeImage, 8000);

// Scroll animations - Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in classes
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    fadeElements.forEach(el => observer.observe(el));
});
