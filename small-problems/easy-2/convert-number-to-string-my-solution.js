/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
// In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

/*

P:
  Given a non-negative integer, 
  write a function that will return a string representation of that integer
  
  Input: 
    - Integer
  Output: 
    - String
    
  Rules:
  - Standard conversion functions are off limits
  - Expressions such as '' + number are off limits
  - The input will always be a positive integer


E: 
  - Positive integers
  - The string returned will output each numeral in the exact order of the integer passed to the funciton


D:
  - Number -> ?? -> String


A:
  Establish `numeralString` variable and initailize with ""
  Establish an array of string values 0 - 9
  Extract each digit from the integer passed in and store each digit in an array
  Iterate over the array of digits passed in:
    Iterate over the string values array:
      If the current digit matches the current string value:
        Append the string value to the `numeralString` variable
  
  Return `numeralString`


PC:
  
  START
  
    GET number

    SET `numeralString` = ""
    SET arrayOfStringNumerals = ["0", "1", "2", etc...]

    SET digitsArray = getArrayOfDigits()

    WHILE:

      outterIdx = 0; outterIdx < arrayOfStringNumerals

      SET currentStringNumeral

      WHILE:

        innerIdx = 0; innderIdx < digitsArray;

        SET currentDigit

        IF currentDigit matches the currentStringNumeral:

          numeralString += currentStringNumeral


    RETURN numeralString
  
  END

*/

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"

function integerToString(integer) {
  if (integer === 0) return "0";

  let digitsArray = getArrayOfDigits(integer);

  let numeralString = digitsArray.join("");

  return numeralString;
}

function getArrayOfDigits(integer) {
  let arrayOfDigits = [];

  let currentInteger = integer;

  let returnedDigit = 0;

  while (currentInteger > 0) {
    returnedDigit = currentInteger % 10;

    arrayOfDigits.push(returnedDigit);

    currentInteger -= returnedDigit;

    currentInteger /= 10;
  }

  return arrayOfDigits.reverse();
}

/*

Algo for (getArrayOfDigits):
  
  Initialize a variable called `currentNum` to the value of the number passed in
  
  Initialize a var called `arrayOfDigits` to an empty collection
  
  Initialize a var called `returnedDigit` to 0
  
  Return the result of evaluating the modulo operator by 10 and store the result in a variable called `returnedDigit`
  
  Push `returnedDigit` to the arrayOfDigits
  
  
  Reassign `currentInteger` to the result of subtracting `currentInteger` from `returnedDigit` 
  
  Reassign `currentInteger` to the result of dividing `currentInteger` by 10
  
  Reassign `returnedDigit` to the value of using modulo operator on `currentInteger`
  
  Push the result of that expression onto `arrayOfDigits`
  
  Reassign `currentInteger` to the result of subtracting `returnedDigit` from `currentInteger`
  
  Reassign `returnedDigit` to the result of dividing `currentInteger` by 10
  
  Push `returnedDigit` onto `arrayOfDigits`
  
  Reverse the `arrayOfDigits` and return it
  

> 789 % 10
9

> 789 - 9
780

> 780 / 10
78

> 78 % 10
8

> 78 - 8
70

> 70 / 10
7


*/
