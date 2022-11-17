// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let munsterValues = Object.values(munsters);

let ages = munsterValues.filter((obj) => {
  let totalAge = 0;
  if (obj.gender === "male") {
    totalAge += obj.age;
  }
  return totalAge;
});
console.log(ages);

// Compute and display the total age of the male members of the family.
