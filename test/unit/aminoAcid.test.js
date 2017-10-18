const AA = require('../../lib/models/aminoAcid');
const {assert} = require('chai');

describe('amino acid model', () => {
    it('creates a valid amino-acid object', () => {
        const asparagine = new AA({
            name: 'asparagine',
            abbr1: 'as',
            abbr3: 'asn',
            polar: true,
            sideChainFuncGroups: 'amide',
            canonical: true
        });
        assert.ok(asparagine instanceof AA);
        const {errors} = asparagine.validateSync();
        assert.ok(!errors);
    });
});