let lastScrollY = window.scrollY;

document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const navContainer = document.querySelector('.nav-container');
    const navHeight = navContainer ? navContainer.offsetHeight : 0;
    const currentScrollY = window.scrollY;

    if (currentScrollY > navHeight && currentScrollY > lastScrollY) {
        header.classList.add('is-scrolled');
    } else if (currentScrollY < lastScrollY) {
        header.classList.remove('is-scrolled');
    }

    lastScrollY = currentScrollY;
});


// Select all anchor links with href attributes starting with '#'
const links = document.querySelectorAll('a[href^="#"]');

// Loop through the links
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {

        // Prevent default action
        event.preventDefault();

        // add 'active' class to the clicked link

        // Remove 'active' class from any element that currently has it
        const activeElement = document.querySelector('a.active');
        if (activeElement) {
            activeElement.classList.remove('active');
        }
        // Add 'active' class to the clicked link
        this.classList.add('active');


        // Get the target element
        const target = document.querySelector(this.getAttribute('href'));

        // Scroll to the target element minus the height of the header
        window.scrollTo({
            top: target.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
        // on scrollTo complete, remove 'is-scrolled' from header
        setTimeout(() => {
            document.querySelector('header').classList.remove('is-scrolled');
        }, 1000);
        
    });
}

// use intersection observer to add a class and animate elements when their parent is in view
// Select all elements with the class 'animate'
const animateElements = document.querySelectorAll('.animate');
// Loop through the elements
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // observer.unobserve(entry.target);
        }
        if (!entry.isIntersecting) {
            entry.target.classList.remove('in-view');
        }
    });
}, {
    threshold: 0.5
});
// Observe each element
animateElements.forEach(animateElement => {
    observer.observe(animateElement);
});


// Select all sections with a data-bg-color attribute
const sections = document.querySelectorAll('section[data-bg-color]');

// Create an intersection observer to detect when sections enter the viewport
const bgColorObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the background color from the data attribute
            const bgColor = entry.target.getAttribute('data-bg-color');
            // Animate the background color of the body
            document.body.style.transition = 'background-color 0.5s';
            document.body.style.backgroundColor = bgColor;
        }
    });
}, {
    threshold: 0.5
});

// Observe each section
sections.forEach(section => {
    bgColorObserver.observe(section);
});
