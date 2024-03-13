// Import necessary modules
const express = require('express');

// Create an Express application
const app = express();

// Define routes
app.get('/home', (req, res) => {
  res.send('Welcome home');
});

app.get('/about', (req, res) => {
  res.send('Welcome to About Us page');
});

app.get('/node', (req, res) => {
  res.send('Welcome to my Node Js project');
});

// Start the server
const port = 3000; // You can change the port if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
