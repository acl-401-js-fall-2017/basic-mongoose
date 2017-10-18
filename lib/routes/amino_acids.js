const express = require('express');
const {Router} = express;
const AA = require('../models/aminoAcid.js');

const router = Router();

router
    .get('/:id', (req, res) => {
        AA.findById(req.params.id)
            .then(monRes => {
                if(monRes) res.send(monRes);
                else res.status(404).send('object with that id does not exist');
            })
            .catch(err => {
                res.send(err);
            });
    })
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
    })
    .delete('/:id', (req, res) => {
        AA.findByIdAndRemove(req.params.id)
            .then(monRes => {
                res.send({removed:true});
            })
            .catch(err => {
                res.send(err);
            });
    });

module.exports = router;
