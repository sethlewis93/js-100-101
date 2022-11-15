// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

// Declare number variable. Get the values. forEach value: num += value
let num = 0;
Object.values(ages).forEach((age) => (num += age));
console.log(num);
