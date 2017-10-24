const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;


describe('clients REST api', () => {
    beforeEach(() => mongoose.connection.dropDatabase());

    const beth = {
        name: 'Beth',
        age: 30
    };

    const cheryl = {
        name: 'Cheryl', 
        age: 65
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

    
    it('gets by id', () => {
        let client = null;
        return request.post('/api/clients')
            .send(beth)
            .then( res => {
                client = res.body;
                return request.get(`/api/clients/${client._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, client);
            });
    });

    it('get by id returns 404 for bad id', () => {
        return request.get('/api/clients/59e83b6a7316581bf088b69f')
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 404);
                }
            );
    });

    it('gets all clients', () => {
        
        const testClients = [beth, cheryl].map(client => {
            return request.post('/api/clients')
                .send(client)
                .then(res => res.body);
        });

        let saved = null;
        return Promise.all(testClients)
            .then(_saved => {
                saved = _saved;
                return request.get('/api/clients');
            })
            .then( res => {
                assert.deepEqual(res.body, saved);
            });
    });

    it('delete by id', () => {
        let client = null;
        return request.post('/api/clients')
            .send(cheryl)
            .then(res => {
                client = res.body;
                return request.delete(`/api/clients/${client._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
                return request.get(`/api/clients${client._id}`);
            })
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 404);
                }
            );
    });
   
});