const request = require('./request');
const Db = require('./Db');
const {assert} = require('chai');

const arg = {
    name: 'arginine',
    abbrs: {
        abbr1: 'arg',
        abbr3: 'r'
    }
};

describe('amino acid route', () => {
    describe('post', () => {
        it('returns the items saved with it\'s new id', () => {
            return request.post('/api/amino-acids')
                .send(arg)
                .then(res => {
                    const saved = JSON.parse(res.text);
                    assert.equal(
                        saved,
                        {
                            name: 'arginine',
                            abbrs: {
                                abbr1: 'arg',
                                abbr3: 'r'
                            }
                            _id: saved._id
                        }
                    );
                });
        });
    });

    describe('get' , () => {

    });
    
    describe('get:id', () => {

    });

    describe('delete', () => {

    });
});