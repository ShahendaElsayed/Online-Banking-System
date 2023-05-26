const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Show the initial slide
showSlide(currentSlide);
window.addEventListener('scroll', function() {
  var navLinks = document.querySelectorAll('.nav-links ul li a');
  for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.toggle('scrolled', window.scrollY > 0);
  }
});
window.addEventListener('scroll', function() {
  var nav = document.querySelector('.nav');
  nav.classList.toggle('scrolled', window.scrollY > 0);
});
