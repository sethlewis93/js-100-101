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

// <---------------------------------------------- *** -------------------------------------->
// <---------------------------------------------- *** -------------------------------------->

// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// for (let i = 1; i < 100; i += 2) {
//   console.log(i + "\n");
// }

// <---------------------------------------------- *** -------------------------------------->
// <---------------------------------------------- *** -------------------------------------->

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

// <---------------------------------------------- *** -------------------------------------->
// <---------------------------------------------- *** -------------------------------------->

// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.
// Note: 1 square meter == 10.7639 square feet
// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// const prompt = (message) => console.log(`=> ${message}`);

// prompt("Enter the length of the room in meters");
// let length = readline.question();

// prompt("Enter the width of the room in meters");
// let width = readline.question();

// const area = (l, w) => {
//   let squareMeters = l * w;
//   return `The area of the room is ${squareMeters} square meters (${
//     squareMeters * 10.7639
//   } square feet).`;
// };

// console.log(area(length, width));

// <---------------------------------------------- *** -------------------------------------->
// <---------------------------------------------- *** -------------------------------------->

// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// function ask(message) {
//   console.log(`=> ${message}`);
// }

// function getMealPrice() {
//   ask("What is the total of the bill?");
//   let bill = Number(readline.question());
//   ask("What is the tip charge in percentage?");
//   let tip = Number(bill * (readline.question() / 100));
//   let total = bill + tip;

//   return `
//     The tip is ${tip.toFixed(2)}
//     The total is ${total.toFixed(2)}
//   `;
// }

// console.log(getMealPrice());

// <---------------------------------------------- *** -------------------------------------->
// <---------------------------------------------- *** -------------------------------------->

// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// PROMPT the user to enter an integer greater than 0 (userInput)
// --> IF userInput is <=0 OR if userInput is not a number OR if user enters empty string, send invalid message and prompt again
// PROMPT the use to enter 's' or 'p'
// --> IF userInput is not 's' or 'p' (when lowercased), send invalid message and prompt again
// Take userInput and calculate either sum or product by reducing the numbers between 1 and the userInput provided
// PRINT either sum or product
// EXIT

// function isInvalidNum(input) {
//   return input.trimStart() === "" || isNaN(input) || input <= 0;
// }

// function isValidSelection(selection) {
//   return selection === "s" || selection === "p";
// }

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function sumFunction(num) {
//   // Credit to LS student Eric Chang for this equation
//   let result = (num * (num + 1)) / 2;

//   console.log(`The sum of the integers between ${num} and 1 is: ${result}`);

//   return result;
// }

// function productFunction(num) {
//   // Set backstop
//   let result = 1;

//   for (let i = num; i > 0; i -= 1) {
//     result *= i;
//   }

//   console.log(`The product of the integers between ${num} and 1 is: ${result}`);

//   return result;
// }

// while (true) {
//   // Receive input
//   prompt("Please enter an integer greater than 0: ");
//   let userNumInput = readline.question();

//   // Validate input (ensuring it is not '' or 0 or does not evaluate to NaN)
//   if (isInvalidNum(userNumInput)) {
//     prompt("Please be sure to enter only numbers greater than 0");
//     userNumInput = readline.question();
//   }

//   // Receive operation selection
//   prompt("Enter 's' to compute the sum, or 'p' to compute the product: ");
//   let userSelection = readline.question();

//   if (!isValidSelection(userSelection.toLowerCase())) {
//     prompt("Please be sure to enter only the letters 's' or 'p': ");
//     userSelection = readline.question();
//   }

//   if (userSelection.toLowerCase() === "s") {
//     sumFunction(Number(userNumInput));
//     break;
//   } else if (userSelection.toLowerCase() === "p") {
//     productFunction(Number(userNumInput));
//     break;
//   }
// }

// <---------------------------------------------- *** -------------------------------------->
// <---------------------------------------------- *** -------------------------------------->

// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// STORE length of each string
// COMPARE: if sting 'a' is > string 'b',
// RETURN b+a+b
// --> ELSE if the inverse, return a+b+a

// const shortLongShort = (s1, s2) =>
//   s1.length > s2.length ? s1 + s2 + s1 : s2 + s1 + s2;

// console.log(shortLongShort("AB", "D"));

// <---------------------------------------------- *** -------------------------------------->
// <---------------------------------------------- *** -------------------------------------->

// In the modern era under the Gregorian Calendar, leap years occur
// -> in every year that is evenly divisible by 4,
// ---> unless the year is also divisible by 100.
// -> If the year is evenly divisible by 100, then it is not a leap year,
// ---> unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

// CASE: year % 4 === 0 && year % 100 !== 0 && year % 400 === 0;

// const isLeapYear = (year) =>
//   (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// console.log(isLeapYear(2016)); // true
// console.log(isLeapYear(2015)); // false
// console.log(isLeapYear(2100)); // false
// console.log(isLeapYear(2400)); // true
// console.log(isLeapYear(240000)); // true
// console.log(isLeapYear(240001)); // false
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(1752)); // true
// console.log(isLeapYear(1700)); // false
// console.log(isLeapYear(1)); // false
// console.log(isLeapYear(100)); // false
// console.log(isLeapYear(400)); // true

/**
 * This is a continuation of the previous exercise.
 *
 * The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.
 *
 * Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
 * */

function isLeapYear(year) {
  if (year <= 1752 && year > 0) {
    return year % 4 === 0;
  }
  if (year > 1752) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true
