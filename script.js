"use strict"

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector("button");

function setGradient() {
  body.style.background =
  "linear-gradient(to right, "
  + color1.value
  +", "
  + color2.value
  + ")";

  css.textContent = body.style.background + ";";
};

function getRandomColor() {
  let color =Math.floor(Math.random()*Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}

function randomizer() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();

  setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomizer);
