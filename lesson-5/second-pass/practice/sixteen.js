/**
 * Given the following data structure,
 * write some code that defines an object
 * where the key is the first item in each subarray,
 * and the value is the second.
 */

let arr = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// P:
// Given an array of arrays
// Create an object where the first value of each subarray
// -- is the object's key
// and the second subarray value is the object's value

// E: Object values can be of any type

// A:
// Iterate over each subarray
// For each element of the subarray:
// -- Store element[0] and store element[1]
// -- newObj[firstEl] = secondEl

let newObj = {};

arr.forEach((subArr) => {
  let firstEl = subArr[0];
  let secondEl = subArr[1];
  newObj[firstEl] = secondEl;
});

console.log(newObj);
