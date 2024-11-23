// Sticky Navbar on Scroll
window.onscroll = function() {
  var navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

menuIcon.addEventListener('click', function() {
  navLeft.classList.toggle('active');
  navRight.classList.toggle('active');
});
// JavaScript for Carousel Controls
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

// Function to update carousel position
function updateCarousel() {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

// Next Button Event Listener
nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

// Previous Button Event Listener
prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

// JavaScript for Modal Controls
const bookingModal = document.getElementById('bookingModal');

// Function to open the booking modal
function openBookingPopup() {
    bookingModal.style.display = 'block';
}

// Function to close the booking modal
function closeModal() {
    bookingModal.style.display = 'none';
}

// Close modal if clicking outside the content
window.onclick = function(event) {
    if (event.target == bookingModal) {
        bookingModal.style.display = 'none';
    }
}
