const request = require('./request');
const Db = require('./Db');
const {assert} = require('chai');

const arg = {
    name: 'arginine',
    abbrs: {
        abbr1: 'r',
        abbr3: 'arg'
    },
    polar: true,
    group: 'amine',
    canonical: true
};

describe('amino acid route', () => {

    describe('post', () => {
        it('returns the items saved with it\'s new id', () => {
            return request.post('/api/amino-acids')
                .send(arg)
                .then(res => {
                    const saved = JSON.parse(res.text);
                    assert.equal(saved.name, arg.name);
                    assert.equal(saved.abbrs.abbr1, saved.abbrs.abbr1);
                });
        });
    });

    describe('get' , () => {
    });
    
    describe('get:id', () => {
        it('gets an item by id', () => {
            return request.post('/api/amino-acids')
                .send(arg)
                .then(res => {
                    const saved = JSON.parse(res.text);
                    return request.get(`/api/amino-acids/${saved._id}`)
                        .then(data => {
                            const gotten = JSON.parse(data.text);
                            assert.deepEqual(gotten, saved);
                        });
                });
        });
    });

    describe('delete', () => {

    });
});