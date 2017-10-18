const Creature = require('../../lib/model/creatures');
const assert = require('chai').assert;

describe('schema unit test', () => {

    it('validates', () => {

        const creature = new Creature ({
            name: 'raging goblin',
            power: 1,
            toughness: 1,
            diesToRemoval: true
        });

        assert.equal(creature.validateSync(), undefined);
    });

    it('returns error if no name', () => {

        const creature = new Creature ({
            power: 3,
            toughness: 1
        });

        const { errors } = creature.validateSync();
        assert.equal(errors['name'].kind, 'required');
    });

    it('non-color property in protectionFrom throws error', () => {

        const creature = new Creature ({
            name: 'slime wizard',
            protectionFrom: 'criticism'
        });

        const { errors } = creature.validateSync();
        assert.equal(errors.protectionFrom.kind, 'enum');
    });




});