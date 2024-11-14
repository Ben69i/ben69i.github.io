// Smooth scrolling effect
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Navbar for smaller screens
const menuIcon = document.getElementById('menu-icon');
const navbarLinks = document.getElementById('navbar-links');

menuIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Close the menu when a link is clicked (for mobile)
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbarLinks.classList.remove('active');
        }
    });
});
