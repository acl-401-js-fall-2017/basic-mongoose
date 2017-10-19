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
                res.send(found);
            });
    })

    .get('/:id', (req, res) => {
        Creature.findById(req.params.id)
            .then( found => {
                if (!found) {
                    res.statusCode = 404;
                    res.send(`could not find ${req.params.id}`);
                }
                else res.json(found);
            });
    })

    .delete('/:id', (req, res) => {
        Creature.findByIdAndRemove(req.params.id)
            .then( deleted => {
                const exists = ( deleted != null );
                res.json({ removed: exists });
            });

    })

    .put('/:id', (req, res) => {
        Creature.findByIdAndUpdate(req.params.id, req.body)
            .then( () => {
                return Creature.findById(req.params.id)
                    .then( found => res.send(found) );
            });
    });




module.exports = router;