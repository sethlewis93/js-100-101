// Question 1

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

// Question 2

// What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// Question 3

// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Question 4

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
