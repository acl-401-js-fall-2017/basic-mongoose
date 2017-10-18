const Creature = require('../../lib/model/creatures');
// const assert = require('chai').assert;

describe('schema unit test', () => {

    it('validates', () => {

        const creature = new Creature ({
            name: 'raging goblin',
            power: 1,
            toughness: 1,
            diesToRemoval: true
        });

        creature.validate();

    });



});