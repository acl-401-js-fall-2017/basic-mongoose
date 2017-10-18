// const Client = require('../../lib/models/client');
// const client = require('../lib/routes/clients');
// const db = require('db');
const chai = require('chai');
const { assert } = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const connection = require('mongoose').connection;
const app = require('../../lib/app');
const request = chai.request(app);

require('../../lib/connect');
process.env.MONGODB_URI = 'mongodb://localhost:27017/testE2e';



describe('clients REST api', () => {
    beforeEach(() => connection.dropDatabase());
    const beth = {
        name: 'Beth',
        age: 30
    };

    
    it('saves a client', () => {
            
        return request.post('/clients')
            .send(beth)
            .then(res => {
                const client = res.body;
                assert.ok(client.name);
                assert.equal(client.name, beth.name);
            });
    });

    
    it('gets by id', () => {
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