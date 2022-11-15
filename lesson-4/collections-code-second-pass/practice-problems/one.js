// What is the return value of the filter method call below? Why?

[1, 2, 3].filter((num) => "hi");

// => [1, 2, 3]

// filter performs a test based on the truthiness of the array elements.
// The RETURN VALUE is always "hi", which evaluates to truthy.
// Therefore, filter returns a copy of the original array.
