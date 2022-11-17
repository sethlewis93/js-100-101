// Using the forEach method,
// write some code to output all vowels from the strings in the arrays.
// Don't use a for or while loop.

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

// P:
// given an object whose property values are arrays of one or more strings,
// print the vowels from each individual string contained in the arrays

// E: none

// D: Object -> Array (for iteration) -> Output String

// A:
// Get the values of the object and store them in an array
// For each of the strings in the values:
// -- If the strings include 'aeiou', log them to the console.

Object.values(obj).forEach((arr) =>
  arr.forEach((word) => {
    // implement vowel selection here
  })
);
