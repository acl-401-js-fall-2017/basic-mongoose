const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('rockets rest API', () => {

    beforeEach(() => mongoose.connection.dropDatabase());

    const apollo = {
        name: 'apollo',
        dateLaunched: new Date(),
        launchNumber: 11
    };

    it('it saves a rocket by id', () => {
        return request.post('/api/rockets')
            .send(apollo)
            .then(res => {
                const dbRocket = res.body;
                assert.ok(dbRocket._id);
                assert.equal(dbRocket.name, apollo.name);
            });
    });

    it('get saved object with id', () => {
        let skylab = {
            name: 'skylab',
            dateLaunched: new Date(),
            launchNumber: 1
        };


        let dbRocket = null;
        return request.post('/api/rockets')
            .send(skylab)
            .then(res => {
                dbRocket = res.body;
                return request.get(`/api/rockets/${dbRocket._id}`);
            });
            // .then(res => {
            //     assert.deepEqual(res.body, dbRocket);
            // });
    });

});