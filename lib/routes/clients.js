const Router = require('express').Router;
const router = Router();
const Client = require('../models/client');


router

    .get('/', (req, res) => {
        Client.find()
            .then(client => res.json(client));
    })

    .get('/:id', (req, res) => {
        Client.findById(req.params.id)
            .then(client => {
                if(!client) {
                    res.statusCode = 404;
                    res.send(`id ${req.params.id} does not exist`);
                }
                else res.json(client);
            });
    })

    .post('/', (req, res) => {
        new Client(req.body).save()
            .then(client => res.json(client))
            .catch(err => {
                res.statusCode = 400;
                res.json({
                    errors: err.errors
                });
            });
    });



module.exports = router;