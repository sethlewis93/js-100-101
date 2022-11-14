// Create an array containing all of the keys in the object.
// Using Object.keys return an array containing all of the keys in the object. \
// Use the new array of keys to iterate over the object.

let obj = {
  one: 1,
  two: 2,
  three: 3,
};

let objectKeys = Object.keys(obj);

for (let idx = 0; idx < objectKeys.length; idx += 1) {
  console.log(`KEYS: ${objectKeys[idx]}`);
}

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1,
};

let petObjKeys = Object.keys(numberOfPets);
let index = 0;

while (index < petObjKeys.length) {
  let pet = petObjKeys[index];
  let numPets = numberOfPets[pet];
  console.log(`I have ${numPets} ${pet}`);
  index += 1;
}

// I have 2 dogs!
// I have 4 cats!
// I have 1 fish!
