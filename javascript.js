let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

// let jeff = new Book ('yes', 'no', 'ok', 'fine');
// console.log(jeff.info());

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// Book.prototype.info = function() {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
// }

function checkValid() {
  const inpObj = document.getElementById("input");
  if (inpObj.checkValidity()) {
    let formStatus = inpObj.checkValidity();
    return formStatus;
  } else {
    let formStatus = inpObj.checkValidity();
    return formStatus;
  }
}

let addButton = document.querySelector('.add-button');
addButton.addEventListener('click', addBookToLibrary);

let newBookButton = document.querySelector('.new-button');
newBookButton.addEventListener('click', () => {
  if (document.querySelector('form').style.display === 'none') {
    document.querySelector('form').style.display = 'grid';
  }
})

function addBookToLibrary(event) {
  const trigger = checkValid();
  if (trigger === true) {
    event.preventDefault();
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPages = document.querySelector('#pages').value;
    let inputRead = document.querySelector('#read');
    inputRead = inputRead.options[inputRead.selectedIndex].textContent;

    let bookObj = new Book(inputTitle, inputAuthor, inputPages, inputRead);
    myLibrary.push(bookObj);
    document.querySelector('.card-container').replaceChildren();
    loopBookList();
  } else { 
    return;
  }
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
    if (myLibrary[e.target.id].read === 'Yes') {
      myLibrary[e.target.id].read = 'No';
    } else if (myLibrary[e.target.id].read === 'No') {
      myLibrary[e.target.id].read = 'Yes';
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