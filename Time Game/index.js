const startBtn = document.querySelector("#start");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const screens = document.querySelectorAll(".screen");
let score = 0;
let seconds = 0;
let minutes = 0;
let time = 0;

const colors = [
  "#711DB0",
  "#C21292",
  "#EF4040",
  "#FFA732",
  "#F3F8FF",
  "#E26EE5",
  "#7E30E1",
  "#49108B",
  "#3D0C11",
  "#D80032",
  "#F78CA2",
  "#F9DEC9",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const setTime = (minutesValue, secondsValue) => {
  timeEl.innerHTML = `${minutesValue}:${secondsValue}`;
};

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    time--;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setTime(minutes, seconds);
  }
};

const createRandomCircle = () => {
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.backgroundColor = color;

  board.append(circle);
};

const startGame = (minutes, seconds) => {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(minutes, seconds);
};

const finishGame = () => {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
};

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  const { target } = event;
  if (target.classList.contains("time-btn")) {
    time = parseInt(target.getAttribute("data-time"));
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    screens[1].classList.add("up");
    startGame(minutes, seconds);
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});
