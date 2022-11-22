/**
 ** DISPLAY AN EMPTY BOARD **
 */

// Set nine "squares" in a nested object. Each prop has a an "empy" boolean k/v.
let squares = {
  1: { set: false },
  2: { set: true },
  3: { set: false },
  4: { set: false },
  5: { set: false },
  6: { set: false },
  7: { set: false },
  8: { set: true },
  9: { set: false },
};

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

// Box method
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

// printBoard("");
printBoard("O");
