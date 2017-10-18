const Router = require('express').Router;
const router = Router();
const City = require('../models/cities');

router
    .post('/', (req, res) => {
        new City(req.body).save()
            .then(city => res.send(city))
            .catch( err => {
                res.statusCode = 500;
                res.send(err);
            });
    })
    

      // trying to write a post that would accept more then one argument; 
    // .post('/', (req, res) => {
    //    if (req.body.length === 1) {
    //     console.log('else isnt working');
    //     new City(req.body).save()
    //         .then(city => res.send(city) )
    //         .catch( err => {
    //             res.statusCode = 500;
    //             res.send(err);
    //         });
    // } else {
    //     console.log('got to else');
    //     Promise.all((req.body).map(city => {
    //         new City(city).save()
    //             .catch( err => {
    //                 res.statusCode = 500;
    //                 res.send(err);
    //             });
    //     }))
    //         .then((data) => { 
    //             console.log('data is =======',data);
    //             res.send(data);
    //         });
    // }
    
    .get('/', (req, res) => {
        City.find()
            .then( got => res.send(got));

    })

    .get('/:id', (req, res) => {
        City.find({_id :req.params})
            .then(got => res.send(got));
    });


module.exports = router;