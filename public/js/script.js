// // Menu icon navbar
// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navbar.classList.toggle("active");
// };

// // Scroll section active link
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     let top = window.scrollY;

//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });

//     // Sticky navbar
//     let header = document.querySelector('.header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // Back to top button
//     let backToTop = document.querySelector('.back-to-top');
//     backToTop.classList.toggle('show', window.scrollY > 500);

//     // Remove menu icons
//     menuIcon.classList.remove("bx-x");
//     navbar.classList.remove("active");
// };

// // Smooth scroll
// navLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         document.querySelector(link.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Dark mode
// let darkModeIcon = document.querySelector('#darkMode-icon');

// // Load dark mode preference
// if (localStorage.getItem('dark-mode') === 'enabled') {
//     document.body.classList.add('dark-mode');
//     darkModeIcon.classList.add('bx-sun');
// }

// darkModeIcon.onclick = () => {
//     document.body.classList.toggle('dark-mode');
//     darkModeIcon.classList.toggle('bx-sun');
//     // Save preference to local storage
//     if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('dark-mode', 'enabled');
//     } else {
//         localStorage.removeItem('dark-mode');
//     }
// };

// // // Scroll reveal
// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });
// ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
// ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: "bottom" });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
// ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: "right" });

// // Back to top button functionality
// document.querySelector('.back-to-top').onclick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// };

// // Close responsive menu on link click
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         menuIcon.classList.remove('bx-x');
//         navbar.classList.remove('active');
//     });
// });

// const readMoreButtons = document.querySelectorAll('.read-more');

// readMoreButtons.forEach(button => {
//   button.addEventListener('click', toggleDetails);
// });

// function toggleDetails(event) {
//   const button = event.target;
//   const additionalDetails = button.previousElementSibling;
//   additionalDetails.style.display = additionalDetails.style.display === 'none' ? 'block' : 'none';
// }
// Menu icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Back to top button
    let backToTop = document.querySelector('.back-to-top');
    backToTop.classList.toggle('show', window.scrollY > 500);

    // Remove menu icons
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// Smooth scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode
let darkModeIcon = document.querySelector('#darkMode-icon');

// Load dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.add('bx-sun');
}

darkModeIcon.onclick = () => {
    document.body.classList.toggle('dark-mode');
    darkModeIcon.classList.toggle('bx-sun');
    // Save preference to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
};

// Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-img img,home-content h3, .home-content p, .about-content', { origin: "right" });

// Back to top button functionality
document.querySelector('.back-to-top').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Close responsive menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Toggle additional details visibility
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', toggleDetails);
});

function toggleDetails(event) {
  const button = event.target;
  const additionalDetails = button.previousElementSibling;
  additionalDetails.style.display = additionalDetails.style.display === 'none' ? 'block' : 'none';
}
