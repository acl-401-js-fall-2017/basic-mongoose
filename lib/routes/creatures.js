const Router = require('express').Router;
const router = Router();
const Creature = require('../model/creatures');


router
    .post('/', (req, res) => {
        new Creature(req.body).save()
            .then( saved => res.json(saved))
            .catch( err => {
                res.statusCode = 400;
                res.json({
                    error: err.errors
                });
            });
    })

    .get('/', (req, res) => {
        Creature.find()
            .then(found => {
                res.json(found);
            });
    });



module.exports = router;