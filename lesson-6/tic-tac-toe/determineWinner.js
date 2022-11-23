// P:
// Determine a game winner.
// Winning combos = either "X" or "O" filling these squares consecutively:
// ROWS:
// -- 1 - 3
// -- 4 - 6
// -- 7 - 9
// COLUMNS:
// -- 1, 4, 7
// -- 2, 5, 8
// -- 3, 6, 9
// DIAGONAL:
// -- 1, 5, 9
// -- 3, 5, 7

/**
 * Examples:
    let squares = {
    1: USER_MARK,
    2: USER_MARK,
    3: USER_MARK,
    4: EMPTY_SQUARE,
    5: EMPTY_SQUARE,
    6: EMPTY_SQUARE,
    7: EMPTY_SQUARE,
    8: EMPTY_SQUARE,
    9: EMPTY_SQUARE,
 };
 *
 */

/**
 * Data Type: Object -> Array of keys -> bool (winner or no?)
 */

/**
 * Algorithm:
 * * Iterate over the keys of squares obj
 * * Check index positions
 * * Does one user's mark populate positions _ - _ ? That's the winner.
 * * -> set {player}Wins to true
 */

// App Constants
const EMPTY_SQUARE = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";

let squares = {
  1: USER_MARKER,
  2: USER_MARKER,
  3: USER_MARKER,
  4: EMPTY_SQUARE,
  5: COMPUTER_MARKER,
  6: EMPTY_SQUARE,
  7: EMPTY_SQUARE,
  8: USER_MARKER,
  9: EMPTY_SQUARE,
};

// Set collection of user's marks
let usersMarks = Object.entries(squares).filter((pair) => {
  let [key, val] = pair;
  return [key, val][1] === "X";
});

// Set collection of computer's marks
let computersMarks = Object.entries(squares).filter((pair) => {
  let [key, val] = pair;
  return [key, val][1] === "O";
});

function determineWinner(arrOfMarks, pattern) {
  let markedSquares = "";

  for (let idx = 0; idx < arrOfMarks.length; idx += 1) {
    markedSquares += arrOfMarks[idx][0];
  }

  return markedSquares.includes(pattern);
}

// The winning patterns
let rowOne = "123";
let rowTwo = "456";
let rowThree = "789";

let colOne = "147";
let colTwo = "258";
let colThree = "369";

let diagonalOne = "159";
let diagonalTwo = "357";

determineWinner(usersMarks, rowOne);
determineWinner(usersMarks, rowTwo);
determineWinner(usersMarks, rowThree);
determineWinner(usersMarks, colOne);
determineWinner(usersMarks, colTwo);
determineWinner(usersMarks, colThree);
determineWinner(usersMarks, diagonalOne);
determineWinner(usersMarks, diagonalTwo);

determineWinner(computersMarks, rowOne);
determineWinner(computersMarks, rowTwo);
determineWinner(computersMarks, rowThree);
determineWinner(computersMarks, colOne);
determineWinner(computersMarks, colTwo);
determineWinner(computersMarks, colThree);
determineWinner(computersMarks, diagonalOne);
determineWinner(computersMarks, diagonalTwo);

// We need a way to call determine winner only twice:
// Once with usersMarks and a collection of all patterns
// Once with computersMarks and a collection of all pattenrs
