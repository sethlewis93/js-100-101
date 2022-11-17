// One of the most frequently used real-world string operations
// is that of "string substitution," where we take a hard-coded string
// and modify it with various parameters from our program.

// Given this previously seen family object,
// print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

// Each output line should follow this pattern:

// (Name) is a (age)-year-old (male or female).

// ------------------------------------------------------------------------ //

// P: given a nested object, log the name, age, and gender of each member.

// E: (Name) is a (age)-year-old (male or female).

// D: Nested obj -> Array of key, val pairs -> Print string

// A:
// Store the key, val pairs of munsters in an array
// Access and print the names, ages, and genders stored in the array

Object.entries(munsters).forEach((member) =>
  console.log(
    `${member[0]} is a ${member[1]["age"]}-year-old ${member[1]["gender"]}`
  )
);
