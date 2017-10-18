const request = require('./request');
const assert = require('chai').assert;

describe('states API', () => {

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

    it.only('gets by id', () => {
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





});