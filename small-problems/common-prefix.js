console.log(comparePrefix(["flower", "flow", "flight"]));
console.log(comparePrefix(["interest", "interstellar", "interspecies"]));
console.log(comparePrefix(["dog", "cat", "pig"]));

function comparePrefix(arr) {
  let finalCommonPrefix = "";
  let currentCommonPrefix = getCommonPrefix(arr[0], arr[1]);
  for (let idx = 2; idx < arr.length; idx += 1) {
    finalCommonPrefix += getCommonPrefix(currentCommonPrefix, arr[idx]);
  }
  return finalCommonPrefix;
}

function getCommonPrefix(str1, str2) {
  let prefix = "";
  for (let idx = 0; idx < str1.length; idx += 1) {
    if (str1[idx] === str2[idx]) {
      prefix += str1[idx];
    }
  }
  return prefix;
}
