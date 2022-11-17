// We can apply these same concepts to transformation.
// Let's loop through an array of strings, but with one addition:
// we'll append an s to each string in the array.
// We'll use a while loop for this example:

let fruits = ["apple", "banana", "pear"];

// P - Transform an array of strings by appending an 's' to each string's end.
// input: array of strings
// output: A NEW array of transformed strings

// E - An array of the same length as input is returned

// D - Array of strings -> Array of strings

// A:
// Declare a new array
// Loop through the array elements
// -- Store the current element
// -- Push the current element onto the new array
// -- Append an "s" to the current element
// Return the new array

function transformedElements(arr) {
  let newArr = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentElement = arr[idx];
    newArr.push((currentElement += "s"));
  }
  return newArr;
}

console.log(transformedElements(fruits));

// transformedElements; // => ['apples', 'bananas', 'pears']
