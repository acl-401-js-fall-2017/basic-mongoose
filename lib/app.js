
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

const pokemons = require('./routes/pokemons');
app.use('/api/pokemons', pokemons);

module.exports = app;