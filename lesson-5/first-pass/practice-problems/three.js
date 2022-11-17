// For each of these collection objects,
// demonstrate how you would access the letter g.

let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];

// console.log(
//   arr1.map(function (el) {
//     if (typeof el === "object") {
//       return el.filter((item) => item === "g");
//     }
//   })
// );

let arr2 = [
  { first: ["a", "b", "c"], second: ["d", "e", "f"] },
  { third: ["g", "h", "i"] },
];

arr2.forEach((obj) => console.log(Object.keys(obj)));
// console.log(getG);

let arr3 = [["abc"], ["def"], { third: ["ghi"] }];

let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
