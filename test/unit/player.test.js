const { assert } = require('chai');
const Player = require('../../lib/models/player');

describe('Player Model', () => {

    it('validates a good model', () => {
        const player = new Player({
            name: 'Christian Pulisic',
            position: 'Midfielder',
            teamInfo: {
                name: 'Dortmund',
                yearStarted: 2015
            },
            number: 22
        });

        assert.ok(!player.validateSync());
    });

    it('required fields', () => {
        const player = new Player({});
        const { errors } = player.validateSync();

        assert.equal(errors['name'].kind, 'required');
    });

    it('Team must be Dortmund', () => {
        const player = new Player({ 
            teamInfo: [
                { name: 'Dortmund' },
                { name: 'MANCHESTER UNITED' }
            ] 
        });
        const { errors } = player.validateSync();
        assert.equal(errors['teamInfo.1.name'].kind, 'enum');
    });
});