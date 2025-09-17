// Enhanced particle animation
function createParticles() {
    const particles = document.querySelector('.particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particles.appendChild(particle);
    }
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced card hover effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for scroll animations
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add random floating animation to particles
function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

// Animate particles every 3 seconds
setInterval(animateParticles, 3000);

// Add parallax effect to header
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add click sound effect (visual feedback)
document.querySelectorAll('.card, .nav-link, .nav-logo').forEach(element => {
    element.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const cards = document.querySelectorAll('.card');
    const currentFocus = document.activeElement;
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIndex = Array.from(cards).indexOf(currentFocus);
        const nextIndex = (currentIndex + 1) % cards.length;
        cards[nextIndex].focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIndex = Array.from(cards).indexOf(currentFocus);
        const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
        cards[prevIndex].focus();
    } else if (e.key === 'Enter' && currentFocus.classList.contains('card')) {
        currentFocus.click();
    }
});

// Make cards focusable
document.querySelectorAll('.card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('focus', function() {
        this.style.outline = '3px solid rgba(255, 255, 255, 0.5)';
        this.style.outlineOffset = '5px';
    });
    card.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});