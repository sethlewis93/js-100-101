// What happens when you provide negative arguments to slice?

"abcdefghi".slice(-4, -2); // => 'fg'

// When given negative numbers as the indices,
// slice treats them as [string length + index].

// "abcdefghi" string lengh = 9
// indexStart = -4
// 9 + (-4) = 5
// .slice()'s start index = 5 (the char "f")

// "abcdefghi" string length = 9
// indexEnd = -2
// 9 + (-2) = 7
// .slice()'s end index = 7 (the character where .slice() ends is "h")

// In the above, an index of -4 is equivalent to 9 + (-4)
// since the length of the string is 9 and 9 + (-4) equals 5.
// Likewise, -2 is equivalent to 7.
