// QUESTION #3

// Write a function that takes one argument, a positive integer,
// and returns a string of alternating '1's and '0's,
// always starting with a '1'.
// The length of the string should match the given integer.

// Examples:

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

/** PROBLEM */

// Write a function that takes an integer for an argument and
// returns a series of 1s and 0s as a string.
// The string should always begin with 1 and the number of string elements
// should match the value of the integer.
// E.g. if the number is 7, the string should have seven elements

/** EXAMPLES */

// Example case for 0 is not here. Is 0 a positive integer?
// --> YES. This means, an input of 0 should return an empty string

// input: integer
// output: string (not the same primitive)
// rules:
// -- must return a string, not an integer
// -- must begin with "1"
// -- if input === 0, return an empty string

/** DATA: integer -> string */

/** ALGORITHM */

// SET an empty string bitString;
// IF input === 0 OR Number.isNan(input): return bitString
// Assign bitString[1] = "1"
// IF input > 1 AND bitString.length !== input
// -- repeat the pattern "01" equal to the amount of
// return bitString

// --> MY SOLUTION(S) <--

function myStringy(int) {
  if (int === 0 || Number.isNaN(int)) return "";

  let bitString = "1";
  if (int > 1) {
    bitString += "01".repeat(Math.floor(int / 2) - 1);
  }

  return bitString;
}

console.log(myStringy(6)); // "101010"
// console.log(myStringy(9)); // "101010101"
// console.log(myStringy(4)); // "1010"
// console.log(myStringy(7)); // "1010101"

// --> PREFERRED SOLUTION(S) <--

function stringy(int) {
  let result = "";
  for (let idx = 0; idx < int; idx++) {
    let number = idx % 2 === 0 ? 1 : 0;
    result += number;
  }
  return result;
}

// ..makes use of a for loop to incrementally build the result string.
// At every iteration of the loop,
// -- the solution checks to see if the index position is even.
// -- If so, the solution appends a '1' to the initially empty result string
// --, or '0' otherwise.

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"

// <---------------------- *** -------------->
// <---------------------- *** -------------->
