function getComputerChoice() {
  let number = Math.random();

  let computerChoice = " ";

  if (number <= 1 / 3) {
    computerChoice = "rock";
  } else if (number >= 2 / 3) {
    computerChoice = "scissors";
  } else {
    computerChoice = "paper";
  }
  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

const scoreDisplay = document.querySelector("#scoreDisplay");
const results = document.querySelector("#results");

function playRound(humanChoice, computerChoice) {
  const a = "rock";
  const b = "paper";
  const c = "scissors";

  if (humanChoice === a && computerChoice === c) {
    scoreDisplay.textContent = "You won! Rock beats Scissors.";
    humanScore++;
  } else if (humanChoice === b && computerChoice === a) {
    scoreDisplay.textContent = "You won! Paper beats Rock.";
    humanScore++;
  } else if (humanChoice === c && computerChoice === b) {
    scoreDisplay.textContent = "You won! Scissors beats Paper.";
    humanScore++;
  } else if (humanChoice === computerChoice) {
    scoreDisplay.textContent = "It's a draw!";
  } else {
    scoreDisplay.textContent =
      "You lost! " + computerChoice + " beats " + humanChoice;
    computerScore++;
  }

  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      results.textContent = "Congrats, you beat a computer";
    } else {
      results.textContent = "Well, you lost!";
    }
    humanScore = 0;
    computerScore = 0;
  }
}

const rockButton = document.querySelector("#rockButton");
humanChoice = rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

const paperButton = document.querySelector("#paperButton");
humanChoice = paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

const scissorsButton = document.querySelector("#scissorsButton");
humanChoice = scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});
