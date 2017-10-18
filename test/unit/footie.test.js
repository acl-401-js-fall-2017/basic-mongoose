const { assert } = require('chai');
const Footie = require('../../lib/models/footie');

describe('Footie Model', () => {

    it('validates a good model', () => {
        const footie = new Footie({
            playerName: 'Christian Pulisic',
            position: 'midfielder',
            teams: {
                name: 'Dortmund, USA',
                yearStarted: 2015
            },
            number: 22
        });

        assert.ok(!footie.validateSync());
    });
});