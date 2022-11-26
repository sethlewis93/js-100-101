/**
 * Write a function that takes one integer argument,
 * which may be positive, negative, or zero.
 * This method returns true if the number's absolute value is odd.
 * You may assume that the argument is a valid integer value.
 */

// Examples:

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/**
 * P:
 *  Given an integer, return a boolean based on whether the absolute value
 *  of that integer is even or odd.
 *  If even: return false
 */

/**
 * E:
 * console.log(isOdd(2)); // => false
 * console.log(isOdd(5)); // => true
 * console.log(isOdd(-17)); // => true
 */

/**
 * D: integer -> boolean
 */

/**
 * A:
 *  Get the absolute value of the integer
 *  return true if absolute val is an odd number
 */

function isOdd(int) {
  return Math.abs(int) % 2 === 1;
}
