// MEDIUAM QUESTION #2

// Instructions

// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// PROBLEM:
// Given a string, return a new string where the case of each letter is
// opposite of the original string. So, if a letter is uppercase in the
// original, it's lowercase in the new and vice-versa.

// EXAMPLES:
// Notice how in the given example, the punctuation remains the same.
// This implies that the solution likely involves a way to identify which
// characters of the string are alphabetical.

// DATA TYPE
// String -> Array -> String

// ALGORITHM:
// SET `swappedCase` string variable.
// Scan the string and check for the following:
// Is the character alphabetical?
// --> IF yes, what is the casing?
// ----> IF uppercase, add it to the `swappedCase` string as lowercase
// ----> IF lowercase, add it to the swappedCase string as uppercase
// --> ELSE, just add it to the new string as-is.
// RETURN the new string.

// CODE:

// Check whether character is a letter.
function charIsLetter(char) {
  if (typeof char !== "string") {
    return false;
  }

  return /^[a-zA-Z]+$/.test(char);
}

// Check whether casing is upper or lowercase.
function casingStatus(char) {
  return /^[a-z]+$/.test(char) ? "lower" : "upper";
}

let lowerCaseLetter = /^[a-z]+$/g;
let upperCaseLetter = /^[A-Z]+$/g;

for (let counter = 0; counter < munstersDescription.length; counter += 1) {
  let character = munstersDescription[counter];
  if (charIsLetter(character)) {
    if (casingStatus(character) === "lower") {
      munstersDescription.replaceAll(lowerCaseLetter, character.toUpperCase());
    }
    if (casingStatus(character) === "upper") {
      munstersDescription.replaceAll(upperCaseLetter, character.toLowerCase());
    }
  }
}

// --> MY SOLUTION(S) <--

// solution code

// --> PREFERRED SOLUTION(S) <--

// <---------------------- *** -------------->
// <---------------------- *** -------------->
