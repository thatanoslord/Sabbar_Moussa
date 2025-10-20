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