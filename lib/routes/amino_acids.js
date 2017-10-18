const express = require('express');
const {Router} = express;
const AA = require('../models/aminoAcid.js');

const router = Router();

router
    .post('/', (req, res) => {
        new AA(req.body)
            .save()
            .then(monRes => {
                res.send(monRes);
            })
            .catch(err => {
                res.statusCode = 400;
                res.json({
                    errors: err.errors
                });
            });
        // res.send({response:'hey'});
    });

module.exports = router;
