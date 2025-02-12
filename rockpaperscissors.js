function getComputerChoice() {
  let number = Math.random();

  let computerChoice = " ";

  if (number <= 1 / 3) {
    number = 2;
    computerChoice = "Rock";
  } else if (number >= 2 / 3) {
    number = 4;
    computerChoice = "Scissors";
  } else {
    number = 3;
    computerChoice = "Paper";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("What's your choice padawan?");

  if (humanChoice.toLowerCase === "rock") {
    humanChoice = "Rock";
  } else if (humanChoice.toLowerCase === "paper") {
    humanChoice = "Paper";
  } else if (humanChoice.toLowerCase === "scissors") {
    humanChoice = "Scissors";
  }

  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const a = "Rock";
  const b = "Paper";
  const c = "Scissors";
  let humanScore = 0;
  let computerScore = 0;

  if (humanChoice === a && computerChoice === c) {
    console.log("You won! Rock beats Scissors.");
    humanScore++;
  } else if (humanChoice === b && computerChoice === a) {
    console.log("You won! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice === c && computerChoice === b) {
    console.log("You won! Scissors beats Paper.");
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else {
    console.log("You lost! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }

  console.log(computerScore, humanScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
