const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const cities = require('./routes/cities');
app.use('/api/cities', cities);

module.exports= app;