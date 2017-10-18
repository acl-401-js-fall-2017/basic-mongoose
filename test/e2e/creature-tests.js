const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('creature api', () => {

    beforeEach( () => mongoose.connection.dropDatabase() );

    const creature = {
        name: 'vampire criminal',
        createType: 'vampire',
        power: 2,
        toughness: 3,
        abilities: 'flying',
        protectionFrom: 'red',
        diesToRemoval: true
    };

    describe('POST', () => {
        it('posts with valid _id', () => {
            return request.post('/api/creatures')
                .send(creature)
                .then( res => {
                    assert.ok(res.body._id);
                });
        });


    });

    describe('GET', () => {
        it('gets creature from db', () => {
            return request.post('/api/creatures')
                .send(creature)
                .then( () => request.get('/api/creatures'))
                .then( got => {
                    console.log(got.body);
                    assert.ok(got.body);
                });
        });
    });

});