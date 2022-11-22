let readline = require("readline-sync");

/** PRIORITY
 * -> Rewrite board logic so that user input changes the state of the board
 * --> Right now, the `squares` is too complicated a data structure
 * --> to make simple changes and reflections in the board
 */

function prompt(message) {
  console.log(`➡️ ${message}`);
}

/**
 ** DISPLAY AN EMPTY BOARD **
 */

function printBoard(str) {
  let horizontalRule = "+" + "-".repeat(str.length + 2) + "";

  // Row 1
  console.log(horizontalRule.repeat(3) + "+");
  console.log(`| ${str} `.repeat(3) + "|");
  // Row 2
  console.log(horizontalRule.repeat(3) + "+");
  console.log(`| ${str} `.repeat(3) + "|");
  // Row 3 + bottom border
  console.log(horizontalRule.repeat(3) + "+");
  console.log(`| ${str} `.repeat(3) + "|");
  console.log(horizontalRule.repeat(3) + "+");
}

// Set nine "squares" in a nested object. Each prop has a an "empy" boolean k/v.
let squares = {
  1: { set: false },
  2: { set: false },
  3: { set: false },
  4: { set: false },
  5: { set: false },
  6: { set: false },
  7: { set: false },
  8: { set: false },
  9: { set: false },
};

function initializeBoard() {
  // init and populate the printBoard function with an empty string
  return "";
}

/**
 ** START THE GAME **
 */
prompt("Let's play Tic-Tac-Toe!");

let board = initializeBoard();
printBoard(board);

/**
 ** GET AND PRINT USER AND COMPUTER SELECTIONS **
 */

let choices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomNumber = Math.floor(Math.random() * choices.length);

function removeChoices(choice) {
  // For each number in choice,
  // Compare the number with the user or computer choice
  // Return an array with the numbers remaining
}

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
removeChoices(userChoice);

console.log(`➡️ You selected: ${userChoice}`);

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

let currentComputerChoice = randomNumber;
let prevComputerChoice;

if (currentComputerChoice === userChoice) {
  process.exit(); // Have to use for now. Adding logic for this later.
}

prompt(`
  The computer chose ${currentComputerChoice}
`);
removeChoices(currentComputerChoice);

// -> Display the current state of the board <-

// ------------------------------------- //
// First implementation of marking "X"
Object.values(squares).forEach((square) => {
  /// IF the square is set,
  // -- log "x" to the console: else, leave blank
  //   for (let squareNum in square) {
  //     if (square[squareNum]) {
  //       console.log("X");
  //     } else {
  //       console.log(" ");
  //     }
  //   }
});
