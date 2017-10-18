const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const books = require('./routes/books');
app.use('/api/books', books);

module.exports = app;