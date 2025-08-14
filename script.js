document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
});

function downloadFile() {
  // Create a link element
  const link = document.createElement("a");

  // Set the file path and filename
  link.href = "HARSHAL BADGUJAR.pdf"; // Replace with your file path
  link.download = "Resume.pdf";

  // Append, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const educationDetails = {
  sslc: {
    title: "SSLC - S.V.S High School",
    details: "Completed Secondary School Leaving Certificate (SSLC) in 2019 from S.V.S High School. Achieved excellent marks in Mathematics and Science."
  },
  puc: {
    title: "Class 12th - Vidyodaya Pre University College",
    details: "Completed Pre-University Course (PUC) in 2021 with PCMB combination. Participated in various science exhibitions and won district-level competitions."
  },
  college: {
    title: "College - Canara Engineering College, Manglore",
    details: "Currently pursuing Engineering degree (2021-2025) in Computer Science. Active member of coding club and participated in several hackathons. GPA: 8.5/10."
  }
};

// Get DOM elements
const viewMoreButtons = document.querySelectorAll('.view-more');
const popupOverlay = document.querySelector('.popup-overlay');
const popupTitle = document.getElementById('popup-title');
const popupDetails = document.getElementById('popup-details');
const closePopup = document.querySelector('.close-popup');

// Add click event to all "View More" buttons
viewMoreButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.stopPropagation();
    const timelineItem = this.closest('.timeline-item');
    const itemId = timelineItem.dataset.id;

    // Set popup content based on which item was clicked
    popupTitle.textContent = educationDetails[itemId].title;
    popupDetails.textContent = educationDetails[itemId].details;

    // Show popup
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
  });
});

// Close popup when clicking X button
closePopup.addEventListener('click', function () {
  popupOverlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close popup when clicking outside of content
popupOverlay.addEventListener('click', function (e) {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Close popup when pressing Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});
let currentSlide = 0;
let autoplayInterval;

const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // every 5 seconds
}

function pauseAutoplay() {
  clearInterval(autoplayInterval);
}

// Initialize
showSlide(currentSlide);
startAutoplay();