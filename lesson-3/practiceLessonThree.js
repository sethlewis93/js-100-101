// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
// numbers.map(() => 10); // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// How can you determine whether a given string ends with an exclamation mark (!)?

/** FIRST SOLUTION */
const exclamation = function (str) {
  return str.includes("!");
};

/** PREFERRED SOLUTION (the instructions were whether a string 'ends with' the mark).
 * See also: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
 */

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith("!"); // true
str2.endsWith("!"); // false

// console.log(exclamation(str1));
// console.log(exclamation(str2));

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Determine whether the following object of people and their age contains an entry for 'Spot':

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty("Spot"));

// <-------------------------------------------------- *** -------------------------------------------------->
// <-------------------------------------------------- *** -------------------------------------------------->

// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

/** WRONG DIRECTION */
// function correctPunctuation(str) {
//   let newStr = str.toLowerCase();
//   return newStr[0].toUpperCase();
// }

/** CORRECT SOLUTION */
console.log(
  munstersDescription.charAt(0).toUpperCase() +
    munstersDescription.substring(1).toLowerCase()
);

// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

newAges = Object.assign(ages, additionalAges);

console.log(newAges);

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

let advice =
  "Few things in life are as important as house training your pet dinosaur.";
