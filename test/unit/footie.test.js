const { assert } = require('chai');
const Footie = require('../../lib/models/footie');

describe('Footie Model', () => {

    it('validates a good model', () => {
        const footie = new Footie({
            playerName: 'Christian Pulisic',
            position: 'midfielder',
            teamInfo: {
                name: 'Dortmund',
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
    });

    // it.skip('Team must be Dortmund', () => {
    //     const footie = new Footie({ 
    //         teamInfo: [
    //             { name: 'Dortmund' },
    //             { name: 'MANCHESTER UNITED' }
    //         ] 
    //     });
    //     const { errors } = footie.validateSync();
    //     assert.equal(errors['teamInfo.0.name'].kind, 'enum');
    // });
});