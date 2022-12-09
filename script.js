'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author}) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
};

function setBookInfo(bookId) {

var bookInfo = getBookInfoById(bookId).then((apiBook) => (bookInfo = apiBook));
};

function renderBookInfo(book) {
    clearBookInfo();
    let html   = `<div id="divBookInfo" 
                  class = "text-black-600 text-xl text-left mt-4 mb-7"
    
                  <p>Author: ${book.author}</p> 
                  <p>Pages: ${book.pages}</p>
                  <p>Releasedate: ${book.releaseDate}</p>
                  <p>Title:${book.title}</p>
                  <img  src="${book.coverImage}">
                  </div>`
  const root = document.getElementById('root');
  root.insertAdjacentHTML('afterend',html);
  }

  function clearBookInfo() {
    var divBookInfo = document.getElementById('divBookInfo');
    if (divBookInfo !== null) {
      divBookInfo.remove()
    }
};
