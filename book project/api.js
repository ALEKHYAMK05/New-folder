const BASE_URL = 'https://crudcrud.com/api/2d96ecf0d3af4a3a9708cf1b8cec4b8e/books'; // Replace with your actual API key

export async function getBooks() {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching books:', error);
      return [];
    }
  }
  
  export async function addBook(book) {
    try {
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }
  In this approach, the api.js file contains functions to interact with the API, and the app.js file is responsible for handling the user interface and integrating with the API module. This modular structure makes the code more maintainable and scalable. Remember to replace 'YOUR_CRUDCRUD_API_KEY' with your actual CRUDCrud API key.
  
  
  
  
  User
  add a delete button beside every book add delete option to delete the book and i dont want author name 
  
  ChatGPT
  Certainly! I've added a "Delete" button beside every book, and I've removed the author name based on your request. The delete button triggers a function to delete the respective book.
  
  HTML (index.html):
  html
  Copy code
  <!-- ... (previous HTML code) -->
  
  <ul id="bookList"></ul>
  
  <script type="module" src="app.js"></script>
  JavaScript (app.js):
  javascript
  Copy code
  import { getBooks, addBook, deleteBook } from './api.js';
  
  document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    const addBookBtn = document.getElementById('addBookBtn');
  
    addBookBtn.addEventListener('click', async () => {
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
  
      const newBook = { title, description };
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
          <strong>${book.title}</strong>
          <p>${book.description}</p>
          <button onclick="deleteBookById('${book._id}')">Delete</button>
        `;
        bookList.appendChild(listItem);
      });
    }
  
    async function deleteBookById(bookId) {
      await deleteBook(bookId);
      displayBooks();
    }
  
    function clearForm() {
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
    }
  
    // Initial display of books
    displayBooks();
  });
  JavaScript (api.js):
  javascript
  Copy code
  const BASE_URL = 'https://crudcrud.com/api/YOUR_CRUDCRUD_API_KEY/books'; // Replace with your actual API key
  
  export async function getBooks() {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching books:', error);
      return [];
    }
  }
  
  export async function addBook(book) {
    try {
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }
  
  export async function deleteBook(bookId) {
    try {
      await fetch(`${BASE_URL}/${bookId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  }