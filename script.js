// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Floating Icons Animation
const floatingIconsContainer = document.querySelector('.floating-icons');
const icons = ['fab fa-youtube', 'fab fa-amazon', 'fab fa-apple', 'fas fa-film', 
               'fas fa-tv', 'fas fa-palette', 'fas fa-trophy'];

for (let i = 0; i < 10; i++) {
    const icon = document.createElement('i');
    icon.className = icons[Math.floor(Math.random() * icons.length)] + ' floating-icon';
    icon.style.top = `${Math.random() * 100}%`;
    icon.style.left = `${Math.random() * 100}%`;
    icon.style.fontSize = `${Math.random() * 1 + 1.5}rem`;
    icon.style.animationDuration = `${Math.random() * 10 + 10}s`;
    icon.style.animationDelay = `${Math.random() * 5}s`;
    floatingIconsContainer.appendChild(icon);
}

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-float');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.animate-float').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// WhatsApp Tracking
document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
    link.addEventListener('click', function() {
        const planName = this.getAttribute('href').includes('text=') ? 
                        decodeURIComponent(this.getAttribute('href').split('text=')[1]) : 
                        'Plano Geral';
        console.log(`WhatsApp clicked for: ${planName}`);
    });
});

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add WhatsApp button to all service cards if not present
    document.querySelectorAll('.service-card').forEach(card => {
        const btn = card.querySelector('.service-btn');
        if (btn && !btn.getAttribute('href').includes('whatsapp')) {
            btn.setAttribute('href', 'https://wa.me/5511962094589?text=Olá!%20Quero%20comprar%20um%20plano%20de%20streaming');
        }
    });
}); 