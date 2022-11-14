// ITERATING OVER OBJECTS USING FOR LOOP

// First,
// we're iterating over the array of keys, pets,
// and saving each key into the currentPet variable.

// We then use the currentPet key to retrieve the appropriate value
// from the numberOfPets object.

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1,
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length) {
  // get current pet key
  let currentPet = pets[counter];
  // get the value of the current pet
  let currentPetNumber = numberOfPets[currentPet];
  // print
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}

// I have 2 dogs!
// I have 4 cats!
// I have 1 fish!
