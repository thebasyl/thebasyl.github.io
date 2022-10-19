const colours = ["lightblue", "lightpink", "lightsalmon", "lightgreen", "lightseagreen"];
const randomColour = colours[Math.floor(Math.random() * colours.length)];

document.body.style.backgroundColor = randomColour;

const boxes = document.getElementById("game-boxes");
const button2 = document.getElementById("button2");

button2.addEventListener("click", () => 
{
    boxes.childNodes[1].childNodes[1].classList.toggle("hidden");
})