const router = require('express').Router();
const Altcoin = require('../models/altcoin');

router
    .get('/', (req, res) => {
        Altcoin.find()
            .then(altcoins => res.json(altcoins));
    })
    .get('/:id', (req, res) => {
        Altcoin.findById(req.params.id)
            .then(altcoin => {
                if(!altcoin) {
                    res.statusCode = 404;
                    res.send(`id ${req.params.id} does not exist`);
                }
                else res.json(altcoin);
            });
    })
    .post('/', (req, res) => {
        new Altcoin(req.body).save()
            .then(altcoin => res.json(altcoin))
            .catch(err => {
                res.statusCode = 400;
                res.json({
                    errors: err.errors
                });
            });
    });

module.exports = router;