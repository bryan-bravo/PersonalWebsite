const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Port Number
const port = 8081;

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//portfolio
app.use(express.static(path.join(__dirname, 'public')));
app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
//Aquila Client
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/aquila', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//OS algorithms
app.use(express.static(path.join(__dirname, 'OS')));
app.get('/paging-algorithms', (req, res) => {
    res.sendFile(path.join(__dirname, 'OS/pagereplacement.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});