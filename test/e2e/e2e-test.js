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

    it.only('Gets all posted cities', () => {
        return request.post('/api/cities')
        
        //Question: why cant i send both cities like send(portland, paris)
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

    it.skip('Gets entries by id', () => { 
        return request.post('/api/cities')
            .send(portland)
            .then( (res)=>{
                return request.get(`/api/cities/${res.body._id}`);
            })
            .then((res) => {
                assert.equal(res.name, portland.name);
            });
    });




});