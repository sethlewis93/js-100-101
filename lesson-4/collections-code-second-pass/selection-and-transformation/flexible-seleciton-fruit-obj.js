let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

function selectType(obj, selectionCriterion) {
  // declare new obj
  let selectedProduce = {};
  let produceKeys = Object.keys(obj);

  for (let idx = 0; idx < produceKeys.length; idx++) {
    let produceKey = produceKeys[idx];
    let produceValue = obj[produceKey];

    if (produceValue === selectionCriterion) {
      selectedProduce[produceKey] = selectionCriterion;
    }
  }

  // return object
  return selectedProduce;
}

console.log(selectType(produce, "Fruit")); // => {apple: 'Fruit', pear: 'Fruit'}
console.log(selectType(produce, "Vegetable")); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
console.log(selectType(produce, "Meat")); // => {}
