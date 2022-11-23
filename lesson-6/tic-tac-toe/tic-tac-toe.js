let readline = require("readline-sync");

function prompt(message) {
  console.log(`➡️ ${message}`);
}

function invalidNumber(number) {
  // Returns true if the input is either empty string or not a number
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * PRIORITY:
 */

// <-----------------------------------------------------------------> //
// <-----------------------------------------------------------------> //

/**
 ** DISPLAY AN EMPTY BOARD **
 */

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

function changeBoard(choice) {
  // Add logic for distinguishing between user and computer choice
  if (typeof choice === "string") {
    while (invalidNumber(choice)) {
      prompt("Please enter a valid number with no words special characters.");
      choice = readline.question();
    }
    squares[choice] = "X";
  } else if (typeof choice === "number") {
    squares[choice] = "O";
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

let currentComputerChoice = getRandomNumber(1, 9);
prompt(`
  The computer chose ${currentComputerChoice}
`);
changeBoard(currentComputerChoice);
console.log(printBoard());
