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
                  class="mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                  <p>${book.id}</p>
                  <p>${book.author}</p> 
                  <p>${book.pages}</p>
                  <p>${book.releaseDate}</p>
                  <p>${book.title}</p>
                  <img src="${book.coverImage}">
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
