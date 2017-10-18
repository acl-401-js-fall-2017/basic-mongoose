const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;


describe('clients REST api', () => {
    beforeEach(() => mongoose.connection.dropDatabase());

    const beth = {
        name: 'Beth',
        age: 30
    };

    
    it('saves a client with id', () => {
            
        return request.post('/api/clients')
            .send(beth)
            .then(res => {
                const client = res.body;
                assert.ok(client._id);
                assert.equal(client.name, beth.name);
            
            });
    });

    
    it.skip('gets by id', () => {
        let client = null;
        return request.post('/clients')
            .send(beth)
            .then( res => {
                client = res.body;
                return request.get(`/api/clients/${client._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, client);
            });
    });

   
});