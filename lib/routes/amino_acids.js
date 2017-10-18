const express = require('express');
const {Router} = express;
const aA = require('../models/aminoAcid.js');

const router = Router();

router
    .post('/', (req, res) => {
        res.send('hey');
    });

module.exports = router;
