/* eslint-disable max-len */
/**
 * We'll use a nested array to represent these 8 "winning lines."
 * Each winning line is represented by an array that contains the keys of
 * * the three squares we'll need to examine.
 * All of those arrays are themselves nested within an array
 * * that represents all of the winning lines.
 * This structure lets us iterate over all of the possible winning lines,
 * * and, within each iteration, check whether the squares in that line
 * * * all belong to one player.
 */

/**
 * P:
 * * Given a nested array of nums representing winning "lines" for tic-tac toe,
 * * check whether the value of the board's props corresponding to those lines
 * * are occupied by the markings of one of the players.
 */

/**
 * E: board[square] = "X" or "O" at squares [1, 2, 3]
 */

/**
 * D: Board object -> Array (to compare with nested "winning lines" array) ->
 * * * Return string (indicating who wins)
 */

/**
 * A:
 * Initialize a `winningPlayer` variable and declare it with an empty string
 * * Iterate over all possible lines
 * * Compare the numbers in the given line to the props occupied by each player
 * * If every square in the line matches the position of the character's mark:
 * * * Reassign `winningPlayer` to "Computer" or "User"
 * Return `winningPlayer`
 *
 * PC:
 * * LOOP over every element in the {player}Marks array:
 * * * IF EVERY Number(item) at position 0 is INCLUDED in the current "line"
 * * * * `winningPlayer` is now reassigned to the value of `{player}`
 */

// App Constants
const EMPTY_SQUARE = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";

let board = {
  1: COMPUTER_MARKER,
  2: USER_MARKER,
  3: USER_MARKER,
  4: COMPUTER_MARKER,
  5: COMPUTER_MARKER,
  6: EMPTY_SQUARE,
  7: COMPUTER_MARKER,
  8: EMPTY_SQUARE,
  9: EMPTY_SQUARE,
};
/** --------------------------------------------------------------------- */

let winningLinesArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function detectWinner(winningLines) {
  for (let idx = 0; idx < winningLines.length; idx += 1) {
    let [sq1, sq2, sq3] = winningLines[idx];
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

console.log(detectWinner(winningLinesArr));

/** --------------------------------------------------------------------- */

/**
 * Our function declares a winningLines variable and assigns it a two-dimensional array. Each subarray represents a winning line. We then iterate over the subarrays using a for loop.

We use a for loop here since we may need to return from the function before the end of the loop; forEach doesn't allow that since using return in the callback merely returns from the callback.

Within the loop, we use array destructuring to assign the numbers in each line -- a nested array -- to the variables sq1, sq2, and sq3. Thus, for example, if winningLines[line] points to the subarray [1, 4, 7], the values 1, 4, and 7 will be assigned to sq1, sq2, and sq3, respectively. We then inspect the board for that line; if the marker at all three squares is HUMAN_MARKER, i.e., 'X', we return the string 'Player', if the marker at all three squares is COMPUTER_MARKER, we return 'Computer'. If we make it through the entire loop without finding a winning line, we know that nobody won, so we return null.
 */
