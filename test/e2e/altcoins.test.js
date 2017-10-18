const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('altcoins API', () => {
    beforeEach(() => mongoose.connection.dropDatabase());

    const ethereum = {
        name: 'Ethereum',
        ticker: 'ETH',
        price: {
            USD: 300,
            hr24: {
                percentChange: 5.5,
                volumeUSD: 620625000
            }

        },
        hash: 'Ethash'
    };

    it('saves with id', () => {
        return request.post('/api/altcoins')
            .send(ethereum)
            .then(res => {
                const altcoin = res.body;
                assert.ok(altcoin._id);
                assert.equal(altcoin.name, ethereum.name);
            });
    });
});