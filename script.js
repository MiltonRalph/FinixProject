// Menu Links javascript
const switchLink = document.querySelectorAll('.sec-link');

let switchLinkIndex = 0;

document.addEventListener('DOMContentLoaded', currentLink);
function currentLink() {
  if (switchLink.length > 0) {
    switchLink[switchLinkIndex].classList.add('active');
  }
}

function homePage() {
  switchLink.forEach((link, index) => {
    if (index == 0) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function aboutPage() {
  switchLink.forEach((link, index) => {
    if (index == 1) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function statPage() {
  switchLink.forEach((link, index) => {
    if (index == 2) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function servicePage() {
  switchLink.forEach((link, index) => {
    if (index == 3) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function projectPage() {
  switchLink.forEach((link, index) => {
    if (index == 4) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Toggler Javascript
const light = document.querySelector('body');
const contain2 = document.querySelector('.contain-2');
const secLinks = document.querySelectorAll('.sec-link');
const circleDiv = document.querySelectorAll('.circle');
const span = document.querySelector(`input[type='checkbox'] + span`);
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const subHeading = document.querySelector('.sub-heading');
const lead = document.querySelector('.lead');
const lead1 = document.querySelector('.lead-1');
const icon = document.querySelector('.fa-sun');
const ball = document.querySelector('.toggle-ball');

function lightMode() {
  light.style.background = '#fff';
  light.style.color = '#363753';
  circleDiv.forEach((circle) => {
    circle.style.background = '#fff';
  });
  secLinks.forEach((link) => {
    link.style.color = '#363753';
  });
  span.style.color = 'rgba(54, 55, 83, 0.75)';
  box1.style.background = '#fff';
  box2.style.background = '#fff';
  contain2.style.background = '#fff';
  subHeading.style.color = 'rgba(54, 55, 83, 0.85)';
  lead.style.color = 'rgba(54, 55, 83, 0.75)';
  lead1.style.color = 'rgba(54, 55, 83, 0.75)';
  ball.classList.remove('left');
}

function darkMode() {
  light.style.background = '#292929';
  light.style.color = '#fff';
  circleDiv.forEach((circle) => {
    circle.style.background = '#292929';
  });
  box2.style.background = '#292929';
  box1.style.background = '#292929';
  contain2.style.background = '#292929';
  secLinks.forEach((link) => {
    link.style.color = '#fff';
  });
  span.style.color = '#fff';
  subHeading.style.color = '#fff';
  lead.style.color = '#fff';
  lead1.style.color = '#fff';
  icon.style.color = '#fff';
  ball.classList.add('left');
}

// Image Slide Javasript
const slides = document.querySelectorAll('.image-holder img');
let slideIndex = 0;
let intervalID = null;
document.addEventListener('DOMContentLoaded', initializeSlider);
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add('displaySlide');
    // to automatically switch images
    intervalID = setInterval(nextSlide, 15000);
  }
}
// to show the images when the button is clicked
function showImage(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide');
}
// to control the images using the buttons
function prevSlide() {
  // clearInterval(intervalID);
  slideIndex--;
  showImage(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showImage(slideIndex);
}

// Projects Javascript

const initSlider = () => {
  const projectList = document.querySelector('.contain-8 .wrapper-10');
  const slideButtons = document.querySelectorAll(
    '.button-holder .slide-button'
  );
  const maxScrollLeft = projectList.scrollWidth - projectList.clientWidth;

  // Slide projects according to the slide button clicks
  slideButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.id === 'prev' ? -1 : 1;
      const scrollAmount = projectList.clientWidth * direction;
      projectList.scrollBy({ left: scrollAmount, behaviour: 'smooth' });
      console.log(button);
    });
  });

  // Hides button if the maximum scroll width is reached
  const handleSlideButtons = () => {
    slideButtons[0].style.visibility =
      projectList.scrollLeft <= 0 ? 'hidden' : 'visible';
    slideButtons[1].style.visibility =
      projectList.scrollLeft >= maxScrollLeft ? 'hidden' : 'visible';
  };

  projectList.addEventListener('scroll', () => {
    handleSlideButtons();
  });
};
window.addEventListener('load', initSlider);
