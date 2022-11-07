// QUESTION #1

// Let's do some "ASCII Art":
// a stone-age form of nerd artwork from back in the days
// before computers had video screens.

// For this practice problem,
// write a program that outputs The Flintstones Rock! 10 times,
// with each line indented 1 space to the right of the line above it.
// The output should start out like this:

/**
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
   ...
*/

// PROBLEM:

// Write a program that prints a string 10 times.
// Each time the string is printed, it should be:
// --> (a) on a new line; and
// --> (b) indented one line to the right of the string above it.

// EXAMPLES
// The first instance does not contain any indentation.

// DATA TYPE:
// String that is mutated and printed 10 times.

// ALGORITHM:
// Take a string and print it {x} times
// Each time the string is printed:
// --> Add 1 additional indentation to the left of the string than previous str.
// --> Print it on a new line.

// CODE:

// SET string
// SET counter
// Set padding length (string length + padding)
// WHILE counter greater than target number AND padding less than target
// --> PRINT string with padding === length of string + spaces to pad
// --> Decrement counter
// --> Increment padding

// --> MY SOLUTION(S) <--

let myString = "The Flintstones Rock!";
let counter = 10;
let indent = 0;

while (counter > 0 && indent < 10) {
  console.log(myString.padStart(myString.length + indent, " "));
  counter -= 1;
  indent += 1;
}

// --> PREFERRED SOLUTION(S) <--

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flintstones Rock!");
}

// LESSON LEARNED: Read the docs (MDN) more carefully.
// --> I breifly searched for String or Array methods that do what repeat() does
// --> but because it was near the end of my study time + I was tired, I didn't
// --> look as carefully as I should have. My solution works, but the preferred
// --> solution is more concise.

// <---------------------- *** -------------->
// <---------------------- *** -------------->
