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

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
