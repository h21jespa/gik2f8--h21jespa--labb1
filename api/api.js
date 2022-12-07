const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

async function getBookInfoById(bookId) {
  const result = await fetch(url +"/"+bookId)
    .then((result) => result.json())
    .catch((e) => e);
    renderBookInfo(result);
  return result;
}
