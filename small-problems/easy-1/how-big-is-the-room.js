/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/**
 * Build a program that asks the user to enter the length and width of a room 
 * in meters, and then logs the area of the room to the console
 * in both square meters and square feet.
 * 
 * Note: 1 square meter == 10.7639 square feet
  Do not worry about validating the input at this time. 
  Use the readlineSync.prompt method to collect user input.
 */

/**
 * P:
 *  Given two integers (length and width) representing meters,
 *  Print the result of calculating the area from those integers
 *  The console should show the area in square meters AND square feet
 *  1 square meter -> 10.7639 square feet
 */

/**
 * E: 
  Enter the length of the room in meters:
  10
  Enter the width of the room in meters:
  7
  The area of the room is 70.00 square meters (753.47 square feet).
 */

/**
 * A:
 *  Using readlineSync.prompt(), get the two values from the user
 *  The first value represents the length of the room, the second the width
 *  Calculate the area of the room by mutliplying the two values
 *  Store the product of that calculation in a variable called `area`
 *  - Fix the product to 2 decimal point places
 *  Calculate the square footage of the room by multiplying the area by 10.7639
 *    Store the result in a variable called `squareFootage`
 *      Fix the variable to 2 decimal point places
 *  Print both results to the console
 */

let readline = require("readline-sync");
const prompt = (message) => console.log(`${message}`);

function printArea(length, width, type) {
  let area = (length * width).toFixed(2);

  if (type === "meters") {
    console.log(`
    The area of the room is ${area} meters (${length} X ${width} = ${area})
  `);
  }

  if (type === "square feet") {
    let squareFootage = (area * 10.7639).toFixed(2);
    console.log(`
        The square footage of the room is ${squareFootage} square feet (${area} X 10.7639 = ${squareFootage})
    `);
  }
}

prompt(
  "Let's get your room's measurements. Do you want to calculate meters or square feet?"
);
let calculationType = readline.question();

prompt("Please enter the length of the room");
let roomLength = readline.question();

prompt("Please enter the width of the room");
let roomWidth = readline.question();

printArea(roomLength, roomWidth, calculationType);

/**
 * Modify the program so that it asks the user for the input type (meters or feet).
 * Compute for the area accordingly, and log it and its conversion in parentheses.
 */
