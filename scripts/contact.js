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

const sections = document.querySelectorAll("section[id]");
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
    const scrollTarget =
      link.dataset.scrollTarget ||
      (link.hash ? link.hash.replace("#", "") : "");

    if (current && scrollTarget === current) {
      link.classList.add("active");
    }
  });
});

// Burger Menu Toggle
const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLinksForMenu = document.querySelectorAll(".nav-link");

// Toggle menu when burger is clicked
burgerMenu?.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
navLinksForMenu.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
    burgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// EmailJS script
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-btn");
  const contactForm = document.getElementById("contact-form");

  if (submitBtn && contactForm) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Validate form
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Get form values
      const emailParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      const service_ID = "service_60wzwti";
      const template_ID = "template_a7nn7ra";

      // Disable button during submission
      submitBtn.disabled = true;
      submitBtn.querySelector(".glowing-span").textContent = "Sending...";

      // Send email
      emailjs
        .send(service_ID, template_ID, emailParams)
        .then((res) => {
          // Clear form
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          // Show success message
          alert("Message sent successfully! I'll get back to you soon.");
          console.log("Email sent successfully:", res.status, res.text);

          // Reset button
          submitBtn.disabled = false;
          submitBtn.querySelector(".glowing-span").textContent = "Send message";
        })
        .catch((err) => {
          console.error("EmailJS error:", err);
          alert("Failed to send message. Please try again or contact me directly at sabbarmoussa@gmail.com");
          
          // Reset button
          submitBtn.disabled = false;
          submitBtn.querySelector(".glowing-span").textContent = "Send message";
        });
    });
  }
});
