const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Read messages from file
function readMessages() {
    try {
        const messages = fs.readFileSync('messages.txt', 'utf8').split('\n').filter(Boolean);
        return messages.reverse(); // Reverse to show latest message at the top
    } catch (err) {
        console.error('Error reading messages:', err);
        return [];
    }
}

// Render the form with messages
app.get('/', (req, res) => {
    const messages = readMessages();
    res.render('index', { messages });
});

// Handle form submission
app.post('/submit', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const message = body.trim();
        if (message) {
            fs.appendFileSync('messages.txt', message + '\n');
        }
        res.redirect('/');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
