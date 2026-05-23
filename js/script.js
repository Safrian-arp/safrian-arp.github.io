/* ==========================================
   TYPING ANIMATION
   ========================================== */
const typingTexts = [
  "Database Management Officer",
  "Data Analytics Expert",
  "SQL Specialist",
  "Power BI Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const deletingSpeed = 40;
const pauseTime = 1500;

function typeText() {
  const typingElement = document.getElementById('typing-text');
  const currentText = typingTexts[textIndex];
  
  if (!isDeleting) {
    if (charIndex < currentText.length) {
      typingElement.textContent += currentText[charIndex];
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      isDeleting = true;
      setTimeout(typeText, pauseTime);
    }
  } else {
    if (charIndex > 0) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeText, deletingSpeed);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % typingTexts.length;
      setTimeout(typeText, pauseTime);
    }
  }
}

/* ==========================================
   SCROLL & NAVIGATION
   ========================================== */
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ==========================================
   SMOOTH SCROLL
   ========================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.mobile-menu').classList.remove('open');
    }
  });
});

/* ==========================================
   MOBILE MENU TOGGLE
   ========================================== */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });
}

if (mobileClose) {
  mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
}

/* ==========================================
   DARK MODE TOGGLE
   ========================================== */
const darkToggle = document.querySelector('.dark-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    darkToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
  });

  // Set initial emoji
  darkToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

/* ==========================================
   LANGUAGE TOGGLE
   ========================================== */
const langBtns = document.querySelectorAll('.lang-btn');
const currentLang = localStorage.getItem('language') || 'id';

langBtns.forEach(btn => {
  btn.classList.remove('active');
  if (btn.getAttribute('data-lang') === currentLang) {
    btn.classList.add('active');
  }
  
  btn.addEventListener('click', () => {
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    localStorage.setItem('language', btn.getAttribute('data-lang'));
    // Add language switching logic here
  });
});

/* ==========================================
   INITIALIZE
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  typeText();
});