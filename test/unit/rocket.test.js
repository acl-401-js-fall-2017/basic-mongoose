const { assert } = require('chai');
const Rocket = require('../../lib/models/rocket');

describe('Rocket model', () => {

    it('A good model', () => {
        const rocket = new Rocket({
            name: 'Dragon',
            engines:['retro','liquid fueled', 'ion'],
            manufactures:[
                {
                    company: 'Space x',
                    role: 'main',
                    location: 'Hawthore, California'                    
                },
                {
                    company: 'NASA',
                    role: 'advising',
                    location: 'Washington, D.C.'
                }
            ],
            dateLaunched: new Date(),
            launch: {
                location: 'California',
                recovered: false
            },
            launchNumber: 12
        });
        assert.equal(rocket.validateSync(), undefined);
    });
});