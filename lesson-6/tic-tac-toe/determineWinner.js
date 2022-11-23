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

// Break squares object in to array of k-v pairs
// Loop over the first level of arrays to get the values
// If the first 3 positions have truthy values:
// -- Loop over the values
// -- Are the values equal to the same player's marking?
// ---- Set {player}Wins var -> true

let usersMarks = Object.entries(squares).filter((pair) => {
  let [key, val] = pair;
  return [key, val][1] === "X";
});

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

// Example of a pattern to match
let rowOne = "123";

console.log(determineWinner(usersMarks, rowOne));
console.log(determineWinner(computersMarks, rowOne));
