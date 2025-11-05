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

const sections = document.querySelectorAll("section");
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
    const lastSection = sections[sections.length - 1];
    current = lastSection.getAttribute("id");
  } else {
    sections.forEach((section) => {
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