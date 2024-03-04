const item = document.querySelector(".item");
const placeholder = document.querySelectorAll(".placeholder");
const start = document.querySelector(".start");
const progress = document.querySelector(".progress");
const done = document.querySelector(".done");
const areas = document.querySelectorAll(".area");

const dragstart = (event) => {
  const { target } = event;
  target.classList.add("hold");
  setTimeout(() => target.classList.add("hide"), 0);
};

const dragend = (event) => {
  const { target } = event;
  target.classList.remove("hold", "hide");
};

const dragover = (event) => {
  event.preventDefault();
};

const dragenter = (event) => {
  const { target } = event;
  target.classList.add("hovered");
};

const dragleave = (event) => {
  const { target } = event;
  target.classList.remove("hovered");
};

const dragdrop = (event) => {
  const { target } = event;
  target.classList.remove("hovered");
  target.append(item);
};

const areasHover = (event) => {
  const { target } = event;
  switch (true) {
    case target.classList.contains("area-1"):
      progress.classList.remove("progressHover");
      done.classList.remove("doneHover");
      start.classList.add("startHover");
      break;
    case target.classList.contains("area-2"):
      start.classList.remove("startHover");
      done.classList.remove("doneHover");
      progress.classList.add("progressHover");
      break;
    case target.classList.contains("area-3"):
      start.classList.remove("startHover");
      progress.classList.remove("progressHover");
      done.classList.add("doneHover");
      break;
  }
};

const areasOut = (event) => {
  const { target } = event;
  switch (true) {
    case target.classList.contains("area-1"):
      start.classList.remove("startHover");
      break;
    case target.classList.contains("area-2"):
      progress.classList.remove("progressHover");
      break;
    case target.classList.contains("area-3"):
      done.classList.remove("doneHover");
      break;
  }
};

placeholder.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
});

areas.forEach((area) => {
  area.addEventListener("mouseover", areasHover);
  area.addEventListener("mouseout", areasOut);
});

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);
