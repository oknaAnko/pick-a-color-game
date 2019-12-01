const colorNumber = document.querySelector(".number");
const result = document.querySelector(".result");

const playBtn = document.querySelector("button");

const leftSquare = document.querySelector(".left");
const centerSquare = document.querySelector(".center");
const rightSquare = document.querySelector(".right");

const squares = [leftSquare, centerSquare, rightSquare];
let color1;
let color2;
let color3;

const colorDraw = () => {
  result.textContent = "";

  color1 = `${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}`;

  color2 = `${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}`;

  color3 = `${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}`;

  const colors = [color1, color2, color3];
  const indexColor = Math.floor(Math.random() * colors.length);

  colorNumber.textContent = `rgb(${colors[indexColor]})`;
  leftSquare.style.backgroundColor = `rgb(${color1})`;
  centerSquare.style.backgroundColor = `rgb(${color2})`;
  rightSquare.style.backgroundColor = `rgb(${color3})`;
};

playBtn.addEventListener("click", colorDraw);

function colorPick() {
  if (this.style.backgroundColor === colorNumber.textContent) {
    result.textContent = "Cograts!";
  } else {
    result.textContent = "not this time :)";
  }
}

squares.forEach(square => {
  square.addEventListener("click", colorPick);
});
