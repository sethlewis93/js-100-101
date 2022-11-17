// How would you order the following array of objects
// based on the year of publication of each book,
// from the earliest to the latest?

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

// P:
// Given an array of objects,
// order each of the objects based on the value of the "published" key
// in order from earliest to latest

// E: none given

// D: Array of objects -> Array of keys and values -> Sorted array of objects

// A:
// For each object: Sort based on the value of object["published"]

books.sort(
  (obj1, obj2) => Number(obj1["published"]) - Number(obj2["published"])
);

console.log(books);
