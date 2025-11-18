// Add a subtle animation or hover effect (optional)
const ctaHover = document.querySelector(".cta");
ctaHover?.addEventListener("mouseenter", () => {
  document.querySelector(".arrow").style.transform = "translateX(4px)";
});

ctaHover?.addEventListener("mouseleave", () => {
  document.querySelector(".arrow").style.transform = "translateX(0)";
});

// email address functionality
const copyBtn = document.querySelector(".copy-btn");
copyBtn?.addEventListener("click", () => {
  navigator.clipboard.writeText("sabbarmoussa@gmail.com");
  alert("Email copied to clipboard!");
});

// live sites funcs

const liveLinks = document.querySelectorAll(".live-link");
liveLinks?.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateX(4px)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateX(0)";
  });
});

// Navbar scroll behavior
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 1) {
    navbar.classList.add("navbar-expanded");
  } else {
    navbar.classList.remove("navbar-expanded");
  }
});

//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

//Nav link active state on scroll

const Sections = document.querySelectorAll("section[id]");
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
    const scrollTarget =
      link.dataset.scrollTarget ||
      (link.hash ? link.hash.replace("#", "") : "");

    if (current && scrollTarget === current) {
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

const text = document.getElementById("interactive-text");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveX = (x - centerX) / 20; // strength of movement
  const moveY = (y - centerY) / 20;

  text.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
