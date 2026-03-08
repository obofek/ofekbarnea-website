// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked (skip dropdown parent)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (link.closest('.nav-dropdown') && link.parentElement.classList.contains('nav-dropdown')) return;
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Showcase Swiper coverflow carousel
function initShowcaseSwiper() {
  const el = document.querySelector('.showcase-swiper');
  if (!el || typeof Swiper === 'undefined') return;

  new Swiper('.showcase-swiper', {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

if (document.readyState === 'complete') {
  initShowcaseSwiper();
} else {
  window.addEventListener('load', initShowcaseSwiper);
}

// Mobile dropdown toggle
document.querySelectorAll('.nav-dropdown > a').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth > 768) return;
    e.preventDefault();
    trigger.parentElement.classList.toggle('open');
  });
});
