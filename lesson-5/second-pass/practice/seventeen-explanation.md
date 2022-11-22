# LESSON 5, PRACTICE PROBLEM 17

Ok, so question 17 wasn't that "hard" to get working... but the explanation/suggested solution is throwing me for a loop...(ooooh, that was pretty bad, huh?)

### SUGGESTED SOLUTION:

```javascript
function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let sections = [8, 4, 4, 4, 12];

  let uuid = "";
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += "-";
    }
  });

  return uuid;
}

generateUUID(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'
```

I love the solution and everything about it makes sense to me... except for this part:

```javascript
if (sectionIndex < sections.length - 1) {
  uuid += "-";
}
```

`sectionIndex` is the current index of the element being processed in the array. So if we follow the `sections` array in order, it looks like:

```
  Section: 8 - Index: 0
  Section: 4 - Index: 1
  Section: 4 - Index: 2
  Section: 4 - Index: 3
  Section: 12 - Index: 4
```

I totally get that. No problem. My hangup is in the logic: if `sectionIndex` is less than the sections array ( minus one accounting for the zero-based index), use the addition assignment operator to add "-" to the `uuid` string.

Ok...but how does that logic **properly place the "-" character at the appropriate locations in the string**?

Running through the logic manually, here's what I see:

```javascript
/*
    uuid (after the nested `for` loop finishes doing it's thing but before the comparison): 8ffcefdbd8b86d9b8f554fa99bf8daef
*/

/*
    sectionIndex -> 0 | (sections.length - 1): 4
        uuid (after the first implementation of the conditional check): 8ffcefdbd8b86d9b8f554fa99bf8daef-

    sectionIndex: 1 | (sections.length - 1): 4
        uuid (after the second implementation of the conditional check): 8ffcefdbd8b86d9b8f554fa99bf8daef--
    
    ...and so on unttil sectionIndex === sections.length - 1
*/
```

I realize that this is incorrect, but having combed over this and typed all this out I still just don't get it... the logic looks so simple, but I can't explain why it works.

For reference, here is how I approached the problem. **WARNING** it's a horror show below...but it does work...

### MY CODE:

```javascript
let hexadecimalArr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function randomSelection() {
  return Math.floor(Math.random() * (32 - 1) + 1);
}

function randomIndex() {
  let randomValue = randomSelection();
  if (randomValue > 15) {
    return Math.floor(randomValue / 2);
  }
  return randomValue;
}

function printUUID() {
  let uuidArr = [];
  let idx = 0;

  // Yes: go ahead and judge me. It's fine. I won't cry...
  while (idx < 32) {
    uuidArr.push(hexadecimalArr[randomIndex()]);
    idx += 1;
  }

  let uuidString = uuidArr.join("");

  // "Slice" is right: hackin' and slashin' Freddy & Jason style...
  function uuidSeparator(string) {
    let octalStr = string.slice(0, 8);
    let quadStrOne = string.slice(8, 12);
    let quadStrTwo = string.slice(12, 16);
    let quadStrThree = string.slice(16, 20);
    let dodecaStr = string.slice(20, 32);

    // Oh good: now we're in Texas Chainsaw Massacre land...
    let completedUUIDString = `${octalStr}-${quadStrOne}-${quadStrTwo}-${quadStrThree}-${dodecaStr}`;

    // I think "Jigsaw" Kramer is responsible for these variable names...
    return completedUUIDString;
  }

  // "Congratulations. You are still alive. Most people are so ungrateful to be alive. But not you. Not anymore."
  return uuidSeparator(uuidString);
}
```

Ok, so that was pretty bad...very verbose and not at all utilizing any array methods covered in the lesson.

I share my solution as a way to provide context into how I was thinking about the problem. You can see that I nad _no idea_ how to implement inserting the "-" character in the appropriate slots.

I've definitely learned something from the experince of solving this and then comparing a suggested solution to my own, but I'm very interested in the following from anyone who wants to comment:

1. As I mentioned above, _what is happening here_ `if (sectionIndex < sections.length - 1)`? How does this logic properly place the "-" character at the appropriate locations in the string?
2. I'd love general comments or thoughts on my solution above. Criticisms, suggestions, "what the heck are you thinking on line \_\_ !?!?", etc. Happy to read all of it.

✌🏾
