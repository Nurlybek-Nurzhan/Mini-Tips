const board = document.querySelector("#board");
const colors = [
  "#161A30",
  "#31304D",
  "#B6BBC4",
  "#F0ECE5",
  "#C5FFF8",
  "#96EFFF",
  "#5FBDFF",
  "#7B66FF",
  "#0766AD",
  "#29ADB2",
  "#35155D",
  "#512B81",
];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(event) {
  const { target } = event;
  const color = randomColor();
  target.style.backgroundColor = color;
  target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const { target } = event;
  target.style.backgroundColor = "#1d1d1d";
  target.style.boxShadow = `0 0 2px #000`;
}
