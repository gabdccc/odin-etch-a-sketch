const main = document.querySelector("main");
const btn = document.querySelector(".popup-ask");
const resetSquaresBtn = document.querySelector(".mini-box");

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
      return 16;
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
  const removeBorder = document.createElement("div");
  const toggleRGB = document.createElement("div");
  const squareSize = 644 / numberWant;

  let isRGB = true;

  container.className = "boxContainer";
  removeBorder.className = "removeBorder";
  toggleRGB.className = "toggleRGB";

  removeBorder.textContent = "Add SquareBorders";
  toggleRGB.textContent = "Toggle RGB Pen";

  container.appendChild(removeBorder);
  container.appendChild(toggleRGB);

  toggleRGB.addEventListener("click", () => {
    isRGB = !isRGB;
  });

  removeBorder.addEventListener("click", () => {
    const squares = container.querySelectorAll(".squares");

    squares.forEach((square) => {
      square.classList.toggle("remove");
    });
  });

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
        if (isRGB) {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          squares.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else {
          squares.style.backgroundColor = "#e9c46a";
        }
      });
    }
  }
  main.appendChild(container);
}

newGrid(16);

btn.addEventListener("click", () => {
  const numSquare = numPrompt("How many squares do you want?");

  const oldContainer = document.querySelector(".boxContainer");
  oldContainer.remove();

  newGrid(numSquare);
});

resetSquaresBtn.addEventListener("click", () => {
  const squaresCheck = document.querySelectorAll(".squares");

  squaresCheck.forEach((squares) => {
    squares.style.backgroundColor = "#ca6248";
  });
});
