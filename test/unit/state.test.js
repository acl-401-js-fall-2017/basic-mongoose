const State = require('../../lib/models/state');
const assert = require('assert');

describe('State Model', () => {

    it('good model', () => {
        const state = new State({
            name: 'Oregon',
            city: 'Portland',
            visited: 'Oct 16, 2016',
            rating: 9,
            attractions: [{
                name: 'zoo',
                cost: -8
            }]

        });
        state.validate();
    });

    it('name must be OR or WA', () => {
        const state = new State({name: 'orygun'}, {name: 'Oregon'});
        const { errors } = state.validateSync();
        assert.equal(errors.name.kind, 'enum');
    });

    it('rating must be number', () => {
        const state = new State({rating: 'true'});
        const { errors } = state.validateSync();
        assert.equal(errors.rating.kind, 'Number');
    });

    it('cost must be positive', () => {
        const state = new State({attractions:[{cost: -3}]});
        const { errors } = state.validateSync();
        assert.equal(errors['attractions.0.cost'].kind, 'min');
    });
});