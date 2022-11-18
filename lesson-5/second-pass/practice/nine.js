// Given the following data structure,
// return a new array with the same structure,
// but with the values in each subarray ordered --
// alphabetically or numerically as appropriate -- in ascending order.

let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

// P:
// Given an array of arrays, return a new array
// where each element of the subarrays is sorted in ascending order.

// E: none
// Rules:
// -- maintain the same structure as the original
// -- do not mutate the orignal - return a new array

// A:
// Copy the original array into arrayCopy
// Iterate over each array of arrayCopy
// If every element in the array is a string
// -- call array.sort()
// -- else: sort each array's elements in ascending order (a - b)

// -> MY SOLUTION <-

let arrayCopy = arr.map((innerArr) => {
  if (innerArr.every((el) => typeof el === "string")) {
    return innerArr.sort();
  } else {
    return innerArr.sort((a, b) => a - b);
  }
});

console.log(arrayCopy); // [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]

// -> LESSON SOLUTION <-

arr.map((subArr) => {
  if (typeof subArr[0] === "string") {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]

//   From the problem description, we know that we need to return a new array with its contents transformed in some way, so map is a fairly obvious choice for the initial method that we need to call on the array.

//   We also know that we want each subarray to be ordered, so sort is an obvious choice here. However, since we're dealing with two types of arrays, we'll have to use two versions of sort. For the string arrays, we can use sort without arguments to sort them alphabetically. For the numbers, we must use a callback; otherwise, the numbers will be sorted by their UTF-16 character values.

//   We're using slice to obtain a copy of the subarray since sort is a destructive operation, and we don't want to mutate the subarrays.
