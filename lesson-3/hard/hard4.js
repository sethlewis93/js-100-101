// QUESTION #

// Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.

// Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split("."); // divide the input into subtstrings with "." as the separator. Return array of elements separated by "."
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop(); // remove the last element
//     if (!isAnIpNumber(word)) {
//       // if the element returned by .pop() is NOT a numeric STRING between 0 and 255, terminate the program.
//       break;
//     }
//   }

//   return true;
// }

// Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things.
// You're not returning a false condition,
// and you're not handling the case when the input string has more or less than 4 components,
// e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

// Help Ben fix his code.

// --> MY SOLUTION(S) <--

// PROBLEM:

// Ben's code does not do the following:
// --> Handle Input with > or < 4 components;
// --> Return a false condition. It returns true no matter code in while loop.

// EXAMPLES:

// Examples of code that should fail:
// --> isDotSeparatedIpAddress("4.5.5")
// --> isDotSeparatedIpAddress("1.2.3.4.5")
// --> isDotSeparatedIpAddress("")

// DATA TYPE:

// Working with string input, looping over an array, returning a bool

// ALGORITHM:

// Validate the input:
// --> IF string length !== 4 OR string.trimStart() === ""
// ----> RETURN false

// Split the string by "."
// WHILE the array length is greater than 0:
// --> Remove and store the last element
// --> Verify that the element isAnIpNumber()
// ----> IF it is not, return FALSE

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("1.2.3.4.5"));
console.log(isDotSeparatedIpAddress(""));
console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("10.400.5.11"));

// --> PREFERRED SOLUTION(S) <--

// EXACT SOLUTION AS MINE

// <---------------------- *** -------------->
// <---------------------- *** -------------->
