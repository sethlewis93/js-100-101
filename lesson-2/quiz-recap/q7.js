// function longestWord3(sentence) {
//   let words = sentence.split(" ");
//   let savedWord = words.shift();
//   debugger;
//   words.forEach((word) => {
//     if (word.length > savedWord.length) {
//       savedWord = word;
//     }
//   });

//   return savedWord;
// }

function longestWord1(sentence) {
  let words = sentence.split(" ");
  let savedWord = words[0];
  debugger;
  words.forEach((word) => {
    if (word.length >= savedWord.length) {
      savedWord = word;
    }
  });

  return savedWord;
}

longestWord1("The quick brown fox jumps over the lazy dog.");
