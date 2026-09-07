const main = document.querySelector("main");
const btn = document.querySelector(".popup-ask");

function numPrompt(text) {
  let input = window.prompt(text, "");

  while (
    input === null ||
    input.trim() === "" ||
    !Number.isInteger(Number(input)) ||
    Number(input) <= 0 ||
    Number(input) > 100
  ) {
    if (input === null) {
      return 4;
    }

    input = window.prompt(
      "Please enter a positive whole number from 1 to 100",
      "",
    );
  }

  return Number(input);
}

function newGrid(numberWant) {
  const container = document.createElement("div");
  container.className = "boxContainer";

  const squareSize = 644 / numberWant;

  for (let i = 0; i < numberWant; i++) {
    const divCon = document.createElement("div");
    divCon.className = "divContainer";
    divCon.style.display = "flex";

    container.appendChild(divCon);

    for (let j = 0; j < numberWant; j++) {
      const squares = document.createElement("div");
      squares.className = "squares";

      squares.style.width = `${squareSize}px`;
      squares.style.height = `${squareSize}px`;

      divCon.appendChild(squares);

      squares.addEventListener("mouseenter", () => {
        squares.style.backgroundColor = "#e76f51";
      });

      squares.addEventListener("mouseleave", () => {
        squares.style.backgroundColor = "#e9c46a";
      });
    }
  }

  main.appendChild(container);
}

newGrid(16, 16);

btn.addEventListener("click", () => {
  const numSquare = numPrompt("How many squares do you want?");

  const oldContainer = document.querySelector(".boxContainer");
  oldContainer.remove();

  newGrid(numSquare);
});
