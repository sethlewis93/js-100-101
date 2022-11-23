let readline = require("readline-sync");

function prompt(message) {
  console.log(`➡️ ${message}`);
}

let squares = {
  1: " ",
  2: " ",
  3: " ",
  4: " ",
  5: " ",
  6: " ",
  7: " ",
  8: " ",
  9: " ",
};

function invalidNumber(input) {
  // Returns true if the input is either empty string or not a number
  return input.trimStart() === "" || Number.isNaN(Number(input));
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function duplicateSelection(input) {
  return squares[input] !== " ";
}

/**
 * PRIORITY:If a square has already been chosen,
 * the function doesn't prevent the player from choosing that square again.
 */

// <-----------------------------------------------------------------> //
// <-----------------------------------------------------------------> //

/**
 ** DISPLAY AN EMPTY BOARD **
 */

function changeBoard(choice) {
  if (typeof choice === "string") {
    // User input validation
    while (invalidNumber(choice)) {
      prompt("Please enter a valid number with no words special characters.");
      choice = readline.question();
    }

    while (duplicateSelection(choice)) {
      prompt("That square is already taken. Please choose a free square.");
      choice = readline.question();
    }

    squares[choice] = "X"; // Change the board to represent user's choice
  } else if (typeof choice === "number") {
    squares[choice] = "O"; // Change the board to represent computer's choice
  } else {
    // Guard clause for some other data type besides a string entered by user
    prompt("Please enter a valid number with no words special characters.");
    choice = readline.question();
  }
}

function printBoard() {
  let horizontalRule = "+" + "-".repeat(3) + "";
  let board = `
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${squares[1]} | ${squares[2]} | ${squares[3]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${squares[4]} | ${squares[5]} | ${squares[6]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${squares[7]} | ${squares[8]} | ${squares[9]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
  `;
  return board;
}

/**
 ** START THE GAME **
 */
prompt("Let's play Tic-Tac-Toe!");
console.log(printBoard());

/**
 ** GET AND PRINT USER AND COMPUTER SELECTIONS **
 */

// Ask the user to place an "X" in the square of their choice
// -- The user can choose the numbers 1 through 9
// ---- ex: "Square 1"; "1"
// Validate user's choice
// Print the user's choice

while (true) {
  prompt(`
    Please choose a square to mark with an 'X'.
    You may choose between the numbers 1 and 9.
  `);
  let userChoice = readline.question();
  changeBoard(userChoice);

  // Validate the user's input:
  // -- The user's input must include a valid number
  // -- A valid number means:
  // ---- No decimals or symbols
  // ---- Any input prior to the numerical value is trimmed/execluded
  // ---- Any input after the numerical valie is trimmed/excluded

  // Have the computer place an "O" in a random square that is not already taken
  // > Validate computerChoice <
  // IF computerChoice === userChoice || a choice the computer has already made:
  // -- computer must choose again

  let computerChoice = getRandomNumber(1, 9);
  while (duplicateSelection(computerChoice)) {
    computerChoice = getRandomNumber(1, 9);
  }
  prompt(`
    The computer chose ${computerChoice}
  `);
  changeBoard(computerChoice);
  console.log(printBoard());
}
