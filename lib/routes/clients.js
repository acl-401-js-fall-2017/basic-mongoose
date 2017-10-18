const Router = require('express').Router;
const router = Router();
const Client = require('../models/client');
const express = require('express');
const app = express();

router;

app.post('/clients', (req, res) => {
    new Client(req.body)
        .save()
        .then(client => res.send(client))
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

app.get('/', (req, res) => {
    Client.find()
        .then(client => res.json(client));
});


module.exports = router;