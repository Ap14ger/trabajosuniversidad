const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  btn.style.position = "absolute";
  btn.style.top = random(100) + "px";
  btn.style.left = random(100) + "px";
});

const texto = document.querySelector('input[type="text"]');

texto.addEventListener("mouseover", (Event) => {
  Event.target.style.backgroundColor = "pink";
});

texto.addEventListener("mousout", (Event) => {
  Event.target.style.backgroundColor = "";
});

let clickCount = 0;
const button = document.getElementById("myButton");
const countDisplay = document.getElementById("clickCount");

button.addEventListener("click", () => {
  clickCount++;
  countDisplay.textContent = "Clicks: " + clickCount;
});

function calculaRaiz() {
  const numero = document.getElementById("numero").value;
  const raiz = Math.sqrt(numero);
  document.getElementById("resultado").textContent =
    " la raiz cuadrada de " + numero + " es : " + raiz;
}
