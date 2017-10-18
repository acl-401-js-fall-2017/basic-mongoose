const Cartoon = require('../../lib/model/cartoon');
const chai = require('chai');
const assert = chai.assert; 


describe('Cartoon Model', ()=> {

    it('good model', () => {
        const cartoon = new Cartoon({
            name: 'Rugrats',
            releaseYear: 1991 
        });
        assert.equal(cartoon.validateSync(), undefined);
    });

    it('bad model', () => {
        const cartoon = new Cartoon({
            name: 1991,
            releaseYear: 'Rugrats'
        });
        assert.deepEqual(cartoon.validateSync().errors.releaseYear.kind, 'Number'); 
    });



});