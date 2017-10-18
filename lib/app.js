const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// const fruits = require('./routes/soccer');
// app.use('/api/soccer', fruits);

module.exports = app;