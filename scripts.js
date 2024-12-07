// JavaScript file: scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Carousel Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides();
    }

    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlides();
    }

    updateSlides(); // Initialize the first slide
    setInterval(showNextSlide, 15000); // Change slide every 15 seconds

    // FAB Menu Functionality
    const fabButton = document.querySelector('.fab-button');
    const fabOptions = document.querySelector('.fab-options');

    fabButton.addEventListener('click', function () {
        fabOptions.classList.toggle('visible');
    });

    // Close FAB options when clicking outside
    document.addEventListener('click', function (event) {
        if (!fabButton.contains(event.target) && !fabOptions.contains(event.target)) {
            fabOptions.classList.remove('visible');
        }
    });

    // Add previous and next navigation for the carousel
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.className = 'carousel-prev';
    nextButton.className = 'carousel-next';
    prevButton.innerText = '<';
    nextButton.innerText = '>';
    document.querySelector('.carousel').appendChild(prevButton);
    document.querySelector('.carousel').appendChild(nextButton);

    prevButton.addEventListener('click', function () {
        showPrevSlide();
    });

    nextButton.addEventListener('click', function () {
        showNextSlide();
    });
});