// Calling slice without any arguments returns a shallow copy

let arr = ["a", "b", "c", "d", "e", "f", "g"];
arr.slice(); // => [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

// Note that we said that slice returns a copy of the array
// and not the original array.
// How would you verify that in the node console?

// > arr === arr.slice()
// false

// It's also a shallow copy instead of a deep copy.
// This becomes important when the copied array contains...
// ..objects and other arrays as elements.

// How would you verify that in the node console?

// > let complexArr = ["a", ["b", "c"], { d: "e", f: "g" }, "h"];
// undefined
// > let copyComplexArr = complexArr.slice();
// undefined
// > copyComplexArr.push(5)
// 5
// > complexArr
// [ 'a', [ 'b', 'c' ], { d: 'e', f: 'g' }, 'h' ]
// > copyComplexArr[1].push(6)
// 3
// > complexArr
// [ 'a', [ 'b', 'c', 6 ], { d: 'e', f: 'g' }, 'h' ]
// > copyComplexArr
// [ 'a', [ 'b', 'c', 6 ], { d: 'e', f: 'g' }, 'h', 5 ]

// > copyComplexArr[2].bar = 7;
// 7
// > complexArr
// [ 'a', [ 'b', 'c', 6 ], { d: 'e', f: 'g', bar: 7 }, 'h' ]
// > copyComplexArr
// [ 'a', [ 'b', 'c', 6 ], { d: 'e', f: 'g', bar: 7 }, 'h', 5 ]
