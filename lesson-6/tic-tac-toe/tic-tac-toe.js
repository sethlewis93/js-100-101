let readline = require("readline-sync");

// App Constants
const EMPTY_SQUARE = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";

function prompt(message) {
  console.log(`➡️ ${message}`);
}

// The Board
let board = {
  1: EMPTY_SQUARE,
  2: EMPTY_SQUARE,
  3: EMPTY_SQUARE,
  4: EMPTY_SQUARE,
  5: EMPTY_SQUARE,
  6: EMPTY_SQUARE,
  7: EMPTY_SQUARE,
  8: EMPTY_SQUARE,
  9: EMPTY_SQUARE,
};

function invalidNumber(input) {
  // Returns true if the input is either empty string or not a number
  return (
    input.trimStart() === "" ||
    Number.isNaN(Number(input)) ||
    Number(input) < 1 ||
    Number(input) > 10
  );
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // eslint-disable-next-line no-mixed-operators
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function duplicateSelection(input) {
  return board[input] !== EMPTY_SQUARE;
}

function areSquaresAvailable(boardObj) {
  // Add logic to confirm we don't have a winner
  return Object.values(boardObj).some((val) => val === EMPTY_SQUARE);
}

function aPlayerWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {}

/**
 * PRIORITY: DEVELOP LOOPING LOGIC:
 * -> WHEN IS THE GAME OVER?
 * -> HOW DO WE DETERMINE A WINNER?
 * * -> Are positions 0 - 2 of the Board Object populated keys arr?
 * * -> Yes? That's your winner
 * -> HOW DO WE DETERMINE A TIE? ✅
 */

// <-----------------------------------------------------------------> //
// <-----------------------------------------------------------------> //

/**
 ** DISPLAY AN EMPTY BOARD **
 */

function changeBoard(choice) {
  if (typeof choice === "string") {
    while (invalidNumber(choice)) {
      prompt("Enter a number between 1 and 9: no words special characters.");
      choice = readline.question();
    }

    while (duplicateSelection(choice)) {
      prompt("That square is already taken. Please choose a free square.");
      choice = readline.question();
    }

    board[choice] = USER_MARKER; // Change the board to represent user's choice
  } else if (typeof choice === "number") {
    board[choice] = COMPUTER_MARKER; // Change the board to represent computer's choice
  } else {
    // Guard clause for some other data type besides a string entered by user
    prompt("Enter a number between 1 and 9: no words special characters.");
    choice = readline.question();
  }
}

function printBoard() {
  let horizontalRule = "+" + "-".repeat(3) + "";
  let squares = `
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${board[1]} | ${board[2]} | ${board[3]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${board[4]} | ${board[5]} | ${board[6]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${board[7]} | ${board[8]} | ${board[9]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
  `;
  return squares;
}

/**
 ** START THE GAME **
 */
prompt("Let's play Tic-Tac-Toe!");
console.log(printBoard());

/**
 ** GET AND PRINT USER AND COMPUTER SELECTIONS **
 */

while (true) {
  prompt(`
    Please choose a square to mark with an 'X'.
    You may choose between the numbers 1 and 9.
  `);
  let userChoice = readline.question();
  changeBoard(userChoice);

  // Check whether we have a tie:
  // "X" always ends the game first if "O" has not already won
  areSquaresAvailable(board);

  if (aPlayerWon(board) || !areSquaresAvailable(board)) break;

  let computerChoice = getRandomNumber(1, 9);
  while (duplicateSelection(computerChoice)) {
    computerChoice = getRandomNumber(1, 9);
  }
  prompt(`
    The computer chose ${computerChoice}
  `);
  changeBoard(computerChoice);
  console.clear();
  console.log(printBoard());

  // -> Check for Winner <-

  if (aPlayerWon(board)) {
    prompt(`${detectWinner(board)} wins!`);
  } else {
    prompt("It's a tie!");
  }
  // Set collection of user's marks
  let usersMarks = Object.entries(board).filter((pair) => {
    let [key, val] = pair;
    return [key, val][1] === "X";
  });

  // Set collection of computer's marks
  let computersMarks = Object.entries(board).filter((pair) => {
    let [key, val] = pair;
    return [key, val][1] === "O";
  });
}
