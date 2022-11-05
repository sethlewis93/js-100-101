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
// --> 3.) If so, remove all but the initial occurence
// --> Return the results

// CODE:

let daily = "ddaaiillyy ddoouubbllee".split("");

let newString = "";

// Currently still returns the original string
daily.forEach((char) => {
  if (char !== char - 1) {
    newString += char;
  }
});
console.log(newString);

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

// QUESTION #

// Instructions

// code here

// --> MY SOLUTION(S) <--

// solution code

// --> PREFERRED SOLUTION(S) <--

// <---------------------- *** -------------->
// <---------------------- *** -------------->
