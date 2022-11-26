/* eslint-disable max-len */
/**
 * Write a program that asks the user to enter an integer greater than 0,
 * then asks whether the user wants to determine the sum or the product
 * of all numbers between 1 and the entered integer, inclusive.
 */

/**
 * P:
 *  Given a single integer,
 *  Determine the sum or product of all the numbers between 1 and the
 *    given integer, inclusive
 *  Whether we calculate sum or product depends on the user's input
 */

/**
 E:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
 */

/**
 * D: Integer -> Array -> Integer
 */

/**
 * A:
 *   Ask the user for an integer greater than 0
 *     Store that value in a variable `userInput`
 *   Ask the user to decide what kind of calculation they'd like to enact
 *     Store that choice in a variable `calculation`
 *   If the user chose "product" as the calculation type:
 *     Get the product of all numbers between 1 and `userInput` inclusive
 *     Store the product in a variable called `productOfInput`
 *   Else if the user chose "sum" as the calculation type:
 *     Get the sum of all numbers between 1 and `userInput` inclusive
 *     Store the sum in a variable called `sumOfInput`
 *   Print the result of either the product or the sum
 */

/**
 * PC:
 *   PROMPT: enter an integer greater than 0
 *   SET userInput to the result of that integer
 *   PROMPT: enter the calculation you'd like to perform
 *
 *   DECLARE getRangeOfNums(integer) to return an array of the range of numbers:
 *     SET rangeOfNums = []
 *     for (counter = 1; counter less than integer; increment counter):
 *       REASSIGN rangeOfNums.push(counter)
 *     RETURN rangeOfNums
 *
 *   SET calculation === first character of the user's input
 *   IF calculation === "p":
 *     calculate the product of getRangeOfNums(userInput) & store in `productOfInput`
 *   ELSE IF calculation === "s":
 *     calculate the sum of getRangeOfNums(userInput) & store in `sumOfInput`
 *   PRINT: (sumOfInput OR productOfInput)
 */

let userInput = 6;

function getRangeOfNums(int) {
  let rangeOfNums = [];

  for (let counter = 1; counter <= int; counter++) {
    rangeOfNums.push(counter);
  }

  return rangeOfNums;
}

function calculateConsecutiveIntegers(input, calculation) {
  let rangeToCalculate = getRangeOfNums(input);

  if (calculation === "p") {
    let productOfInput = rangeToCalculate.reduce((prev, curr) => {
      return prev * curr;
    }, 1);
    return productOfInput;
  } else if (calculation === "s") {
    let sumOfInput = rangeToCalculate.reduce((prev, curr) => prev + curr);
    return sumOfInput;
  }

  return null;
}

console.log(calculateConsecutiveIntegers(userInput, "p"));
console.log(calculateConsecutiveIntegers(userInput, "s"));

// <------------------------------------------------------------->

// Another way that eliminates the need for most of the code in calculateConsecutive...()

let addNums = getRangeOfNums(userInput).reduce((prev, curr) => prev + curr);
let multiplyNums = getRangeOfNums(userInput).reduce(
  (prev, curr) => prev * curr
);

let calculationChoice = "p";

let result = calculationChoice === "s" ? addNums : multiplyNums;
console.log(result);
