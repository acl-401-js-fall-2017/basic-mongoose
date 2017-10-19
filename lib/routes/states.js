const Router = require('express').Router;
const router = Router();
const State = require('../models/state');

router
    .post('/', (req, res) => {
        new State(req.body).save()
            .then(state => res.json(state))
            .catch(err => {
                console.log('err', err); //eslint-disable-line
                res.status(500).end();
            });

            
    })

    .get('/:id', (req, res) => {
        State.findById(req.params.id)
            .then(state => {
                if(!state) {
                    res.statusCode = 404;
                    res.send(`id ${req.params.id} does not exist`);
                } 
                else res.json(state);
            });
    })

    .get('/', (req, res) => {
        State.find()
            .then(states => res.json(states));

    })

    .delete('/:id', (req, res) => {
        State.findByIdAndRemove(req.params.id)
            .then(results => {
                const exists = results != null;
                console.log('exists', exists);
                res.json({removed: exists});
                
            });
    });

module.exports = router;