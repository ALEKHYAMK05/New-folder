import { getBooks, addBook } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.getElementById('bookForm');
  const bookList = document.getElementById('bookList');
  const addBookBtn = document.getElementById('addBookBtn');

  addBookBtn.addEventListener('click', async () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;

    const newBook = { title, author, description };
    await addBook(newBook);

    displayBooks();
    clearForm();
  });

  async function displayBooks() {
    const books = await getBooks();

    bookList.innerHTML = '';

    books.forEach((book) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${book.title}</strong> by ${book.author}
        <p>${book.description}</p>
      `;
      bookList.appendChild(listItem);
    });
  }

  function clearForm() {
    bookForm.reset();
  }

  // Initial display of books
  displayBooks();
});
