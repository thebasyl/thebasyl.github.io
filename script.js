const colours = ["lightblue", "lightpink", "lightsalmon", "lightgreen"];
const randomColour = colours[Math.floor(Math.random() * colours.length)];

document.body.style.backgroundColor = randomColour;

const boxes = document.getElementById("game-boxes");
const button2 = document.getElementById("button2");

button2.addEventListener("click", () => 
{
    console.log(boxes.childNodes)
    boxes.childNodes[1].childNodes[1].classList.toggle("hidden");
    boxes.childNodes[3].childNodes[1].classList.toggle("hidden");
})