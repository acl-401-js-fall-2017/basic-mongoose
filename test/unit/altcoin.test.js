const { assert } = require('chai');
const Altcoin = require('../../lib/models/altcoin');

describe.only('Altcoin Model', () => {
    it('good model', () => {
        const altcoin = new Altcoin({
            name: 'Ethereum',
            ticker: 'ETH',
            price: {
                USD: 5400,
                hr24: {
                    percentChange: 4.5,
                    volumeUSD: 2250300000	
                }
            },
            hash: 'Ethash'
        });
        assert.equal(altcoin.validateSync(), undefined);
    });

    it('required fields', () => {
        const altcoin = new Altcoin({});
        const { errors } = altcoin.validateSync();
        assert.equal(errors['name'].kind, 'required');
        assert.equal(errors['price.USD'].kind, 'required');
    });

    it('hash must be valid', () => {
        const altcoin = new Altcoin({
            hash: 'x11'
        });
        const { errors } = altcoin.validateSync();
        assert.equal(errors['hash'].kind, 'enum');
    });
});