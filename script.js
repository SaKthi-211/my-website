// Typing effect
const typed = new Typed('.home-typed', {
    strings: ['Student', 'Developer', 'Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').style.background = window.scrollY > 50 ? 'rgba(102, 126, 234, 0.95)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

// Skill bars animation
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-per');
    skills.forEach(skill => {
        const skillTop = skill.parentElement.parentElement.getBoundingClientRect().top;
        if (skillTop < window.innerHeight - 100) {
            skill.style.width = skill.getAttribute('data-width') || '0%';
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form (demo)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! Thanks for reaching out.');
});
