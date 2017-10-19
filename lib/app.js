const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const publicDir = '../../public';
app.use(express.static(publicDir));
app.use(bodyParser.json());

const creatures = require('./routes/creatures');

app.use('/api/creatures', creatures);

module.exports = app;