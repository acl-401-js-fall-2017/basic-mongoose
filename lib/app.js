const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('./public'));
app.use(bodyParser.json());

const clients = require('../lib/routes/clients'); //correct route?
app.use('/api/clients', clients);

module.exports = app;