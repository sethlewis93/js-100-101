// The chief difference between charAt and [] occurs when using indices
// for characters that don't exist: charAt returns an empty string (''),
// while [] returns undefined:

// > "abcd"[6]
// undefined

// > "abcd".charAt(6)
// ''

// > 'abc'[-2]
// undefined

// > 'abc'.charAt(-2)
// ''
