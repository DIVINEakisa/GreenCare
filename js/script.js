// ===========================
// GreenCycle Rwanda - JavaScript
// Page Navigation & Functionality
// ===========================

// Mock Database for Demo
const exampleDB = {
    users: [],
    messages: [],
    subscriptions: [],
    feedback: []
};

// ===========================
// Page Navigation
// ===========================

function navigateTo(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

// ===========================
// Mobile Menu Toggle
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// ===========================
// Contact Form Handling
// ===========================

function handleContactForm(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Validation
    if (!fullName || !email || !subject || !message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Create message object
    const messageData = {
        id: Date.now(),
        fullName: fullName,
        email: email,
        phone: phone || 'Not provided',
        subject: subject,
        message: message,
        timestamp: new Date().toLocaleString()
    };

    // Add to mock database
    exampleDB.messages.push(messageData);

    // Log to console (for demo purposes)
    console.log('New message received:', messageData);
    console.log('All messages:', exampleDB.messages);

    // Show success message
    showFormMessage(
        'Thank you for your message! We will get back to you soon. 🎉',
        'success'
    );

    // Reset form
    document.getElementById('contactForm').reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
    }, 5000);
}

// ===========================
// Form Helper Functions
// ===========================

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.classList.remove('success', 'error');
    formMessage.classList.add(type);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===========================
// Smooth Navigation Enhancement
// ===========================

// Scroll to top when page loads
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===========================
// Add Active State to Nav Links
// ===========================

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove active class from all links
        navLinks.forEach(l => l.style.color = '');
        
        // Add active style to clicked link
        this.style.color = 'var(--primary-green)';
    });
});

// ===========================
// Add scroll animations for cards
// ===========================

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll(
        '.problem-card, .service-card, .value-item, .info-card, .about-card'
    );
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-in-out';
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', observeElements);

// ===========================
// Utility: Log Demo Features
// ===========================

console.log('%c🌱 Welcome to GreenCycle Rwanda!', 'font-size: 18px; color: #27ae60; font-weight: bold;');
console.log('%cDatabase Status:', 'font-size: 14px; color: #27ae60; font-weight: bold;');
console.log('Users:', exampleDB.users);
console.log('Messages:', exampleDB.messages);
console.log('Subscriptions:', exampleDB.subscriptions);
console.log('Feedback:', exampleDB.feedback);

// ===========================
// Export Database (for demo)
// ===========================

function exportDatabase() {
    const dataStr = JSON.stringify(exampleDB, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `greencycle-data-${new Date().getTime()}.json`;
    link.click();
}

// ===========================
// Keyboard Shortcuts
// ===========================

document.addEventListener('keydown', (e) => {
    // Home: Alt + H
    if (e.altKey && e.key === 'h') {
        navigateTo('home');
    }
    // Contact: Alt + C
    if (e.altKey && e.key === 'c') {
        navigateTo('contact');
    }
    // About: Alt + A
    if (e.altKey && e.key === 'a') {
        navigateTo('about');
    }
});

// ===========================
// Share Functionality
// ===========================

function shareOnSocial(platform) {
    const url = window.location.href;
    const title = 'GreenCycle Rwanda - Smart Waste Management';
    const text = 'Check out GreenCycle Rwanda, a smart waste management system improving waste separation in Rwanda!';

    let shareUrl = '';
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank');
    }
}

// ===========================
// Analytics Helper (for demo)
// ===========================

const pageViews = {
    home: 0,
    about: 0,
    'how-it-works': 0,
    services: 0,
    pilot: 0,
    contact: 0
};

function trackPageView(pageId) {
    if (pageViews.hasOwnProperty(pageId)) {
        pageViews[pageId]++;
        console.log(`Page views - ${pageId}: ${pageViews[pageId]}`);
    }
}

// Track page views when navigating
const originalNavigateTo = navigateTo;
navigateTo = function(pageId) {
    originalNavigateTo(pageId);
    trackPageView(pageId);
};

// ===========================
// Initialize Page
// ===========================

// Start on home page
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
    trackPageView('home');
});
