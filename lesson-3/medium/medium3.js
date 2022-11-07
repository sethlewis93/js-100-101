// QUESTION #3

// Instructions

// Alan wrote the following function,
// which was intended to return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(40));

// Alyssa noticed that this code would fail when the input is
// 0 or a negative number, and asked Alan to change the loop.
// How can he make this work without using a do/while loop?

// Note that we're not looking to find the factors for 0 or negative numbers,
// but we want to handle it gracefully instead of raising an exception
// or going into an infinite loop.

// Bonus: What is the purpose of number % divisor === 0 in that code?

// PROBLEM:
// --> Alan's function fails when 0 or a negative number passed to the function.
// --> It fails because even though it should stop `while (divisor !== 0)`,
// --> it runs nonetheless becuase of the `do` keyword.
// --> Our job is to refactor the code so that it handles the 0 or negatives
// --> gracefully without the `do/while` loop.

// EXAMPLES:
// We need code that will not execute when the divisor is === 0

// --> MY SOLUTION(S) <--

// Solution 1: convert `do/while` to `while`
// -> Works for the case of 0, but not negative numbers

// Solution 2: wrap `divisor` in `Math.abs()` method to convert negative numbers
// to positive ones.
// --> Doesn't work for negative numbers AND it heads in the direction of
// --> attempting to solve for negative numbers.

// Solution 3: convert to `while`, execute if divisor !==0 AND
// `number` is NOT negative

function factorsRefactored(number) {
  let divisor = number;
  let factors = [];
  while (divisor !== 0 && Math.sign(number) !== -1) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factorsRefactored(40)); // returns [1,2,4,5,8,10,20,40]
console.log(factorsRefactored(0)); // returns empty array
console.log(factorsRefactored(-40)); // returns empty array

// --> PREFERRED SOLUTION(S) <--

function factorsSoltution(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factorsSoltution(40)); // returns [1,2,4,5,8,10,20,40]
console.log(factorsSoltution(0)); // returns empty array
console.log(factorsSoltution(-40)); // returns empty array

// LESSON LEARNED:

// don't check for the conditions of multiple variables when checking for one
// will suffice.
// I had a feeling that `Math.sign(number) !=    = -1` was overkill because
// inside the function, `number` is reassigned to `divisor` so there is no need
// to use both in the condition.

// Also, be more careful about what you're checking for. The issue here was:
// --> "Is `divisor` 0 or a negative number?" That can easily be checked with
// --. `divisor > 0`.

// <---------------------- *** -------------->
// <---------------------- *** -------------->
