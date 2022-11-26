/**
 * Log all odd numbers from 1 to 99, inclusive, to the console,
 * with each number on a separate line.
 */

/**
 * P:
 *  Given a range of numbers, log only the odd numbers from 1 to 99
 *  (inclusive).
 *  Each number must be on a separate line
 */

/**
 * E:
 * 1
 * 3
 * 5
 * etc.
 */

/**
 * D: Integer -> Log integer
 */

/**
 * A:
 *  Set a maxNum variable
 *  Set a counter variable
 *  While the counter is less than the maxNum:
 *  - If the counter is an odd number:
 *  - - print the counter
 *  Close loop
 */

let maxNum = 100,
  counter = 1;

while (counter < maxNum) {
  if (counter % 2 === 1) console.log(counter);
  counter++;
}
