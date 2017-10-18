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

    it('required fields', () => {
        const footie = new Footie({});
        const { errors } = footie.validateSync();
        assert.equal(errors['playerName'].kind, 'required');
        // assert.equal(errors['teams.name'].kind, 'required');
    });
});