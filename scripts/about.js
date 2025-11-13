// Navbar scroll behavior
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 1) {
    navbar.classList.add("navbar-expanded");
  } else {
    navbar.classList.remove("navbar-expanded");
  }
});

//Nav link active state on scroll

const Sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  // Get current scroll position
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  const isAtBottom =
    window.innerHeight + scrollPosition >=
    document.documentElement.scrollHeight - 50;

  if (isAtBottom) {
    const lastSection = Sections[Sections.length - 1];
    current = lastSection.getAttribute("id");
  } else {
    Sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (current && link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Burger Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinksForMenu = document.querySelectorAll('.nav-link');

// Toggle menu when burger is clicked
burgerMenu?.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinksForMenu.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
    burgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  }
});