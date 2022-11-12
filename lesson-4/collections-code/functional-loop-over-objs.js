let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

function selectFruit(obj) {
  let fruitKeys = Object.keys(obj);
  let newFruitObj = {};

  for (let counter = 0; counter < fruitKeys.length; counter += 1) {
    let currentKey = fruitKeys[counter];
    let currentVal = obj[currentKey];
    if (currentVal === "Fruit") {
      newFruitObj[currentKey] = currentVal;
    }
  }

  return newFruitObj;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
