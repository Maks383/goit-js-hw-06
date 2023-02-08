const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const inputEL = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", (event) =>
  makeMarkup(Number(inputEL.value))
);

buttonDestroy.addEventListener("click", deleteBoxes);

function makeMarkup(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = box.style.height = `${30 + 10 * i}px `;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  divBoxes.append(...boxes);
}

function deleteBoxes(event) {
  divBoxes.innerHTML = "";
}