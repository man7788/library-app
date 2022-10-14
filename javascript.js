const tableTitle = document.querySelector('tbody tr:nth-child(1)>td');
const tableAuthor = document.querySelector('tbody tr:nth-child(2)>td');
const tablePages = document.querySelector('tbody tr:nth-child(3)>td');
const tableRead = document.querySelector('tbody tr:nth-child(4)>td');


let myLibrary = [];

console.log(tableTitle.textContent);

function Book() {
  this.info = function() {
    let info = `${title} by ${author}, ${pages} pages, ${read}`
    return info;
  }
}

function addBookToLibrary() {
  userTitle = prompt("Book name?");
  userAuthor = prompt("Author's name?");
  userPages = prompt("How many page?");
  userRead = prompt('Have you read it? (Yes/No)');
  let bookObj = {
    title: userTitle,
    author: userAuthor,
    pages: userPages,
    read: userRead,
  }
  myLibrary.push(bookObj);
}

function displayInfo() {
  let book;
  for(i = 0;i < 1;i++) {
    book = myLibrary[i];
  }
  let bookTitle = book.title;
  let bookAuthor = book.author;
  let bookPages = book.pages;
  let bookRead= book.read;
  tableTitle.textContent = bookTitle;
  tableAuthor.textContent = bookAuthor;
  tablePages.textContent = bookPages;
  tableRead.textContent = bookRead;
  // return bookTitle;
  // return book;
}

addBookToLibrary();
// addBookToLibrary();
// addBookToLibrary();
console.log(myLibrary);
console.log(displayInfo());
// console.log(myLibrary[0]);