/**
 * Given this previously seen family object,
 * print the name, age, and gender of each family member:
 */

let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

// P: Given an object of nested objects,
// print the keys (name), and values (age and gender) of each family member

// E: // (Name) is a (age)-year-old (male or female).

// D: Object -> Array -> Print string

// A:
// Retrieve an array of `munsters` key val pairs
// Iterate over the array:
// For every item in the array:
// -- Store the name, age, and gender
// -- Print the name, age, and gender as required in the example

Object.entries(munsters).forEach((member) => {
  let [name, attributes] = member;
  let age = attributes["age"];
  let gender = attributes["gender"];
  console.log(`
    ${name} is a ${age}-year-old ${gender}.
  `);
});
