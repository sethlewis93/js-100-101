/**
 * PRIORITY: CLEAN UP CODE & OFFER ANOTHER ROUND
 */

let readline = require("readline-sync");

// App Constants
const EMPTY_SQUARE = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";

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

// Winning Lines
let winningLines = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function printBoard() {
  let horizontalRule = "+" + "-".repeat(3) + "";

  console.log(`
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${board[1]} | ${board[2]} | ${board[3]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${board[4]} | ${board[5]} | ${board[6]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
    | ${board[7]} | ${board[8]} | ${board[9]} |
    ${horizontalRule}${horizontalRule}${horizontalRule}+
  `);
}

function changeBoard(choice) {
  // We know that only the user is inputing a data type of string.
  // Therefore, this is the beginning of the validation check.

  if (typeof choice === "string") {
    while (invalidNumber(choice)) {
      prompt("Enter a number between 1 and 9: no words or special characters.");
      choice = readline.question();
    }

    while (duplicateSelection(choice)) {
      prompt("That square is already taken. Please choose a free square.");
      choice = readline.question();
    }

    board[choice] = USER_MARKER;
  } else if (typeof choice === "number") {
    board[choice] = COMPUTER_MARKER;
  } else {
    // Guard clause for some other data type besides a string entered by user

    prompt("Enter a number between 1 and 9: no words or special characters.");
    choice = readline.question();
  }
}

function prompt(message) {
  console.log(`➡️ ${message}`);
}

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

function userChooses() {
  prompt(`
  Please choose a square to mark with an 'X'.
  You may choose between the numbers 1 and 9.
`);
  let userChoice = readline.question();
  changeBoard(userChoice);
}

function computerChooses() {
  let computerChoice = getRandomNumber(1, 9);

  while (duplicateSelection(computerChoice)) {
    computerChoice = getRandomNumber(1, 9);
  }

  prompt(`
    The computer chose ${computerChoice}
  `);

  changeBoard(computerChoice);
  console.clear();
}

function duplicateSelection(input) {
  return board[input] !== EMPTY_SQUARE;
}

function areSquaresAvailable(boardObj) {
  return Object.values(boardObj).some((val) => val === EMPTY_SQUARE);
}

function detectWinner(lines) {
  for (let idx = 0; idx < lines.length; idx += 1) {
    let [sq1, sq2, sq3] = lines[idx];
    if (
      board[sq1] === USER_MARKER &&
      board[sq2] === USER_MARKER &&
      board[sq3] === USER_MARKER
    ) {
      return "User";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }
  return null;
}

// <-----------------------------------------------------------------> //
// <-----------------------------------------------------------------> //

/**
 ** START THE GAME **
 */
prompt("Let's play Tic-Tac-Toe!");
printBoard();

/**
 ** GAME LOOP: GET AND PRINT USER AND COMPUTER SELECTIONS **
 */

while (true) {
  userChooses();

  detectWinner(winningLines);
  if (detectWinner(winningLines) || !areSquaresAvailable(board)) break;

  computerChooses();
  printBoard();

  detectWinner(winningLines);
  if (detectWinner(winningLines) || !areSquaresAvailable(board)) break;
}

// -> End game <-
if (!areSquaresAvailable(board) && !detectWinner(winningLines)) {
  prompt("It's a tie!");
  printBoard();
} else if (detectWinner(winningLines)) {
  prompt(`${detectWinner(winningLines)} wins!`);
  printBoard();
}
