
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

let newBookButton = document.querySelector('.new-button');
newBookButton.addEventListener('click', () => {
  if (document.querySelector('form').style.display === 'none') {
    document.querySelector('form').style.display = 'block';
  }
})

function addBookToLibrary() {
  const inputTitle = document.querySelector('#title').value;
  const inputAuthor = document.querySelector('#author').value;
  const inputPages = document.querySelector('#pages').value;
  const inputRead = document.querySelector('#read').value;
  let bookObj = new Book(inputTitle, inputAuthor, inputPages, inputRead);
  myLibrary.push(bookObj);
  document.querySelector('.card-container').replaceChildren();
  loopBookList();
}

function loopBookList() {
  for (i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i] === undefined) { 
      continue; 
    } else {
    let bookTitle = myLibrary[i].title;
    let bookAuthor = myLibrary[i].author;
    let bookPages = myLibrary[i].pages;
    let bookRead = myLibrary[i].read;
    addCard(bookTitle, bookAuthor, bookPages, bookRead, i);
    }
  }
}

function addCard(title, author, pages, read, attribute) {
  const libraryCard = document.createElement('div');
  const cardTitle = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const cardPages = document.createElement('div');
  const cardRead = document.createElement('div');
  const removeButton = document.createElement('button');
  const changeButton = document.createElement('button');

  cardTitle.textContent = 'Title: ' + title;
  cardAuthor.textContent = 'Author: ' + author;
  cardPages.textContent = 'Pages: ' + pages;
  cardRead.textContent = 'Read: ' + read;
  removeButton.textContent = 'Remove';
  removeButton.setAttribute('id', attribute);
  removeButton.addEventListener('click', (e) => {
    myLibrary[e.target.id] = undefined;
    document.querySelector('.card-container').replaceChildren();
    loopBookList();
  })
  changeButton.textContent = 'Read Status';
  changeButton.setAttribute('id', attribute);
  changeButton.addEventListener('click', (e) => {
    if (myLibrary[e.target.id].read === 'yes') {
      myLibrary[e.target.id].read = 'no';
    } else if (myLibrary[e.target.id].read === 'no') {
      myLibrary[e.target.id].read = 'yes';
    }
    document.querySelector('.card-container').replaceChildren();
    loopBookList();
  })

  libraryCard.classList.add('card');
  libraryCard.appendChild(cardTitle);
  libraryCard.appendChild(cardAuthor);
  libraryCard.appendChild(cardPages);
  libraryCard.appendChild(cardRead);
  libraryCard.appendChild(removeButton);
  libraryCard.appendChild(changeButton);
  document.querySelector('.card-container').appendChild(libraryCard);
}