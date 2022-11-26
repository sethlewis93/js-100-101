/* eslint-disable max-len */
// eslint-disable-next-line max-len
// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

/**
 * P:
 *  Given a string, return sum of UTF-16 values of each character in the string.
 *  Rules:
 *
 */

/**
 * E:
 *  utf16Value('Four score');         // 984
  utf16Value('Launch School');      // 1251
  utf16Value('a');                  // 97
  utf16Value('');                   // 0

  // The next three lines demonstrate that the code
  // works with non-ASCII characters from the UTF-16
  // character set.

  const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
  utf16Value(OMEGA);                  // 937
  utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
 */

/**
 * D: String => Number
 */

/**
 * A:
 *  Declare and initialize an empty `utfCharValues` array
 *  For each character in the string,
 *    Get the UTF-16 value and store it in utfCharValues
 *  Return the result of adding all the values from utfCharvalues
 */

/**
 * PC:
 *  DECLARE utf16Value(string):
 *    SET utfCharValues to an empty arr
 *    LOOP over the string
 *     Push the return value of calling String.charChodeAt on each string onto uftCharValues
 *  RETURN the sum of all values in utfCharValues
 *
 */

function utf16Value(string) {
  let sumOfUtf16Values = 0;

  for (let idx = 0; idx < string.length; idx++) {
    sumOfUtf16Values += string.charCodeAt(idx); // slightly different thatn algo/psuedocode
  }

  return sumOfUtf16Values;
}

console.log(utf16Value("Four score")); // 984
console.log(utf16Value("Launch School")); // 1251
console.log(utf16Value("a")); // 97
console.log(utf16Value("")); // 0

const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA)); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)); // 2811
