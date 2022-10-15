const cardTitle = document.querySelector('.card div:nth-child(1)');
const cardAuthor = document.querySelector('.card div:nth-child(2)');
const cardPages = document.querySelector('.card div:nth-child(3)');
const cardRead = document.querySelector('.card div:nth-child(4)');

let myLibrary = [];

console.log(cardTitle.textContent);

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
  for(i = 0;i < myLibrary.length;i++) {
    book = myLibrary[i];
  }
  let bookTitle = book.title;
  let bookAuthor = book.author;
  let bookPages = book.pages;
  let bookRead= book.read;
  cardTitle.textContent += bookTitle;
  cardAuthor.textContent += bookAuthor;
  cardPages.textContent += bookPages;
  cardRead.textContent += bookRead;
}

// console.log(myLibrary);
addBookToLibrary();
displayInfo();
// addBookToLibrary();
// addBookToLibrary();
// addBookToLibrary();
// addBookToLibrary();
// console.log(displayInfo());
// console.log(myLibrary[0]);