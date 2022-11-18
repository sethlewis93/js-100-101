/**
 * Given the following data structure
 * // write some code to return an array containing the colors of the fruits
 * // and the sizes of the vegetables.
 * The sizes should be uppercase, and the colors should be capitalized.
 */

let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

// P:
// Given an object of nested objects,
// return an array whose string elements contain the colors of the fruits
// and the sizes of the vegetables

// E:[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
// Rules:
// -- Return the "color(s)" of items with "type" of "fruit"
// ---- Each color should begin with a capital letter
// -- Return the "size(s)" of items with "type" of "vegetable"
// ---- Each size should be upper-cased
// -- Every "color" string is nested in an array
// -- Every "size" string stands alone as a simple string
// -- Do not mutate the original object

// A:
// Declare an empty colorsAndSizes array;
// Iterate over `obj`
// For every object in `obj`:
// -- If the "type" is "fruit": push(["color"]) => colorsAndSizes;
// -- If the "type" is "vegetable": push the "size(s)" to colorsAndSizes;
// Print colorsAndSizes

// -> MY SOLUTION <-

let colorsAndSizes = [];

for (let object in obj) {
  let type = obj[object]["type"];
  let colorsArr = obj[object]["colors"];
  let size = obj[object]["size"];

  let colorsProperCase = colorsArr.map(
    (item) => (item = item[0].toUpperCase() + item.slice(1))
  );

  if (type === "fruit") {
    colorsAndSizes.push(colorsProperCase);
  } else {
    colorsAndSizes.push(size.toUpperCase());
  }
}

console.log(colorsAndSizes);

// -> LESSON SOLUTION <-

let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map((attributes) => {
  if (attributes["type"] === "fruit") {
    return attributes["colors"].map((char) => capitalize(char));
  } else {
    return attributes["size"].toUpperCase();
  }
});

// From the problem description, we know that we want to return an array where each value corresponds to one of the nested objects in the outer object, so map called on an array of the object's values is a good initial choice.

// Since the value to be returned to map by the outer callback depends on whether type equates to 'fruit' or 'vegetable', we need to use a conditional statement to perform the actions appropriate to each object.

// The situation for colors is slightly complicated since we want to pass them to our capitalize function, but they are nested within arrays. Thus, we need to iterate through those arrays to access them. Fortunately, it's a straightforward call to map.
