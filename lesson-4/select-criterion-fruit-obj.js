// Recall earlier we wrote a selectFruit function that selected fruits out of the produceList object of fruits and vegetables. Suppose we wish to select generic produce types; we want to be able to specify whether we're interested in selecting fruits or vegetables or some other kind of produce, entirely. Here's how we could build such a function:

function selectType(produceList, selectionCriterion) {
  let produceKeys = Object.keys(produceList);
  let selectedItems = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    // used to be (currentValue === 'Fruit')
    if (currentValue === selectionCriterion) {
      selectedItems[currentKey] = currentValue;
    }
  }

  return selectedItems;
}

let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

console.log(selectType(produce, "Fruit")); // => {apple: 'Fruit', pear: 'Fruit'}
console.log(selectType(produce, "Vegetable")); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
console.log(selectType(produce, "Meat")); // => {}
