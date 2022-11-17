// Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object
// where the names are the keys and the values are the positions in the array:

// P:
// Given a flat array,
// print an object where the array items are keys and the indecies are values.
// Input - Array | Output - Object printed to console.

// E: { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// D: Array -> Object

// A:
// Declare empty newObj
// For each `name` and `idx` in flintstones:
// -- newObj[name] = idx
// print newObj;

let newObj = {};

flintstones.forEach((name, idx) => (newObj[name] = idx));

console.log(newObj);
