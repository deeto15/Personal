const express = require('express');
const path = require('path');
const app = express();
const port = 5173;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    });

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about.html'));
    });

app.post('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about.html'));
    });

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });