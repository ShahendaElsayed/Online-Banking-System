document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var navLinks = document.querySelectorAll(".nav-links ul li a");
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle("scrolled", window.scrollY > 0);
      }
    });
  
    window.addEventListener("scroll", function() {
      var nav = document.querySelector(".nav");
      nav.classList.toggle("scrolled", window.scrollY > 0);
    });
  
    var slideCount = document.querySelectorAll(".slide").length; // Total number of slides
    var visibleSlides = 4; // Number of slides visible at a time
    var slideWidth = document.querySelector(".slide").offsetWidth; // Width of a single slide including margin
    var containerWidth = visibleSlides * slideWidth; // Total width of visible slides
    var currentPosition = 0; // Current position of the slide container
  
    document.querySelector(".slides").style.width = containerWidth + "px"; });

// Get the necessary elements
const redeemBtn = document.getElementById('redeem-btn');
const redeemInput = document.getElementById('redeem');
const pointsContainer = document.querySelector('.pointss p');

// Initial available points
let availablePoints = 1500;

// Add event listener to the redeem button
redeemBtn.addEventListener('click', () => {
  // Get the entered number of points to redeem
  const pointsToRedeem = parseInt(redeemInput.value);

  // Check if the entered number is valid
  if (isNaN(pointsToRedeem)) {
    alert('Please enter a valid number.');
    return;
  }

  // Calculate the updated available points
  const updatedPoints = availablePoints - pointsToRedeem;

  // Update the displayed points
  pointsContainer.textContent = updatedPoints;

  // Reset the input field
  redeemInput.value = '';
  showPopup();
  // Update the available points variable
  
});

function showPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    popup.style.display = 'block';
    overlay.style.display = 'block';
  }