const { assert } = require('chai');
const request = require('../e2e/request');
const mongoose = require('mongoose').connection;

describe('Pokemon API', () => {

    beforeEach(() => mongoose.dropDatabase() );

    const Flaaffy = {
        name: 'Flaaffy',
        type: 'Electric'
    };

    it('saves with id', () => {

        return request.post('/api/pokemons')
            .send(Flaaffy)
            .then(res => {
                const pokemon = res.body;
                assert.ok(pokemon._id);
                assert.equal(pokemon.name, Flaaffy.name);
            });
    });

    it('fails on save with validation errors', () => {
        return request.post('/api/pokemons')
            .send({})
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 400);
                    const body = err.response.body;
                    assert.ok(Object.keys(body.errors).length);
                }
            );
    });

    it('get by id', () => {
        let pokemon = null;
        return request.post('/api/pokemons')
            .send(Flaaffy)
            .then( res => {
                pokemon = res.body;
                return request.get(`/api/pokemons/${pokemon._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, pokemon);
            });
    });

    it('get by id returns 404 for bad id', () => {
        return request.get('/api/pokemons/59e83b6a7316581bf088b69f')
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 404);
                }
            );
    });

    it('delete by id', () => {
        let pokemon = null;
        return request.post('/api/pokemons')
            .send(Flaaffy)
            .then(res => {
                pokemon = res.body;
                return request.delete(`/api/pokemons/${pokemon._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
                return request.get(`/api/pokemons${pokemon._id}`);
            })
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 404);
                }
            );
    });

    it('gets all crews', () => {
        const jolteon = {
            name: 'Jolteon',
            type: 'Electric'
        };

        const posts = [Flaaffy, jolteon].map(pokemon => {
            return request.post('/api/pokemons')
                .send(pokemon)
                .then(res => res.body);
        });

        let saved = null;
        return Promise.all(posts)
            .then(_saved => {
                saved = _saved;
                return request.get('/api/pokemons');
            })
            .then(res => {
                assert.deepEqual(res.body, saved);
            });
    });
}); 