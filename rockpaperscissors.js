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

getHumanChoice;

console.log(getComputerChoice());
console.log(getHumanChoice());
