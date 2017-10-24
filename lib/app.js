const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const players = require('./routes/players');
app.use('/api/players', players);

module.exports = app;