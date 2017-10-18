const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

const client = require('../lib/routes/clients');

app.use('/api/client', client);

module.exports = app;