const container = document.querySelector(".boxContainer");

for (let i = 0; i < 16; i++) {
  let divCon = document.createElement("div");
  divCon.className = "divContainer";
  container.appendChild(divCon);

  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.className = "squares";

    div.style.width = "16px";
    div.style.height = "16px";

    divCon.appendChild(div);
  }
}
