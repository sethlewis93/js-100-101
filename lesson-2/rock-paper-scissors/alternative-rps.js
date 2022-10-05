let readline = require("readline-sync");

// Prompt the user for input
function prompt(message) {
  console.log(`=> ${message}`);
}

// Array of choices
const VALID_CHOICES = ["rock", "paper", "scissors"];
let shorthandChoice;
let computerChoice;

// Players' score count
let userScore = 0;
let computerScore = 0;

// Game function
function playGame(userInput, computerInput) {
  if (
    (userInput === "rock" && computerInput === "scissors") ||
    (userInput === "paper" && computerInput === "rock") ||
    (userInput === "scissors" && computerInput === "paper")
  ) {
    prompt("You won this round!");
    userScore += 1;
    displayWinner(userScore, computerScore);
  } else if (
    (userInput === "rock" && computerInput === "paper") ||
    (userInput === "paper" && computerInput === "scissors") ||
    (userInput === "scissors" && computerInput === "rock")
  ) {
    prompt("The computer won this round!");
    computerScore += 1;
    displayWinner(userScore, computerScore);
  } else {
    prompt("It's a tie! Please play again.");
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

function getComputerChoice() {
  const RANDOM_CHOICE_INDEX = Math.floor(Math.random() * VALID_CHOICES.length);
  computerChoice = VALID_CHOICES[RANDOM_CHOICE_INDEX];
  prompt(`The computer chose: ${computerChoice}`);
}

function ValidateUserInput(input) {
  input = getUserInput();
  if (!VALID_CHOICES.includes(input)) {
    prompt(
      "Invalid choice. Please enter 'r' for 'Rock', 'p' for 'Paper', or 's' for 'Scissors'"
    );
    input = readline.question();
    shorthandChoice = parseUserChoice(input);
  } else {
    shorthandChoice = parseUserChoice(input);
  }
}

// Parse/interpret user's shorthand choice
function parseUserChoice(input) {
  let shorthand = input[0].toLowerCase();
  switch (shorthand) {
    case "r":
      shorthand = "rock";
      break;
    case "p":
      shorthand = "paper";
      break;
    case "s":
      shorthand = "scissors";
      break;
  }
  return shorthand;
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
  // <- VALIDATION HERE STILL A LITTLE WONKY
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

while (true) {
  greetUser();
  ValidateUserInput(); // getUserInput() nested within
  getComputerChoice();
  playGame(shorthandChoice, computerChoice);
}
