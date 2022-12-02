/* eslint-disable max-lines-per-function */
// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

/**
 * A:
 *  Establish an object that represents string and numeral pairs
 *  Get the values of that object and store them in an array
 *  Iterate through the array:
 * * filter out values that are not included in the string passed in
 * * Store those values in a new array
 *  Set a variable `value` to 0
 *  Iterate over the filtered values:
 * * For each number,
 * * * add the number to the result of 10 * `value` (the current value)
 * * * store the result of the equation in `value`
 *  Return `value`
 */

function stringToInteger(string) {
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

  let arrayOfDigits = Object.values(DIGITS);
}
