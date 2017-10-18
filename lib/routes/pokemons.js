const Router = require('express').Router;
const router = Router();
const Pokemon = require('../models/pokemon');

router
    .get('/', (req, res) => {
        Pokemon.find()
            .then(pokemons => res.json(pokemons));
    });