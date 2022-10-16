
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

let addButton = document.querySelector('.add-button');
addButton.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
  const userTitle = document.querySelector('#title').value;
  const userAuthor = document.querySelector('#author').value;
  const userPages = document.querySelector('#pages').value;
  const userRead = document.querySelector('#read').value;
  let bookObj = new Book(userTitle, userAuthor, userPages, userRead);
  myLibrary.push(bookObj);
  displayInfo();
}


const cardTitle = document.querySelector('.card div:nth-child(1)');
const cardAuthor = document.querySelector('.card div:nth-child(2)');
const cardPages = document.querySelector('.card div:nth-child(3)');
const cardRead = document.querySelector('.card div:nth-child(4)');

function displayInfo() {
  let book;
  for(i = 0;i < myLibrary.length;i++) {
    book = myLibrary[i];
  }
  cardTitle.textContent += book.title;
  cardAuthor.textContent += book.author;
  cardPages.textContent += book.pages;
  cardRead.textContent += book.read;
}

