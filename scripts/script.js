// Add a subtle animation or hover effect (optional)
document.querySelector('.cta').addEventListener('mouseenter', () => {
  document.querySelector('.arrow').style.transform = 'translateX(4px)';
});

document.querySelector('.cta').addEventListener('mouseleave', () => {
  document.querySelector('.arrow').style.transform = 'translateX(0)';
});

//email address functionality
document.querySelector('.copy-btn').addEventListener('click', () => {
  navigator.clipboard.writeText('sabbarmoussa@gmail.com');
  alert('Email copied to clipboard!');
});

//live sites funcs

document.querySelectorAll('.live-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateX(4px)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateX(0)';
  });
});

// Navbar scroll behavior
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 100) {
    navbar.classList.add('navbar-expanded');
  } else {
    navbar.classList.remove('navbar-expanded');
  }
});

//swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });