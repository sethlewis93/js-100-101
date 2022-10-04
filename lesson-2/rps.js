let readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

// Array of choices
const VALID_CHOICES = ["rock", "paper", "scissors"];

// Game function
function playGame(userInput, computerInput) {
  if (
    (userInput === "rock" && computerInput === "scissors") ||
    (userInput === "paper" && computerInput === "rock") ||
    (userInput === "scissors" && computerInput === "paper")
  ) {
    prompt("You win!");
  } else if (
    (userInput === "rock" && computerInput === "paper") ||
    (userInput === "paper" && computerInput === "scissors") ||
    (userInput === "scissors" && computerInput === "rock")
  ) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie");
  }
}

function getUserChoice(input) {
  let shorthand = input[0].toLowerCase();
  switch (shorthand) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "s":
      return "scissors";

    // may be room for default statement here
  }
}

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

while (true) {
  // Get user input -- Update the program so the user can type "r" for "rock," "p" for "paper," and so on.
  prompt("Rock, paper, or scissors: take your pick");

  let userChoice = readline.question();
  let shorthandChoice = getUserChoice(userChoice);

  // Validate user input
  while (!VALID_CHOICES.includes(shorthandChoice)) {
    prompt("Invalid choice. Please choose 'rock', 'paper', or 'scissors'");
    userChoice = readline.question();
    getUserChoice(userChoice); // <- LOOP NOT BREAKING WHEN NEW VALID ENTRY SUBMTITED AFTER SINGLE INSTANCE OF INVALID ENTRY
  }

  // Get computer choice
  const RANDOM_CHOICE_INDEX = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[RANDOM_CHOICE_INDEX];

  playGame(userChoice, computerChoice);

  // Offer to play again
  prompt("Would you like to play again (y/n)?");
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
