const AA = require('../../lib/models/aminoAcid');
const {assert} = require('chai');

describe('amino acid model', () => {
    it('creates a valid amino-acid object', () => {
        const asparagine = new AA({
            name: 'asparagine',
            abbrs: {
                abbr1: 'a',
                abbr3: 'asn'
            },
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
                abbrs: {
                    abbr1: 'a',
                    abbr3: 'asn'
                },
                polar: true,
                sideChainFuncGroups: 'amide',
                canonical: true
            });
            const {errors} = asparagine.validateSync();
            assert.equal(errors.name.kind, 'required');
        });

        it('requires abb1 to be a single character and abb3 to be a three char string; both may be letters only', () => {
            const asparagine = new AA({
                name: 'asparagine',
                abbrs: {
                    abbr1: 'adfweq',
                    abbr3: 'a23'
                },
                polar: true,
                sideChainFuncGroups: 'amide',
                canonical: true
            });
            assert.ok(asparagine instanceof AA);
            const {errors} = asparagine.validateSync();
            assert.equal(errors['abbrs.abbr1'].kind, 'regexp');
            assert.equal(errors['abbrs.abbr3'].kind, 'regexp');
        });
        
        it('requires that sideChainFuncGroups be an enum value', () => {
            const asparagine = new AA({
                name: 'asparagine',
                abbrs: {
                    abbr1: 'a',
                    abbr3: 'asn'
                },
                polar: true,
                sideChainFuncGroups: 'bloop',
                canonical: true
            });
            assert.ok(!asparagine.sideChainFuncGroups);
        });
    });
});