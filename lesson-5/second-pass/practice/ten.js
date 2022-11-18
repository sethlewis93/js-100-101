// Perform the same transformation of sorting the subarrays
//  we did in the previous exercise with one difference;
// sort the elements in descending order.

let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

// -> MY SOLUTION <-

/**
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_with_non-well-formed_comparator for an explanation of how differnt JS engines' comparing functions will interpret the code.
 */

let arrayCopy = arr.map((innerArr) => {
  return innerArr.sort(function (a, b) {
    return a > b ? -1 : 0;
  });
});

console.log(arrayCopy);

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

// -> LESSON SOLUTION <-

arr.map((subArr) => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === "number") {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

// We use the first if to take care of the case
//  where the subarray elements are numbers.
// The second if/else compares the strings with each other
//  and returns -1, 1 or 0 based on the comparison.
