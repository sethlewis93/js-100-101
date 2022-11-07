// QUESTION 1

// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// --> MY SOLUTIONS <--

/** POP */
while (numbers.length > 0) {
  numbers.pop();
}

/** SHIFT */
while (numbers.length > 0) {
  numbers.shift();
}

/** SPLICE */
numbers.splice(0, numbers.length);

// --> PREFERRED SOLUTIONS <--
numbers.lengh = 0; // This was the one I missed. No need to use both .pop() and .shift() above

// QUESTION 2

// What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// QUESTION 3

// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// QUESTION 4

// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// --> MY SOLUTION <--
[{ first: "value1" }, { second: "value2" }, 3, 4, 5];

// --> CORRECT SOLUTION <--
[{ first: 42 }, { second: "value2" }, 3, 4, 5];

// !--> EXPLAIN THIS ☝🏾 IN YOUR OWN WORDS <--!
//  (see easy3-q4.js for the answer key)

// QUESTION 5

// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Try to come up with at least two different solutions.

// --> MY SOLUTION <--
function isColorValid(color) {
  return color === "blue" || color === "green";
}

function isColorValid(color) {
  switch (color) {
    case "blue" || "green":
      return color;
    default:
      break;
  }
}

// --> CORRECT SOLUTION <--

// We can also use an arrow function to simplify the code even more:

const isColorValid = (color) => color === "blue" || color === "green";

// Another tweak you can make is to use the Array.prototype.includes method; this works especially well when you have more than 2 choices:

const isColorValid = (color) => ["blue", "green"].includes(color);
