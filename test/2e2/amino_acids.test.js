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

const val = {
    name: 'valine',
    abbrs: {
        abbr1: 'v',
        abbr3: 'val'
    },
    polar: false,
    group: 'nonpolar',
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
        it('gets all items', () => {

            const saveTwo = [
                request.post('/api/amino-acids').send(arg),
                request.post('/api/amino-acids').send(val)
            ];

            return Promise.all(saveTwo)
                .then(savedData => {
                    const savedTwo = JSON.parse(savedDate.text);
                    return request.get('/api/amino-acids')
                        .then(gottenData => {
                            const gottenArr = JSON.parse(gottenData.text);
                            assert.deepInclude(gottenArr, savedTwo[0]);
                            assert.deepInclude(gottenArr, savedTwo[1]);
                        });
                });
        });
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
        it('removes objects from the db', () => {
            return request.post('/api/amino-acids')
                .send(arg)
                .then(savedData => {
                    const saved = JSON.parse(savedData.text);
                    return request.del(`/api/amino-acids/${saved._id}`)
                        .then(delRes => {
                            assert.deepEqual(JSON.parse(delRes.text), {removed: true});
                        })
                        .then(() => {
                            return request.get(`/api/amino-acids/${saved._id}`)
                                .catch(err => {
                                    assert.equal(err.status, 404)
                                });
                        });
                });
        });
    });
});