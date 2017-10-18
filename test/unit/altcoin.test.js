const { assert } = require('chai');
const Altcoin = require('../../lib/models/altcoin');

describe.only('Altcoin Model', () => {
    it('good model', () => {
        const altcoin = new Altcoin({
            name: 'Ethereum',
            ticker: 'ETH',
            priceUSD: 54200,
            hash: 'Ethash'
        });
        assert.equal(altcoin.validateSync(), undefined);
    });
});