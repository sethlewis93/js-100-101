// How would you order the following array of objects based on
//  the year of publication
// of each book, from the earliest to the latest?

let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

// On each object of the array:
// -- Get keys of that object
// -- filter through the keys
// ---- if key === published, sort keys (a - b)

// Access and store the book object and the value on each published key
// books.forEach((bookObj) => console.log(bookObj["published"]));
let sortedBooks = books.map((bookObj) => {
  return Object.keys(bookObj).filter((key) => bookObj[key]);
});

console.log(sortedBooks);
// console.log(books[0]["published"]); // => 1967
