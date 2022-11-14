let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

let onlyVegetables = {};

let produceKeyValues = Object.entries(produce);

produceKeyValues.forEach((producePair) => {
  let [produce, type] = producePair;
  if (type === "Vegetable") {
    onlyVegetables[produce] = type;
  }
});

console.log(onlyVegetables);
// onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
