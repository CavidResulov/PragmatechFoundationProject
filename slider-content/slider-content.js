let sliderWidth = document.querySelector(".slider-container").clientWidth;
let slides = document.querySelector(".slider-content");
let slidesCount = slides.childElementCount;
for (let i = 0; i < slidesCount; i++) {
  slides.children[i].style.width = `${sliderWidth / 3}px`;
}
slides.style.gridTemplateColumns = `repeat(${slidesCount}, 1fr)`;
let pos = 0;
function next(slideCount) {
  pos -= (sliderWidth / 3 + 10) * slideCount;
  slides.style.left = `${pos}px`;
}
function prev(slideCount) {
  pos += (sliderWidth / 3 + 10) * slideCount;
  slides.style.left = `${pos}px`;
}
