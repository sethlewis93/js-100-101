/**
 * Given the following data structure,
 * sort the array so that the sub-arrays are ordered based on
 * the sum of the odd numbers that they contain.
 */

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// -> MY SOLUTION <-

arr.sort((a, b) => {
  let currentFilteredArr = a.filter((num) => num % 2 === 1);
  let nextFilteredArr = b.filter((num) => num % 2 === 1);

  let sumOfCurrentArr = currentFilteredArr.reduce((prev, curr) => prev + curr);
  let sumOfNextArr = nextFilteredArr.reduce((prev, curr) => prev + curr);

  return sumOfCurrentArr - sumOfNextArr;
});

console.log(arr);

// -> LESSON SOLUTION <-

arr.sort((a, b) => {
  let oddSumA = a
    .filter((num) => num % 2 === 1)
    .reduce((sum, next) => sum + next);
  let oddSumB = b
    .filter((num) => num % 2 === 1)
    .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

// We use Array.prototype.filter to filter each subarray down to its odd elements. We then use the reduce function to calculate the sum of the odd values in each array. The last line returns a positive, negative, or 0 value so sort can order the arrays appropriately.
