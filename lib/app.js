const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const states = require('./routes/states');

app.use('/api/states', states);

module.exports = app;