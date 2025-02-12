function getComputerChoice() {
  let number = Math.random();

  console.log(number);

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

console.log(getComputerChoice());
