const Router = require('express').Router;
const router = Router();
const Player = require('../models/player');

router

    .post('/', (req, res, next) => {
        new Player(req.body).save()
            .then(result => res.json(result))
            .catch(next);

    })

    .get('/:id', (req, res, next) => {
        Player.findById(req.params.id)
            .then(player => {
                if (!player) {
                    res.statusCode = 404;
                    res.send(`id ${req.params.id} does not exist`);
                } else res.json(player);
            })
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        Player.findOneAndUpdate((req.params.id), req.body, { new: true })
            .then(result => res.json(result))
            .catch(next);
    })

    .delete('/:id', (req, res) => {
        Player.findByIdAndRemove((req.params.id), req.body)
            .then(result => {
                const exists = result != null;
                res.json({ removed: exists });
            });
    });

module.exports = router;