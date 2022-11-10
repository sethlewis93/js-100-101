// QUESTION #

// Write a function that takes a string argument
// and returns a new string that contains the value of the original string
// with all consecutive duplicate characters collapsed into a single character.

// PROBLEM

// Take a string argument and
// return a new string with all consecutive duplicate characters
// of the original crunched into a single character.

// EXAMPLES:

// crunch("ddaaiillyy ddoouubbllee"); // "daily double"
// crunch("4444abcabccba"); // "4abcabcba"
// crunch("ggggggggggggggg"); // "g"
// crunch("a"); // "a"
// crunch(""); // ""

// An empty string is simply returned
// A single letter is returned
// Numeric characters are valid characters of the string

// DATA TYPE:

// String -> Array -> String

// ALGORITHM:

// Convert string to iterable (array)
// Declare crunchedString
// for each character array
// --> declare prevCharacter and currentChar
// --> IF prevChar === currentChar
// ----> assign the prevChar to the crunchedString
// return crunchedString

// --> MY CODE/SOLUTION(S) <--

function crunch(str) {
  let arrayOfChars = str.split("");
  let crunchedStr = "";

  for (let counter = 0; counter < arrayOfChars.length; counter += 1) {
    let prevChar = arrayOfChars[counter - 1];
    let currentChar = arrayOfChars[counter];
    if (currentChar !== prevChar) {
      crunchedStr += currentChar;
    }
  }

  return crunchedStr;
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
crunch("ddaaiillyy ddoouubbllee"); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""

// --> PREFERRED SOLUTION(S) <--

// <---------------------- *** -------------->
// <---------------------- *** -------------->
