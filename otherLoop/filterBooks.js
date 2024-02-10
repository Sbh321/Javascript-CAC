const books = [
  {
    name: "Book 1",
    genre: "Fiction",
    publishDate: "2022-01-01",
    edition: 1,
  },
  {
    name: "Book 2",
    genre: "Fantasy",
    publishDate: "2022-02-15",
    edition: 2,
  },
  {
    name: "Book 3",
    genre: "Science Fiction",
    publishDate: "2021-11-30",
    edition: 3,
  },
  {
    name: "Book 4",
    genre: "Adventure",
    publishDate: "2022-03-10",
    edition: 1,
  },
  {
    name: "Book 5",
    genre: "Thriller",
    publishDate: "2022-05-20",
    edition: 2,
  },
  {
    name: "Book 6",
    genre: "Romance",
    publishDate: "2022-04-05",
    edition: 1,
  },
  {
    name: "Book 7",
    genre: "Adventure",
    publishDate: "2021-12-25",
    edition: 2,
  },
  {
    name: "Book 8",
    genre: "Biography",
    publishDate: "2022-06-15",
    edition: 1,
  },
  {
    name: "Book 9",
    genre: "Horror",
    publishDate: "2022-07-30",
    edition: 3,
  },
  {
    name: "Book 10",
    genre: "Adventure",
    publishDate: "2022-08-10",
    edition: 1,
  },
];

// console.log(books);

let bookFilter0 = books.filter((obj) => obj.genre === "Adventure");
console.log(bookFilter0);

bookFilter0 = books.filter((obj) => {
  return obj.edition >= 2;
});
console.log(bookFilter0);

console.log(typeof books[0].publishDate);
