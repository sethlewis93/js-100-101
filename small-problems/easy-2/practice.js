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

// INPUT = String of digits
// OUTPUT = Number as an integer with the same digits, positive or negative depending on the presence of string chars "+" or "-"

// PROBLEM RESTATED:
// --> Given a string of digits and possibly the characters "+" or "-", convert that string to a number
// --> If the string has a "+" character or only the digits:
// ----> return the digits in order as a positive number
// --> If the string has a "-" charcater:
// ----> return the digits in order as a negative number

// QUESTIONS:
// --> What is a negative number in JS? How is it represented? Is it the same type as a positive number? Is it valid?
// ----> > typeof -904 === 'number' returns true in Node

// DATA TYPE:
// String of digits and two characters -> Number

// ALGORITHM:
// Validate input:
// --> If the string has "+":
// ----> call stringToInteger as normal
// ---> If te string has "-":
// ----> convert and return the value from stringToInteger as negative number using `-Math.abs(val)`
// --> Else: call stringToInteger

// MY ORIGINAL SOLUTION
function stringToSignedInteger(str) {
  // Set variable to return at the end
  let value = 0;

  // Validate the input
  if (str.includes("+")) {
    value = stringToInteger(str.split("+")[1]);
  } else if (str.includes("-")) {
    value = -Math.abs(stringToInteger(str.split("-")[1]));
  } else {
    value = stringToInteger(str);
  }
  return value;
}

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// <-------------------------------------------------- *** -------------------------------------------------->

// PROPOSED SOLUTION

function stringToSignedInteger(str) {
  switch (str[0]) {
    case "-":
      return -stringToInteger(str.slice(1, str.length));

    case "+":
      return stringToInteger(str.slice(1, str.length));

    default:
      return stringToInteger(str);
  }
}

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// INTERESTING STUDENT SOLUTION (awaiting reply on the explanation (https://launchschool.com/exercises/6974d7f2))

function stringToSignedInteger(string) {
  return Math.floor(string);
}

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

// INPUT = non-negative number
// OUTPUT = string representation of the number

// PROBLEM RESTATED:
// --> Take any non-negeative integer and return the string representation of that number

//

// function integerToString(int) {
//   return (int += "");
// }

// integerToString(4321); // "4321"
// integerToString(0); // "0"
// integerToString(5000); // "5000"
// let whatType = integerToString(1234567890); // "1234567890"
// console.log(typeof whatType);

// see "integerToString.js" for code-commented version of this
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// INPUT = integer
// OUTPUT = string

// PROBLEM RESTATED:
// --> Receive an integer and return a string representation of that integer prepended with a "+" sign if the integer is positive, a "-" if the integer is negative, or no sign preopended if the integer is "0" or "-0".
// --> Use the `integerToString()` from the previous exercise

// DATA TYPE
// --> Number => String

// ALGORITHM
// Set a string var `signedString` to be returned at the end
// If the integer is positive: set `signedString` to the return value of integerToString() with a "+" prepended to the function's return value
// If the integer is negative: set `signedString` to the return value of integerToString() with a "-" prepeneded to the function's return value
// If the integer is 0 or -0: set `signedString` to the return value of integerToString() as normal
// Return the string prepended with the appropriate sign as applicable

// CODE

// --> MY SOLUTION (originally tried switch statement)
// function signedIntegerToString(int) {
//   let signedString = "";

//   if (Math.sign(int) === 1) {
//     signedString = `+${integerToString(int)}`;
//   } else if (Math.sign(int) === -1) {
//     signedString = `-${integerToString(Math.abs(int))}`;
//   } else {
//     signedString = integerToString(int);
//   }
//   return signedString;
// }

// --> PREPARED SOLUTION
function signedIntegerToString(int) {
  // My solution's original switch statement: "switch(int) { ..."
  switch (Math.sign(int)) {
    case -1:
      return `-${integerToString(-int)}`;
    case 1:
      return `+${integerToString(int)}`;
    default:
      return integerToString(int);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
