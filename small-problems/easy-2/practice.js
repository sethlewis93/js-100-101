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
console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));
