const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Port Number
const port = 8080;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
