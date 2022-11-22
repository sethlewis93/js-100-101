/**
 * Given the following data structure
 * write some code to return an array containing the colors of the fruits
 * and the sizes of the vegetables.
 * The sizes should be uppercase, and the colors should be capitalized.
 */

let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

// The return value should look like this:

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// Retrieve k-v pairs with entries()

// iterate over the array's attributes
// -- check whether the type is "fruit" or "vegetable"
// -- If type is "fruit",
// ---- Set the first character of "colors" to uppercase
// ---- return the transformed array
// -- If type is "vegetable"
// ---- Set the entire word to uppercase and return the word
// Return the transformed attributes array

let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

// let sizeAndColors = Object.entries(obj).map((attributes) => {
//   let colorsArr = attributes["colors"];
//   let veggieSize = attributes["size"];
//   if (attributes["type"] === "fruit") {
//     return colorsArr.map((color) => capitalize(color));
//   } else {
//     return veggieSize.toUpperCase();
//   }
// });

let sizeAndColors = Object.values(obj).map((attributes) => {
  let colorsArr = attributes["colors"];
  let veggieSize = attributes["size"];

  if (attributes["type"] === "fruit") {
    return colorsArr.map((color) => capitalize(color));
  } else {
    return veggieSize.toUpperCase();
  }
});

console.log(sizeAndColors);
