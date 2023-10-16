// Navbar in mobile menu 

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// Chaning slide in Our Moto

// Get the slider and slides
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-play the slider
setInterval(nextSlide, 3000); // Change slides every 3 seconds (adjust as needed)

// Show the initial slide
showSlide(currentSlide);



// About us
// Add this JavaScript code to your app.js file
var extraContent = document.getElementById("extraContent");
extraContent.classList.add("hidden-content");

document.getElementById("readMoreBtn").addEventListener("click", function () {
    if (extraContent.classList.contains("hidden-content")) {
        extraContent.classList.remove("hidden-content");
        this.innerText = "Read Less";
    } else {
        extraContent.classList.add("hidden-content");
        this.innerText = "Read More";
    }
});


function updateBackgroundHeight() {
  const contentHeight = document.querySelector('.about-container').offsetHeight;
  document.querySelector('.background-container').style.height = contentHeight + 'px';
}

// Call the function on page load and when the window is resized
window.addEventListener('load', updateBackgroundHeight);
window.addEventListener('resize', updateBackgroundHeight);


