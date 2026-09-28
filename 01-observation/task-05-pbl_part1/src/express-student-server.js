// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: Root endpoint '/'
app.get('/', (req, res) => {
    res.send('<h2>Welcome to the Student Directory API</h2><p>Visit /students or /about.</p>');
});

// Route 2: '/students' returning a list of at least five students
app.get('/students', (req, res) => {
    const students = [
        { id: 1, name: 'Alice Smith', major: 'Computer Science' },
        { id: 2, name: 'Bob Johnson', major: 'Artificial Intelligence' },
        { id: 3, name: 'Charlie Brown', major: 'Machine Learning' },
        { id: 4, name: 'Diana Prince', major: 'Data Science' },
        { id: 5, name: 'Evan Wright', major: 'Software Engineering' }
    ];
    // Returns the student array as JSON
    res.json(students);
});

// Route 3: '/about' displaying information about the application
app.get('/about', (req, res) => {
    res.send('<h2>About This App</h2><p>This Express.js application serves basic student records.</p>');
});

// Initialize the server
app.listen(PORT, () => {
    console.log(`Server is running and listening on http://localhost:${PORT}`);
});