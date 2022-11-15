// 1.) Object.keys(arr) => returns the indecies as string values:
// --> ["0", "1", "2"]

// 2.) Adding non-element (i.e. NOT non-negative integer) values:👇🏾

let arr = [2, 4, 6];
arr[-3] = 5;
arr["foo"] = "a";
console.log(arr); // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length); // 3
console.log(Object.keys(arr)); // [ '0', '1', '2', '-3', 'foo' ]
arr.map((x) => x + 1); // [ 3, 5, 7 ]

// 3.) ALL built in methods ignore non-element values.

// 4.) Is `trickArr` empty??

let trickArr = [];
trickArr[-3] = 5;
trickArr["boo"] = "hoo";

console.log(trickArr.length); // 0
console.log(Object.keys(trickArr)); // [ '-3', 'boo' ]

// ANSWER: it depends.
