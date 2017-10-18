const AA = require('../../lib/models/aminoAcid');
const {assert} = require('chai');

describe('amino acid model', () => {
    it('creates a valid amino-acid object', () => {
        const asparagine = new AA({
            name: 'asparagine',
            abbr1: 'a',
            abbr3: 'asn',
            polar: true,
            sideChainFuncGroups: 'amide',
            canonical: true
        });
        assert.ok(asparagine instanceof AA);
        const invalid = asparagine.validateSync();
        assert.ok(!invalid);
    });
    
    describe('validation: ', () => {
        it('requires the name field', () => {
            const asparagine = new AA({
                abbr1: 'a',
                abbr3: 'asn',
                polar: true,
                sideChainFuncGroups: 'amide',
                canonical: true
            });
            const {errors} = asparagine.validateSync();
            assert.equal(errors.name.kind, 'required');
        });
    });
});