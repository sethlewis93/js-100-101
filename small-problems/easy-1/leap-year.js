/* eslint-disable max-len */
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

// P:
/**
 * Given a number, write a function that returns true if the following criteria
 * are met:
 * 1. The number is divisible by 4 AND the number is NOT divisible by 100
 * 2. Number is divisible by 100 AND divisible by 400
 */

// Examples:

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true

/**
 * D:
 *  Integer -> Boolean
 */

/**
 * A:
 *  If the number is divisible by 4 but NOT by 100: return true
 *  If the number is divisible by 100 AND by 400: return true
 *  All other cases return false
 */

function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0
    ? true
    : year % 100 === 0 && year % 400 === 0;
}

// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

// Examples:

console.log("----------JULIAN LEAP YEAR----------------");

const isJulianLeapYear = (year) => {
  return year > 1752 ? isLeapYear(year) : year % 4 === 0;
};

console.log(isJulianLeapYear(2016)); // true
console.log(isJulianLeapYear(2015)); // false
console.log(isJulianLeapYear(2100)); // false
console.log(isJulianLeapYear(2400)); // true
console.log(isJulianLeapYear(240000)); // true
console.log(isJulianLeapYear(240001)); // false
console.log(isJulianLeapYear(2000)); // true
console.log(isJulianLeapYear(1900)); // false
console.log(isJulianLeapYear(1752)); // true
console.log(isJulianLeapYear(1700)); // true
console.log(isJulianLeapYear(1)); // false
console.log(isJulianLeapYear(100)); // true
console.log(isJulianLeapYear(400)); // true
