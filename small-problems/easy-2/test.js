// In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// Examples

/*

P: 
  Given an integer, 
  write a function that converts the integer to a string representation of that integer.
  Rules:
    - Do not use standard conversion methods
    - DO use integerToString() from the prev exercise
    - The integers passed in will either be non-negative or negative
    - If the integer is > 0, preped the string with a "+" sign
  Input: Integer
  Output: String
  
E: 
  The string rep for 0 is the only one without a sign in front of it
  
D: 
  Integer -> String

A: 
  Return the string "0" from the outset (either with clause or some kind of loop)
  Check whether the non-zero integeer is positive or negative
  If it's positive, call the prevoious integerToString method on the number and prepend a "+" sign
  If negatve: 
    convert the negative number to absolute value of itself
    pass the result to integerToStringMethod
    do the same but prepend a "-" sign
  Return the string representation
  
PC:

  
  IF the `numPassedIn` is 0, RETURN "0"
  
  Check the value of `numPassedIn` passed to `Math.sign()`
  
  RETURN the result of `value` passed to +/-`integerToString`:
      
    IF `1`, prepend "+"
    IF `-1`, prepend "-"

*/

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(integer) {
  let result = "";

  do {
    let remainder = integer % 10; // returns the last number in the integer

    integer = Math.floor(integer / 10); // returns the integer with the last num removed

    result = DIGITS[remainder] + result; // add the value at index DIGIT[lastIntegerNumber] to `result`
  } while (integer > 0);

  return result;
}

function signedIntegerToString(integer) {
  if (integer === 0) return "0";

  if (Math.sign(integer) === -1) {
    // integer = Math.abs(integer);

    return `-${integerToString(-integer)}`;
  } else {
    return `+${integerToString(integer)}`;
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
