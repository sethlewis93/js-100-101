/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
// Write a function that computes the sum of all numbers between 1 and some other number,
// inclusive, that are multiples of 3 or 5.
// For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

/**
 * P:
 *  Given a number, write a function that returns the SUM of all numbers
 *  between 1 and the given number (inclusive).
 *  The numbers returned must be multiples of 3 OR multiples of 5
 *  You may assume that the number passed in is an integer greater than 1.
 */

/**
 * E:
 * multisum(3);       // 3
  multisum(5);       // 8
  multisum(10);      // 33
  multisum(1000);    // 234168
 */

/**
 * A:
 *  Store all the numbers between 1 and the given integer in an array called `rangeOfNums`
 *  Filter out numbers that are not divisible by 3 or 5 from `rangeOfNums`
 *  Once you have the new array, return the sum of the remaining numbers
 */

/**
 * PC:
 *  DECLARE multisum(integer):
 *    SET rangeOfNums to an empty array
 *    LOOP over integer and push numbers between 1 and integer into rangeOfNums
 *    FILTER out nums that are NOT divisible by 3 or 5 from rangeOfNums
 *    RETURN the sum of numbers from the filtered rangeOfNums array
 */

function multisum(integer) {
  let rangeOfNums = [];
  for (let counter = 1; counter <= integer; counter++) {
    rangeOfNums.push(counter);
  }

  let sumOfNums = rangeOfNums
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((prev, curr) => prev + curr);

  return sumOfNums;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
