// Let's look at an example with objects.
// In this example, we want to select the key-value pairs
// where the value is 'Fruit'.

let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

// P:
// From a given object, select and return the kv pairs where v === "Fruit".
// Input - object | Output - New, selective object

// E - Only those kv pairs where "Fruit" is the value are selected

// D - Object -> Object less than or equal to the length of the original.

// A:
// Declare an empty selectedFruit obj
// Retrieve the keys of the input object
// Loop over those keys:
// Store the currentProduceKey
// Store the currentProduceValue of the obj's currentProduceKey
// If the currentProduceValue === "Fruit"
// -- Add that currentProduceValue to selectedFruit's currentProduceKey.
// Return selectedFruit

function selectFruit(obj) {
  let selectedFruit = {};

  let produceKeys = Object.keys(obj);
  for (let idx = 0; idx < produceKeys.length; idx++) {
    let currentProduceKey = produceKeys[idx];
    let currentProduceValue = obj[currentProduceKey];

    if (currentProduceValue === "Fruit") {
      selectedFruit[currentProduceKey] = currentProduceValue;
    }
  }

  return selectedFruit;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
