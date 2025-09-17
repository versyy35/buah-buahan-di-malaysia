// Enhanced particle animation for durian theme
function createDurianParticles() {
    const particles = document.querySelector('.particles');
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        // Add golden color variations
        const colors = [
            'rgba(255, 215, 0, 0.4)',
            'rgba(255, 165, 0, 0.4)',
            'rgba(255, 140, 0, 0.4)',
            'rgba(255, 255, 255, 0.4)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
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
document.querySelectorAll('.fact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.03)';
        
        // Add subtle shake animation to icon
        const icon = this.querySelector('.fact-icon');
        if (icon) {
            icon.style.animation = 'shake 0.5s ease-in-out';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        
        // Reset icon animation
        const icon = this.querySelector('.fact-icon');
        if (icon) {
            icon.style.animation = '';
        }
    });
});

// Step hover effects
document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        
        // Animate step number
        const number = this.querySelector('.step-number');
        if (number) {
            number.style.transform = 'scale(1.1) rotate(360deg)';
        }
    });
    
    step.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        
        // Reset step number
        const number = this.querySelector('.step-number');
        if (number) {
            number.style.transform = 'scale(1) rotate(0deg)';
        }
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
            
            // Special animation for fact cards
            if (entry.target.classList.contains('fact-card')) {
                entry.target.style.animationPlayState = 'running';
            }
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.fact-card, .hero-content, .growing-container').forEach(element => {
    observer.observe(element);
});

// Add shake animation for icons
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px) rotate(-5deg); }
        75% { transform: translateX(5px) rotate(5deg); }
    }
`;
document.head.appendChild(style);

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', function() {
    createDurianParticles();
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to hero image
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px) scale(1.05)`;
    }
});

// Add click effects
document.querySelectorAll('.fact-card, .step, .back-btn, .nav-link').forEach(element => {
    element.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    const focusableElements = document.querySelectorAll('.fact-card, .step, .nav-link, .back-btn');
    const currentFocus = document.activeElement;
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIndex = Array.from(focusableElements).indexOf(currentFocus);
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        focusableElements[nextIndex].focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIndex = Array.from(focusableElements).indexOf(currentFocus);
        const prevIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
        focusableElements[prevIndex].focus();
    }
});

// Make elements focusable for accessibility
document.querySelectorAll('.fact-card, .step').forEach(element => {
    element.setAttribute('tabindex', '0');
    element.addEventListener('focus', function() {
        this.style.outline = '3px solid rgba(255, 255, 255, 0.6)';
        this.style.outlineOffset = '5px';
    });
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Add floating animation to particles
function animateDurianParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const randomX = (Math.random() - 0.5) * 30;
        const randomY = (Math.random() - 0.5) * 30;
        const randomRotation = Math.random() * 360;
        particle.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
    });
}

// Animate particles every 4 seconds
setInterval(animateDurianParticles, 4000);

// Add golden sparkle effect when hovering over hero image
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    heroImage.addEventListener('mouseenter', function() {
        // Create sparkle particles
        for (let i = 0; i < 10; i++) {
            createSparkle(this);
        }
    });
}

function createSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = '#ffd700';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
    
    document.body.appendChild(sparkle);
    
    // Animate sparkle
    sparkle.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 1 },
        { transform: 'scale(1) rotate(180deg)', opacity: 1, offset: 0.5 },
        { transform: 'scale(0) rotate(360deg)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => sparkle.remove();
}

// Add durian-themed sound effects (visual feedback)
function addDurianEffect(element) {
    element.style.filter = 'brightness(1.2) contrast(1.1)';
    setTimeout(() => {
        element.style.filter = '';
    }, 200);
}

// Apply effects to interactive elements
document.querySelectorAll('.fact-card, .step, .nav-link').forEach(element => {
    element.addEventListener('click', function() {
        addDurianEffect(this);
    });
});

// Add text typing effect for hero subtitle
function typeText(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Initialize typing effect after page load
window.addEventListener('load', function() {
    setTimeout(() => {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            const originalText = subtitle.textContent;
            typeText(subtitle, originalText, 80);
        }
    }, 1500);
});