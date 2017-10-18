const Router = require('express').Router;
const router = Router();
const State = require('../models/state');

router
    .post('/', (req, res) => {
        new State(req.body).save()
            .then(state => res.json(state));
    });

module.exports = router;