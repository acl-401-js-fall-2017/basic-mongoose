// const mongoose = require('mongoose');

const Router = require('express').Router;
const router = Router();

const Rocket = require('../models/rocket');

router
    .post('/', (req, res) =>{
        new Rocket (req.body).save()
            .then(result => res.send(result)
            )
            .catch(console.error);//eslint-disable-line
    })
    .get('/', (req, res) =>{
        Rocket.find()
            .then(result => res.send(result))
            .catch(console.error);//eslint-disable-line
    })
    .get('/:id', (req, res) => {
        Rocket.findOne(req.param.id)
            .then(dbRocket => {
                if(!dbRocket){
                    res.statusCode = 404;
                    res.send(` id ${req.params.id} not found`);
                } else {
                    res.json(dbRocket);
                }
            }) 
        .catch(console.error);//eslint-disable-line
    });

module.exports = router;
