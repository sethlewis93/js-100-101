// We can also get all of the key-value pairs of an object with Object.entries:

let obj = {
  apple: "fruit",
  banana: "fruit",
  bean: "vegetable",
  collards: "vegetable",
};

let keyValuePairs = Object.entries(obj);

keyValuePairs.forEach((produce) => {
  let [key, value] = produce;
  console.log(`Key: ${key} - Val: ${value}`);
});
