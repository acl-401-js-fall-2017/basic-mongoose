const { assert } = require('chai');
const Rocket = require('../../lib/models/rocket');

describe('Rocket model', () => {

    it('Validates a  good model', () => {
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
            launchLocation: 'California',
            recovered: false,
            launchNumber: 12
        });
        assert.equal(rocket.validateSync(), undefined);
    });

    it('required fields', () =>{
        const rocket = new Rocket();
        const { errors } = rocket.validateSync();
        assert.equal(errors['name'].kind, 'required');
        assert.equal(errors['dateLaunched'].kind, 'required');
        assert.equal(errors['launchNumber'].kind, 'required');
    });

    it('Launches must be 1 or more', () => {
        const rocket = new Rocket({ launchNumber: 0 });
        const { errors } = rocket.validateSync();
        assert.equal(errors['launchNumber'].kind, 'min');
    });

});