let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

const USER_OUTPUT = document.getElementById("user-scored");
const COMPUTER_OUTPUT = document.getElementById("computer-scored");

const TAIL = document.getElementById("tail");
const HEAD = document.getElementById("head");

const RESULT = document.getElementById("result");

const SCORE_BOARD =  document.getElementById("score-board");

TAIL.addEventListener("click", function () {
  computerChoice();
  userHand = "tail";
  calculateResult();
  changeColor();
});

HEAD.addEventListener("click", function () {
  computerChoice();
  userHand = "head";
  calculateResult();
  changeColor();
});

function changeColor(){
    if (roundResult== "Win"){
     SCORE_BOARD.style.backgroundColor = "green";
    }
    else if (roundResult== "Lose"){
      SCORE_BOARD.style.backgroundColor = "red" ;
    }else{
      SCORE_BOARD.style.backgroundColor = "wheat" ;
    }       
}

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber == 0) {
    computerHand = "tail";
  } else {
    computerHand = "head" ;
  }
}

function calculateResult() {
  if (
    (userHand == "tail" && computerHand == "tail") ||
    (userHand == "head" && computerHand == "head")
  ) {
    userScore++;
    USER_OUTPUT.innerHTML = userScore;
    RESULT.innerHTML ="You Win!";
    roundResult = "Win";

  } else {
    computerScore++;
    COMPUTER_OUTPUT.innerHTML = computerScore;
    RESULT.innerHTML ="You Lose!";
    roundResult = "Lose";
  }
}
