/* eslint-disable no-trailing-spaces */
/**
 * Write a function that takes two strings as arguments,
 * determines the length of the two strings,
 * and then returns the result of concatenating the shorter string,
 * the longer string, and the shorter string once again.
 * You may assume that the strings are of different lengths.
 */

/**
 * P:
 *  Given two strings,
 *  Return the result of concatenating the shorter string,
 *  the longer string, and the shorter string again
 */

/**E:
 * shortLongShort('abc', 'defgh');    // "abcdefghabc"
 * shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
 * shortLongShort('', 'xyz');         // "xyz"
 */

/**
 * D:
 *  String => String
 */

/**
 * A:
 *  Determine the shorter of the two strings
 *  Print the short string + long string + short string
 *  If the string is empty, return whichever string is not empty
 */

/**
 * PC: 
 *  shortLongShort(string1, string2):
 *  IF string1 === "" OR string2 === "": RETURN the string that is not empty

 *  IF string1.length > string2.length:
 *    RETURN string1 + string2 + string1 
 *  ELSE:
 *    RETURN string2 + string1 + string2
 */

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return `${string1}${string2}${string1}`;
  } else {
    return `${string2}${string1}${string2}`;
  }
}

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
console.log(shortLongShort("dkf", ""));

// <---------------------------------------->

// More concise:

const shortLongShort2 = (str1, str2) => {
  return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
};

console.log(shortLongShort2("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort2("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort2("", "xyz")); // "xyz"
console.log(shortLongShort2("dkf", ""));
