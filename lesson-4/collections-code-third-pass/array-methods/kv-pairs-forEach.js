// We can also get all of the key-value pairs of an object with Object.entries:
let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

// P - Print the kv pairs of a given object to the console

// E - print as simple english statements

// D - Object -> Array -> String printed to the console

// A:
// Store the produceObjs kv pairs in a producePairs array
// For each product of producePairs:
// -- Extract the key and value from product
// -- print (product is a value) to the console.

let producePairs = Object.entries(produce);

producePairs.forEach((product, idx) => {
  let [key, val] = product;
  console.log(`${key} is a ${val}`);
  //console.log(`Index: ${idx}, Product: ${product}, Type: ${typeof product}`);
});
