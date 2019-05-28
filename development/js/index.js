let nextButton = document.getElementById("nextSlide");
let prevButton = document.getElementById("prevSlide");
let slides = document.getElementsByClassName("mySlides");
let visibleSlide = 0;
let timer = null;
slides[visibleSlide].classList.add("visible");
setInterval(function () {
    slides[visibleSlide].classList.remove("visible");
    visibleSlide += 1;
    if (visibleSlide >= slides.length) {
        visibleSlide = 0
    }
    slides[visibleSlide].classList.add("visible");
}, 3000);
nextButton.addEventListener("click", function () {
    slides[visibleSlide].classList.remove("visible");
    visibleSlide += 1;
    if (visibleSlide >= slides.length) {
        visibleSlide = 0;
    }
    slides[visibleSlide].classList.add("visible");
});
prevButton.addEventListener("click", function () {
    slides[visibleSlide].classList.remove("visible");
    visibleSlide -= 1;
    if (visibleSlide < 0) {
        visibleSlide = slides.length - 1;
    }
    slides[visibleSlide].classList.add("visible");
});