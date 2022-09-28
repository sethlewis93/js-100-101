const readline = require("readline-sync");

// Write a function that takes one integer argument, which may be positive, negative, or zero.
// This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// function isOdd(num) {
//   return Math.abs(num) % 2 === 1;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true
// console.log(isOdd(-7)); // => true

// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// for (let i = 1; i < 100; i += 2) {
//   console.log(i + "\n");
// }

// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Create and spread a new Array obj calling .keys() which returns an array iterator
// --> Filter that array to reurun only those elements that are even, excluding 0
// let evens = [...new Array(100).keys()].filter(
//   (num) => num % 2 !== 1 && num !== 0
// );

// Log each element to the console
/** Credit to student Brian Fontillas for this solution */
// evens.forEach((el) => console.log(el));

// for (let number = 1; number < 100; number += 1) {
//   if (number % 2 === 1) {
//     continue;
//   }

//   console.log(number);
// }

// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

const prompt = (message) => console.log(`=> ${message}`);

prompt("Enter the length of the room in meters");
let length = readline.question();

prompt("Enter the width of the room in meters");
let width = readline.question();

const area = (l, w) => {
  let squareMeters = l * w;
  return `The area of the room is ${squareMeters} square meters (${
    squareMeters * 10.7639
  } square feet).`;
};

console.log(area(length, width));
