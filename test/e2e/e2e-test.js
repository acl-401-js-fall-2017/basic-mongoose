const request = require('./request');
const mongoose = require('mongoose');
const { assert } = require('chai');

describe ('cities API CRUD', () => {

    beforeEach(() => mongoose.connection.dropDatabase());

    const portland = {
        name: 'Portland',
        weather: 'dreadful',
        population: 1000000,
        attractions: [
            { 
                name: 'Rose&Thistle',                  
                type: 'bar',
                price: 'cheap'
            },
            {
                name: 'OMSI after dark',
                type: 'museum',
                price: 'moderate',
                date: 'every 3rd wednesday'
            }
        ]
    }; 

    const paris = {
        name: 'Paris',
        weather: 'snobby',
        population: 5000000,
    }; 

    it('Post should save with id', () => {
        return request.post('/api/cities')
            .send(portland)
            .then(res => {
                assert.ok(res.body._id);
                assert.equal(res.body.name, portland.name);
            });
    });

    it('Gets all posted cities', () => {
        return request.post('/api/cities')
            .send([portland, paris])
            .then (() => {
                return request.get('/api/cities');
            })
            .then(res => {
                assert.equal(res.body.length, 2);
                assert.ok(res.body.find(c=> c.name === portland.name));
                assert.ok(res.body.find(c=> c.name === paris.name));
            });
    });

    it('Gets entries by id', () => { 
        return request.post('/api/cities')
            .send(portland)
            .then( (res)=>{
                return request.get(`/api/cities/${res.body._id}`);
            })
            .then((res) => {
                assert.equal(res.body.name, portland.name);
            });
    });

    it('delets by id', () => {
        return request.post('/api/cities')
            .send(portland)
            .then( res => {
                return request.delete(`/api/cities/${res.body._id}`);
            })
            .then (res => {
                assert.equal(res.body.name, portland.name);
            });
    });

    it('updates by id and return updated version', () => {
        return request.post('/api/cities')
            .send(portland)
            .then(res => {
                return request.put(`/api/cities/${res.body._id}`)
                    .send({name: 'updated'});
            })
            .then( updated => assert.equal(updated.body.name, 'updated'));
    });

});