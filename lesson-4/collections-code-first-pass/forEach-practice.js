let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

let pairs = Object.entries(produce);

pairs.forEach((keyValue) => {
  let [key, value] = keyValue;
  console.log(`${key} is a ${value}`);
});

// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable
