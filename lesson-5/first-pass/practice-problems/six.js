// "string substitution," where we take a hard-coded string and modify it
//with various parameters from our program.

// Given this previously seen family object,
// print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

for (let member in munsters) {
  let memberAge = munsters[member]["age"];
  let memberGender = munsters[member]["gender"];
  console.log(`${member} is a ${memberAge} old ${memberGender}`);
}

// Each output line should follow this pattern:

// (Name) is a (age)-year-old (male or female).

// OR....

Object.entries(munsters).forEach((entry) => {
  let member = entry[0];
  let munsterAge = entry[1]["age"];
  let munsterGender = entry[1]["gender"];
  console.log(`${member}, ${munsterAge}, ${munsterGender}`);
});
