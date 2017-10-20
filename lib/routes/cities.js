const Router = require('express').Router;
const router = Router();
const City = require('../models/cities');

router
    // .post('/', (req, res) => {
    //     new City(req.body).save()
    //         .then(city => res.send(city))
    //         .catch( err => {
    //             res.statusCode = 500;
    //             res.send(err);
    //         });
    // })
    

    // trying to write a post that would accept more then one argument; 
    .post('/', (req, res) => {
        const cities = Array.isArray(req.body)? req.body : [req.body];
        Promise.all((cities).map(city => {
            return new City(city).save();
        }))
            .then((data) => { 
                res.send(data);
            });
    })
    
    .get('/', (req, res) => {
        City.find()
            .then( got => res.send(got));

    })

    .get('/:id', (req, res) => {
        City.find({_id :req.params})
            .then(got => res.send(got));
    });


module.exports = router;