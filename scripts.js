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
    input = window.prompt(
      "Please enter a positive whole number from 1 to 100",
      "",
    );
  }

  return Number(input);
}

function newGrid(rows, columns) {
  const container = document.createElement("div");
  container.className = "boxContainer";

  for (let i = 0; i < columns; i++) {
    const divCon = document.createElement("div");
    divCon.className = "divContainer";
    container.appendChild(divCon);

    for (let j = 0; j < rows; j++) {
      const squares = document.createElement("div");
      squares.className = "squares";

      squares.style.width = "16px";
      squares.style.height = "16px";

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
  const numSquareRow = numPrompt("How many squares do you want for the row?");
  const numSquareColumn = numPrompt(
    "How many squares do you want for the column?",
  );

  const oldContainer = document.querySelector(".boxContainer");
  oldContainer.remove();

  newGrid(numSquareRow, numSquareColumn);
});
