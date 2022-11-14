// Let's look at an example with objects.
// In this example, we want to select the key-value pairs
//where the value is 'Fruit'.

// How would you implement this function?

let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

function selectFruit(obj) {
  let fruitObject = {};
  let produceKeys = Object.keys(obj);

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentProduce = produceKeys[counter];
    if (obj[currentProduce] === "Fruit") fruitObject[currentProduce] = "Fruit";
  }
  return fruitObject;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
