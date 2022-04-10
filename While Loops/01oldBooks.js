function oldBooks(input) {
  let index = 0;
  let neededBook = input[index];
  index++;
  let nextBook = input[index];
  index++;

  let bookCounter = 0;

  while (nextBook !== "No More Books") {
    if (nextBook === neededBook) {
      console.log(`You checked ${bookCounter} books and found it.`);
      break;
    }

    bookCounter++;
    nextBook = input[index];
    index++;
  }
  if (nextBook === "No More Books") {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${bookCounter} books.`);
  }
}

oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
