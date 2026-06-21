let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? "block" : "none";
    });
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Initialize first slide
document.addEventListener("DOMContentLoaded", () => {
    showSlide(0);
});