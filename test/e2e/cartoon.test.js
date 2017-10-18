const assert = require('chai').assert;
const mongoose = require('mongoose');
const request = require('./request');

describe('Cartoons API', ()=>{

    beforeEach(()=> mongoose.connection.dropDatabase());

    const rugRats = {
        name: 'Rugrats',
        releaseYear: 1991
    };

    it('Saves a cartoon with id', ()=>{

        return request.post('/api/cartoons')
            .send(rugRats)
            .then(res => {
                const cartoon = res.body;
                assert.ok(cartoon._id);
                assert.equal(cartoon.name, rugRats.name);
            });

    });
    
    it('Shoud get a cartoon by id', ()=>{
        let cartoon;
        let id;

        return request.post('/api/cartoons')
            .send(rugRats)
            .then(res => {
                cartoon = res.body;
                id = cartoon._id;
            })
            .then(()=>{
                return request.get(`/api/cartoons/${id}`)
                    .then(res =>{
                        assert.deepEqual(res.body, rugRats);
                    });
            });

    });

});