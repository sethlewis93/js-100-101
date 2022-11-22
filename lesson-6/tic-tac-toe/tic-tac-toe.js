let readline = require("readline-sync");

function prompt(message) {
  console.log(`➡️ ${message}`);
}

/**
 * PRIORITY: DETERMINE HOW TO PERMANENTLY MUTATE THE SQUARES OBJECT
 * WHEN USER OR COMPUTER CHOICE IS PASSED TO `changeBoard`
 */

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
  // Add validation logic
  squares[choice] = "X";
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

function initializeBoard() {
  // init and populate the printBoard function with an empty string
  return "";
}

/**
 ** START THE GAME **
 */
prompt("Let's play Tic-Tac-Toe!");
console.log(printBoard());

/**
 ** GET AND PRINT USER AND COMPUTER SELECTIONS **
 */

let choices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomNumber = Math.floor(Math.random() * choices.length);

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
prompt(`
  The computer chose ${currentComputerChoice}
`);
console.log(printBoard());

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
