const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('rockets rest API', () => {

    beforeEach(() => mongoose.connection.dropDatabase());

    it('it saves a rocket by id', () => {

        let apollo = {
            name: 'apollo',
            dateLaunched: new Date(),
            launchNumber: 11
        };

        return request.post('/api/rockets')
            .send(apollo)
            .then(res => {
                const dbRocket = res.body;
                assert.ok(dbRocket._id);
                assert.equal(dbRocket.name, apollo.name);
            });
    });

    it('get saved rocket with id', () => {
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
    });

    it('returns 404 for getting a bad id', () => {
        return request.get('/api/rockets/59e401db548d1096dde508a6')
            .then(
                () => { throw new Error('found incorrect id'); },
                err => {
                    assert.equal(err.status, 404);
                });
    });

    it('gets all rockets from database', () => {
        let skylab = {
            name: 'skylab',
            dateLaunched: new Date(),
            launchNumber: 1
        };
        let apollo = {
            name: 'apollo',
            dateLaunched: new Date(),
            launchNumber: 11
        };

        const dbRockets = [skylab, apollo].map(rocket => {
            return request.post('/api/rockets')
                .send(rocket)
                .then(res => res.body);
        });

        let saved = null;
        return Promise.all(dbRockets)
            .then(_saved => {
                saved = _saved;
                return request.get('/api/rockets');
            })
            .then(res => {
                assert.deepEqual(res.body, saved);
            });
    });

    it('deletes saved db object with givin id', () => {
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
                return request.delete(`/api/rockets/${dbRocket._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
            });
    });
});