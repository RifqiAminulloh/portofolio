// Greeting Animation
const greetings = ["Halo", "Bonjour", "Hello", "Ciao", "こんにちは", "안녕하세요", "Hola", "Guten Tag"];
const greetingText = document.getElementById('greeting-text');
let index = 0;

function showGreeting() {
    greetingText.textContent = greetings[index];
    index = (index + 1) % greetings.length;
}

setInterval(showGreeting, 500); // Ganti teks setiap 500ms
setTimeout(() => {
    document.getElementById('greeting').remove();
}, 3000); // Hapus elemen setelah 3 detik

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Animasi teks di hero section
    gsap.from('.fade-in', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
    });

    // Animasi scroll-triggered
    gsap.utils.toArray('.portfolio-item, .about-content, .skills-grid, .contact-form').forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    });

    // Header background change on scroll
    ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        onEnter: () => document.querySelector('header').style.backgroundColor = 'rgba(51, 51, 51, 0.9)',
        onLeaveBack: () => document.querySelector('header').style.backgroundColor = 'transparent',
    });

    // Initialize Leaflet map
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
