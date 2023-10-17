// Navbar in mobile menu 
// Selecting the menu and menuLinks from the DOM to manage the mobile menu toggle
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Adding an event listener to toggle the menu display on click
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Changing slide in Our Moto
// Select the slider container and individual slides for the image slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0; // Variable to keep track of the current slide being displayed

// Function to show a specific slide, hiding all others
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Function to progress to the next slide in the slider
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Setting an interval to auto-play slides, changing every 3 seconds
setInterval(nextSlide, 3000);

// Display the initial slide at the start
showSlide(currentSlide);


// About us
// Toggling the visibility of extra content in the "About Us" section
var extraContent = document.getElementById("extraContent");
extraContent.classList.add("hidden-content");

// Adding an event listener to the "Read More" button to toggle content visibility
document.getElementById("readMoreBtn").addEventListener("click", function () {
    if (extraContent.classList.contains("hidden-content")) {
        extraContent.classList.remove("hidden-content");
        this.innerText = "Read Less";
    } else {
        extraContent.classList.add("hidden-content");
        this.innerText = "Read More";
    }
});

// Background Container in About section
// Function to adjust the height of the background container dynamically
function updateBackgroundHeight() {
  const contentHeight = document.querySelector('.about-container').offsetHeight;
  document.querySelector('.background-container').style.height = contentHeight + 'px';
}

// Calling the function to set the initial background height and updating it on window resize
window.addEventListener('load', updateBackgroundHeight);
window.addEventListener('resize', updateBackgroundHeight);
