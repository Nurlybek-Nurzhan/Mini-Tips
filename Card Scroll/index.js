const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesCount = mainSlide.querySelectorAll("div").length;
let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

alert("Используйте стрелки вверх и вниз для переключения карточек!");
