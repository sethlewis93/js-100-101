// It seems like forEach is better suited to filtering an object
// than using a combination of forEach and filter.

// select the key-value pairs from our produce object
// where the value is Vegetable

let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

// P:
// select kv pairs from `produce` where the value is vegetable using forEach
// Input - object | Output - New Object

// E: onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}

// D - Object -> Arrary -> Object

// A:
// Declare empty veggiesOnly object
// Store kv pairs into an array producePairs
// For each `item` in the array:
// -- Store key and value of `item`
// -- If item[value] === "Vegetable"
// ---- veggiesOnly[key] = "Vegetable"

let veggiesOnly = {};

let producePairs = Object.entries(produce);

producePairs.forEach((item) => {
  let [key, val] = item;
  if (val === "Vegetable") {
    veggiesOnly[key] = val;
  }
});

console.log(veggiesOnly);
