const express = require('express');
const bodyparser = require('body-parser');
const aAs = require('./routes/amino_acids');

const app = express();

app.use(express.static('/public'));
app.use(bodyparser.json());

app.use('/api/amino-acids', aAs);

module.export = app;