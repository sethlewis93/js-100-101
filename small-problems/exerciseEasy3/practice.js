// QUESTION 1

// Write a function that takes a string argument
// and returns a new string that contains the value of the original string
// with all consecutive duplicate characters collapsed into a single character.

// PROBLEM:

// --> Receive a string,
// return a new string containging the value of the original but
// without any CONSECUTIVE duplicate charecters. Essentially,
// remove any cases where the previous character is the same as the current.

// EXAMPLES:

// --> It doesn't matter how many conesctutive chars there are,
// --> the second consecutive occurence and onward must be removed.
// --> Numerical values are not to be excluded: they are strings and remain so.
// --> A string composed of a single character is simply returned as is.
// --> An empty string is returned as an empty string ("").

// DATA:

// String -> Array of characters -> String

// ALGORITHM:

// 1.) Iterate over each character
// 2.) Check whether those characters are preceded by the same character
// --> 3.) If so, only include the initial occurence in the new string.
// --> Return the results

// CODE (FIRST TRY - Data types String -> Array -> String):

// let daily = "ddaaiillyy ddoouubbllee".split("");

// let newString = "";

// daily.forEach((char) => {
//   if (char !== char - 1) {
//     // running into problems here.
//     newString += char;
//   }
// });

// --> MY SOLUTION(S) <--

// Does not return required, crunched string.
function myCrunch(string) {
  let newStr = "";

  string = string.split("");

  string.forEach((char, index) => {
    index = 0;
    while (index < string.length) {
      if (char[index] !== char[index + 1]) {
        newStr += char[index];
      }
      index += 1;
    }
  });

  return newStr;
}

myCrunch("4444abcabccba");

// --> PREFERRED SOLUTION(S) - No data type changes <--

function crunch(string) {
  let index = 0;
  let crunchedString = "";

  while (index <= string.length - 1) {
    // The result is the same whether or not we use "- 1"...why?
    if (string[index] !== string[index + 1]) {
      crunchedString += string[index];
    }

    index += 1;
  }
  return crunchedString;
}

console.log(crunch("4444abcabccba"));
console.log(crunch("ddaaiillyy ddoouubbllee"));
console.log(crunch("a"));
console.log(crunch(""));

// What happens if we stop iterating when index is equal to string.length - 1?
//  -> See "Easy3-1.md" for answer & study notes.
// <-------------------------------- *** ------------------------>
// <-------------------------------- *** ------------------------>

// QUESTION #

// Instructions

// code here

// --> MY SOLUTION(S) <--

// solution code

// --> PREFERRED SOLUTION(S) <--

// <---------------------- *** -------------->
// <---------------------- *** -------------->

// QUESTION #

// Instructions

// code here

// --> MY SOLUTION(S) <--

// solution code

// --> PREFERRED SOLUTION(S) <--

// <---------------------- *** -------------->
// <---------------------- *** -------------->

// QUESTION #

// Instructions

// code here

// --> MY SOLUTION(S) <--

// solution code

// --> PREFERRED SOLUTION(S) <--

// <---------------------- *** -------------->
// <---------------------- *** -------------->
