var num1 = Math.random() * 6;
num1 = Math.floor(num1) + 1;
var sourceImage1 = "images/dice" + num1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", sourceImage1);

var num2 = Math.random() * 6;
num2 = Math.floor(num2) + 1;
var sourceImage2 = "images/dice" + num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", sourceImage2);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Winner - Player 1 🚩"
} else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Winner - Player 2 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}