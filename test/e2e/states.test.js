const request = require('./request');
const mongoose =require('mongoose');
const assert = require('chai').assert;

describe('states API', () => {

    const states = {
        name: 'Washington',
        city: 'Seattle', 
        date: 'October 30'
    };
    it.only('saves with id', () => {
        return request.post('/api/states')
            .send(states)
            .then(res => {
                const state = res.body;
                assert.ok(state._id);
                assert.equal(state.name, states.name);
            });

    });



});