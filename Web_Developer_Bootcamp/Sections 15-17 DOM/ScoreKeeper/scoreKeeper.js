var button = [ document.querySelector("#btn_p1"), document.querySelector("#btn_p2")];
var display = [ document.querySelector("#disp_p1"), document.querySelector("#disp_p2")];
var score = [0, 0];

var buttonReset = document.querySelector("#btn_reset");
var displayWinScore = document.querySelector("#disp_win_score");
var inputWinScore = document.querySelector("#input_win_score");

var winScore = 5;
var gameOver = false;

function clickButton() {
  var player = (this.id === "btn_p1") ? 0 : 1;
  if (!gameOver) {
    score[player]++;
    display[player].textContent = score[player];
    if (score[player] === winScore) {
      display[player].classList.add("winner");
      gameOver = true;
    }
  }
}

function clickReset() {
  for (var i = 0; i < 2; ++i) {
    score[i] = 0;
    display[i].textContent = 0;
    display[i].classList.remove("winner");
  }
  gameOver = false;
}

function changeWinScore() {
  winScore = inputWinScore.valueAsNumber;
  var highScore = (score[0] < score[1]) ? score[1] : score[0];
  if (winScore <= highScore) {
    winScore = highScore + 1;
    inputWinScore.value = winScore;
  }
  displayWinScore.textContent = winScore;

  if (gameOver) {
    gameOver = false;
    display[0].classList.remove("winner");
    display[1].classList.remove("winner");
  }
}

for (var player = 0; player < 2; ++player) {
  button[player].addEventListener("click", clickButton);
}
buttonReset.addEventListener("click", clickReset);
inputWinScore.addEventListener("change", changeWinScore);