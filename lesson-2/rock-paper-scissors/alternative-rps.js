let readline = require("readline-sync");

// Prompt the user for input
function prompt(message) {
  console.log(`=> ${message}`);
}

// Game choices
const USER_CHOICES = {
  r: "rock",
  p: "paper",
  s: "scissors",
};
const COMPUTER_CHOICES = ["rock", "paper", "scissors"];
let shorthandChoice;
let computerChoice;

// Players' score count
let userScore = 0;
let computerScore = 0;

// Game function
function playGame(userInput, computerInput) {
  const WINNING_MOVES = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (userInput === computerInput) {
    prompt("It's a tie! Please play again.");
  } else if (WINNING_MOVES[userInput] === computerInput) {
    prompt("You won this round!");
    userScore += 1;
    displayWinner(userScore, computerScore);
  } else {
    prompt("The computer won this round!");
    computerScore += 1;
    displayWinner(userScore, computerScore);
  }
}

function greetUser() {
  prompt("Let's play 'Rock, paper, scissors'!");
}

function getUserInput() {
  prompt("Enter 'r' for 'Rock', 'p' for 'Paper', or 's' for 'Scissors'!");
  let userChoice = readline.question();
  let singleLetterChoice = parseUserChoice(userChoice);
  return singleLetterChoice;
}

// Parse/interpret user's shorthand choice
function parseUserChoice(input) {
  return USER_CHOICES[input];
}

function ValidateUserInput(input) {
  if (input !== USER_CHOICES[input]) {
    // <- NOT CURRENTLY VALIDATING ERRANT USER CHOICE
    prompt(
      "Invalid choice. Please enter 'r' for 'Rock', 'p' for 'Paper', or 's' for 'Scissors'"
    );
    input = readline.question();
    shorthandChoice = parseUserChoice(input);
  } else {
    shorthandChoice = parseUserChoice(input);
  }
}

function getComputerChoice() {
  const RANDOM_CHOICE_INDEX = Math.floor(
    Math.random() * COMPUTER_CHOICES.length
  );
  computerChoice = COMPUTER_CHOICES[RANDOM_CHOICE_INDEX];
  prompt(`The computer chose: ${computerChoice}`);
}

// Display winner function
function displayWinner(userTotal, cpuTotal) {
  console.log(`User: ${userScore} - Computer: ${computerScore}`);
  if (userTotal === 3) {
    prompt("==> USER WINS THE GAME! <==");
    playAgain();
  } else if (cpuTotal === 3) {
    prompt("==> COMPUTER WINS THE GAME! <==");
    playAgain();
  }
}

// Play again function
function playAgain() {
  while (true) {
    prompt("Enter 'y' to play again or 'n' to quit.");

    // prompt("Would you like to play again (y/n)?");
    let answer = readline.question().toLowerCase();

    while (
      answer !== "y" &&
      answer !== "yes" &&
      answer !== "n" &&
      answer !== "no"
    ) {
      prompt("please answer 'y' or 'n'");
      answer = readline.question().toLowerCase();
    }

    if (answer === "n" || answer === "no") {
      prompt("Goodbye!");
      endGame();
    } else if (answer[0] === "y") {
      userScore = 0;
      computerScore = 0;
      break;
    }
  }
}

// End the game
function endGame() {
  process.exit(0);
}

// <----------------------------- ** ----------------------------->

// Only need to greet the user once
greetUser();

while (true) {
  let userSelection = getUserInput();
  ValidateUserInput(USER_CHOICES[userSelection]);
  getComputerChoice();
  playGame(shorthandChoice, computerChoice);
}
