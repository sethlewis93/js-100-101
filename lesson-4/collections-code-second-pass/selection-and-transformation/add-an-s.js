// We can apply these same concepts to transformation.
// Let's loop through an array of strings, but with one addition:
// we'll append an s to each string in the array.
// We'll use a while loop for this example:

let fruits = ["apple", "banana", "pear"];
let transformedArr = [];
let counter = 0;

while (counter < fruits.length) {
  transformedArr.push(fruits[counter] + "s");
  counter += 1;
}

console.log(transformedArr);
