// Navbar scroll behavior
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 1) {
    navbar.classList.add("navbar-expanded");
  } else {
    navbar.classList.remove("navbar-expanded");
  }
});