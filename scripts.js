const main = document.querySelector("main");
const btn = document.querySelector(".popup-ask");

let isMouseDown = false;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});
document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

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
      return null;
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
  const toggleBorder = document.createElement("div");
  const toggleRGB = document.createElement("div");
  const barGroup = document.createElement("div");
  const resetSquaresBtn = document.createElement("div");

  const squareSize = 644 / numberWant;

  let isRGB = true;

  container.className = "boxContainer";
  toggleBorder.className = "toggleBorder";
  toggleRGB.className = "toggleRGB";
  barGroup.className = "barGroup";
  resetSquaresBtn.className = "mini-box";

  toggleBorder.textContent = "Add Square Borders";
  resetSquaresBtn.textContent = "Reset";
  toggleRGB.textContent = "Toggle RGB Pen";

  barGroup.appendChild(toggleBorder);
  barGroup.appendChild(resetSquaresBtn);
  barGroup.appendChild(toggleRGB);
  container.appendChild(barGroup);

  toggleRGB.addEventListener("click", () => {
    isRGB = !isRGB;
  });

  toggleBorder.addEventListener("click", () => {
    const squares = container.querySelectorAll(".squares");

    squares.forEach((square) => {
      square.classList.toggle("toggle");
    });
  });

  resetSquaresBtn.addEventListener("click", () => {
    const squaresCheck = container.querySelectorAll(".squares");

    squaresCheck.forEach((square) => {
      square.style.backgroundColor = "#ca6248";
      square.darkSquare = 0;
      square.color = null;
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
      squares.darkSquare = 0;
      squares.color = null;

      squares.style.width = `${squareSize}px`;
      squares.style.height = `${squareSize}px`;

      divCon.appendChild(squares);

      squares.addEventListener("mouseenter", () => {
        if (isMouseDown) {
          if (isRGB) {
            if (squares.color === null) {
              squares.color = {
                r: Math.floor(Math.random() * 256),
                g: Math.floor(Math.random() * 256),
                b: Math.floor(Math.random() * 256),
              };
            }

            if (squares.darkSquare < 10) {
              squares.darkSquare++;
            }

            const darken = 1 - squares.darkSquare * 0.1;

            const r = Math.floor(squares.color.r * darken);
            const g = Math.floor(squares.color.g * darken);
            const b = Math.floor(squares.color.b * darken);

            squares.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          } else {
            squares.style.backgroundColor = "#e9c46a";
          }
        }
      });
    }
  }
  main.appendChild(container);
}

newGrid(16);

btn.addEventListener("click", () => {
  const numSquare = numPrompt("How many squares do you want?");

  if (numSquare === null) {
    return;
  }

  const oldContainer = document.querySelector(".boxContainer");
  oldContainer.remove();

  newGrid(numSquare);
});
