const container = document.querySelector(".boxContainer");

for (let i = 0; i < 16; i++) {
  let divCon = document.createElement("div");
  divCon.className = "divContainer";
  container.appendChild(divCon);

  for (let j = 0; j < 16; j++) {
    let squares = document.createElement("div");
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
