let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1,
};

for (const pets in numberOfPets) {
  let number = numberOfPets[pets];
  console.log(`I have ${number} ${pets}!`);
}
