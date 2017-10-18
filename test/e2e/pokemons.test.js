const { assert } = require('chai');
const request = require('../e2e/request');
const mongoose = require('mongoose').connection;

describe('Pokemon API', () => {

    beforeEach(() => mongoose.dropDatabase() );

    const pokemons = {
        name: 'Flaaffy',
        type: 'Electric'
    };

    it('saves with id', () => {

        return request.post('/api/pokemons')
            .send(pokemons)
            .then(res => {
                const pokemon = res.body;
                assert.ok(pokemon._id);
                assert.equal(pokemon.name, pokemons.name);
            });
    });
});