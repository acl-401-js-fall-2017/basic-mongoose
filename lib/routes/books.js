const Router = require('express').Router;
const router = Router();
const Book = require('../models/book');

router
    .post('/', (req, res) => {
        new Book(req.body).save()
            .then(savedBook => res.json(savedBook))
            .catch(err => {
                res.statusCode = 400;
                res.json({
                    errors: err.errors
                });
            });
    })

    .get('/', (req,res) => {
        Book.find()
            .then(savedBooks => res.json(savedBooks));
    })

    .get('/:id', (req,res) => {
        Book.findOne(req.param.id)
            .then(savedBook =>{
                if(!savedBook) {
                    res.statusCode = 404;
                    res.send(`id ${req.params.id} does not exist`);
                }else{
                    res.json(savedBook);
                }
            });
    })

    .delete('/:id', (req,res) => {
        Book.deleteOne(req.params.id)
            .then(result =>{
                if(result.deletedCount ===1 ){
                    res.json({ removed: true });
                }else if (result.deletedCount ===0){
                    res.json({removed: false});
                }
            });
    });

module.exports = router;