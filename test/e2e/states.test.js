const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('states API', () => {

    beforeEach(() => mongoose.connection.dropDatabase());

    const states = {
        name: 'Washington',
        address: {
            street:'235 East Ave', 
            city:'Seattle'
        }, 
        visited: 'October 30',
        ranking: 7,
        attractions: [
            {name: 'science center', cost: 15}, 
            {name: 'space needle', cost: 25}
        ]
    };
    it('saves (puts) with id', () => {
        return request.post('/api/states')
            .send(states)
            .then(res => {
                const state = res.body;
                assert.ok(state._id);
                assert.equal(state.name, states.name);
            });
    });

    it('gets by id', () => {
        const states = {name: 'California', ranking: 6};
        let state = null;
        return request.post('/api/states')
            .send(states)
            .then(res => {
                state = res.body;
                return request.get(`/api/states/${state._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, state);
            });
    });

    it('get all', () => {
        const newVacation = {
            name: 'Oregon',
            address: {
                street:'255 West Ave', 
                city:'Ashland'
            }, 
            visited: 'July 30',
            ranking: 6,
            attractions: [
                {name: 'theater', cost: 45}, 
                {name: 'b and b', cost: 125}
            ]
        };
        const posts = [states, newVacation].map(state => {
            return request.post('/api/states')
                .send(state)
                .then(res => res.body);
        });

        let saved = null;
        return Promise.all(posts)
            .then(_saved => {
                saved = _saved;
                return request.get('/api/states');
            })
            .then(res => {
                assert.deepEqual(res.body, saved);
            });


    });





});