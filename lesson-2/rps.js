let readline = require("readline-sync");

// Prompt the user for input
function prompt(message) {
  console.log(`=> ${message}`);
}

// Array of choices
const VALID_CHOICES = ["rock", "paper", "scissors"];

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
  while (true) {
    if (userTotal === 3) {
      prompt("User wins the game!");
      break;
    } else if (cpuTotal === 3) {
      prompt("Computer wins the game!");
      break;
    }
  }
}

// <----------------------------- ** ----------------------------->

while (true) {
  // Get user input
  prompt("Let's play 'Rock, paper, scissors'!");
  prompt("Enter 'r' for 'Rock', 'p' for 'Paper', or 's' for 'Scissors'!");

  let userChoice = readline.question();
  let shorthandChoice = parseUserChoice(userChoice);

  // Validate user input
  while (!VALID_CHOICES.includes(shorthandChoice)) {
    prompt(
      "Invalid choice. Please enter 'r' for 'Rock', 'p' for 'Paper', or 's' for 'Scissors'"
    );
    userChoice = readline.question();
    shorthandChoice = parseUserChoice(userChoice);
  }

  // Get computer choice
  const RANDOM_CHOICE_INDEX = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[RANDOM_CHOICE_INDEX];

  playGame(shorthandChoice, computerChoice);

  // Play again
  prompt("Enter 'y' to play again to determine a winner or 'n' to quit.");

  // prompt("Would you like to play again (y/n)?");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== "y" && answer[0] !== "n") {
    prompt("please answer 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === "n") {
    prompt("Goodbye!");
    break;
  }
}
