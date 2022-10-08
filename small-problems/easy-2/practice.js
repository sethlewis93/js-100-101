let readline = require("readline-sync");

// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

function greetings(arr, obj) {
  let name = arr.join(" ");

  return `Hello, ${name}! Nice to have a ${obj["title"]} ${obj["occupation"]} around.`;
}

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// const prompt = (message) => console.log(message);

// prompt("What's your name?");
// let name = readline.question();
// name.includes("!")
//   ? prompt(
//       `HELLO ${name.replace("!", ".").toUpperCase()} WHY ARE WE SCREAMING?`
//     )
//   : prompt(`Hello ${name}`);

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Create a function that takes two arguments, multiplies them together, and returns the result.

function multiply(multiplicand, multiplier) {
  return multiplicand * multiplier;
}

// console.log(multiply(3, 5));

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

function square(n) {
  return multiply(n, n);
}

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// let prompt = console.log;

// prompt("Enter the first number");
// let first = Number(readline.question());

// prompt("Enter the second number");
// let second = Number(readline.question());

// Remember that Math.floor() returns the integer less than or equal to it's numeric argument. It was the preferred choice over parseInt().

// console.log(`
//   ==> ${first} + ${second} = ${first + second}
//   ==> ${first} - ${second} = ${first - second}
//   ==> ${first} * ${second} = ${first * second}
//   ==> ${first} / ${second} = ${Math.floor(first / second)}
//   ==> ${first} % ${second} = ${first % second}
//   ==> ${first} ** ${second} = ${first ** second}
// `);

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Write a function that returns the next to last word in the String passed to it as an argument.

function penultimate(str) {
  const words = str.split(" ");
  return words[words.length - 2];
}

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

function xor(p1, p2) {
  return (p1 && !p2) || (!p1 && p2);
}

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);
// console.log(xor(5, 0));
// console.log(xor(false, true));
// console.log(xor(1, 1));
// console.log(xor(true, true));

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// INPUT = Array
// OUTPUT = Array

// PROBLEM RESTATED:
// Return an arry where each element is the value of every other index of the original array beginning with index 0

function oddities(arr) {
  return arr.filter((el, index) => index % 2 === 0);
}

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

// INPUT = String of digits
// OUTPUT = Integer/Number

// PROBLEM RESTATED:
// Take a string of numeric characters and return the same characters as typeof 'number'

// DATA JOURNEY:
// String of digits -> Array of digits -> Number containing the same digits in order of string

// ALGORITHM:
/**
 * Store numbers that correspond to digits in string
 * Split each digit from the INPUT into an array of digits
 * Create a variable `value` to act as a number that will be returned later
 * Take each array item & add each string digit to the `value` variable
 * Return `value`
 */

function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  // .split("") takes each digit and returns an array of digits AS STRINGS
  // .map() takes each character and returns the NUMBER from the `DIGITS` obj that corresponds to the STRING from the .split() method
  let arrayOfDigits = str.split("").map((char) => DIGITS[char]);
  let value = 0;

  // for each digit in the array:
  // --> multiply the current `value` by 10
  // --> add the digit to the `value`
  // --> repeat for entire array
  arrayOfDigits.forEach((digit) => (value = 10 * value + digit));
  return value;
}

// // ORIGINAL SOLUTION (implicit coercion)
// function stringToInteger(str) {
//   return str * 1;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.
