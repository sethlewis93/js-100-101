// Print even values to the console.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach((el) => {
  el.forEach((innerEl) => {
    if (innerEl % 2 === 0) console.log(innerEl);
  });
});

// Print the expected result

let myNewArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

console.log(
  myNewArray.map((el) => {
    return el % 2 === 0 ? "even" : "odd";
  })
);

/** [
  'odd', 'odd', 'even', 'odd',
  'even', 'even', 'even', 'odd',
  'odd', 'even', 'even',
]
*/

// Write a findIntegers function that:
// takes an array argument and
// returns an array that contains only the integers
// from the input array. Use the filter method in your function.

// Number.isInteger(value) determines whether a numeric value is an integer.
//It returns true if the value is an integer, false otherwise.

let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  let newArr = [];
  newArr = arr.filter((el) => Number.isInteger(el));
  return newArr;
}

let integers = findIntegers(things);

console.log(integers); // => [1, 3, -4]

// Use map and filter to first determine the lengths of all
// the elements in an array of string values,
// then discard the even values (keep the odd values).

let arr = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(arr) {
  return arr.map((el) => (el = el.length)).filter((el) => el % 2 === 1);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
