const Router = require('express').Router;
const router = Router();
const Client = require('../models/client');

router
    .get('/', (req, res) => {
        Client.find()
            .then(client => res.json(client));
    });

module.exports = router;