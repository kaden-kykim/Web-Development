var game = {};

game.init = function() {
  setupBtnModes();
  setupSquares();
  reset();
}

var numSquares = 6;
var colors = [];
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var btnReset = document.querySelector("#btn_reset");
var btnModes = document.querySelectorAll(".mode");

game.init();

function setupBtnModes() {
  // mode buttons event listener
  for (var i = 0; i < btnModes.length; ++i) {
    btnModes[i].addEventListener("click", function() {
      btnModes[0].classList.remove("selected");
      btnModes[1].classList.remove("selected");
      this.classList.add("selected");
      numSquares = (this.textContent === "Easy") ? 3 : 6;
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; ++i) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grap color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        btnReset.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  btnReset.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of squares
  for (var i = 0; i < squares.length; ++i) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

btnReset.addEventListener("click", function() {
  reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color) {
  // loop through all squares
  // change each color to match given color
  for (var i = 0; i < colors.length; ++i) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; ++i) {
    // get random color and push into again
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}