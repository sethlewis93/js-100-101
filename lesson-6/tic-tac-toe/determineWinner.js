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
 * *
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
  5: EMPTY_SQUARE,
  6: EMPTY_SQUARE,
  7: EMPTY_SQUARE,
  8: EMPTY_SQUARE,
  9: EMPTY_SQUARE,
};
