const Router = require('express').Router;
const router = Router();
const City = require('../models/cities');

router
    .post('/', (req, res) => {
        const cities = Array.isArray(req.body)? req.body : [req.body];
        Promise.all((cities).map(city => {
            return new City(city).save();
        }))
            .then( got => {
                got.length < 2 ? res.json(got[0]) : res.json(got);
            })
            .catch(err => res.send(err));
    })
    
    .get('/', (req, res) => {
        City.find()
            .then( got => res.send(got))
            .catch(err => res.send(err));
    })

    .get('/:id', (req, res) => {
        City.findById(req.params.id)
            .then(got => res.send(got))
            .catch(err => res.send(err));
    })

    .delete('/:id', (req, res) => {
        City.findByIdAndRemove(req.params.id)
            .then(deleted => res.send(deleted))
            .catch(err => res.send(err));
    })

    .put('/:id', (req, res) => {
        City.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then( updated => res.send(updated))
            .catch(err => res.send(err));
    });

module.exports = router;