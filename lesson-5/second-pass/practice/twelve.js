/**
 * Given the following data structure,
 * use a combination of methods, including filter,
 * to return a new array identical in structure to the original,
 * but containing only the numbers that are multiples of 3.
 */

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// P: given an arary of arrays
// return a new, truncated array where the numerical values
// of the inner arrays are multiples of 3

// E: use .filter() among other methods

// A:
// For each innerArray
// -- Iterate over the values of each innerArray
// ---- Filter out those values where val % 3 !== 0
// -- return the innerArrays

// -> MY SOLUTION < -

let filteredArr = [];

arr.forEach((innerArr) => {
  filteredArr.push(innerArr.filter((val) => val % 3 === 0));
});

console.log(filteredArr);
console.log(arr);

// -> LESSON SOLUTION <-

arr.map((subArr) => {
  return subArr.filter((num) => num % 3 === 0);
});
// => [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]

// We know that we want to return a new array with the same structure,
// so map is an excellent choice to call on the original array.
//For each subarray, we then return a subset of the subarray
// that contains only multiples of the number 3.
