/**
 * Given the following data structure,
 * write some code to return an array which contains only the objects
 * where all the numbers are even.
 */

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// P:
// Given an array of complex objects,
// Return a new array containing only the objects
// whose values (which are arrays) exclusively store even numbers

// E:
// -- The returned array will have fewer than or equal elements as the original
// -- If EVERY element of the array stored as the object's value is NOT
// ---- an even number: discard that object from the original array

// A:
// Filter through `arr` and examine each object
// Return only the objects whose array elements are even numbers

// P2:
// `keys` cb

// ->  <-

let evenObjectsArr = arr.filter((object) => {
  return Object.values(object).every((arrOfValues) => {
    return arrOfValues.every((value) => value % 2 === 0);
  });
});

console.log(evenObjectsArr);
