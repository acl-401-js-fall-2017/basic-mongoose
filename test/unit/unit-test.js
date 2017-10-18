const City = require('../../lib/models/cities');
const { assert } = require('chai');

describe('City model validation', () => {
    
    it('Should validate valid input', () => {
        const portland = new City({
            name: 'Portland',
            weather: 'dreadful',
            population: 1000000,
            attractions: [
                { 
                    name: 'Rose&Thistle',                  
                    type: 'bar',
                    price: 'cheap'
                },
                {
                    name: 'OMSI after dark',
                    type: 'museum',
                    price: 'moderate',
                    date: 'every 3rd wednesday'
                }
            ]
        });
        assert.equal(portland.validateSync(), undefined);


    });

    it( 'should require a name', ()=> {
        const nameless = new City({
            weather: 'wonderful',
            population: 10001,
        });
        assert.equal(nameless.validateSync().errors['name'].kind, 'required' );

    });

    it('should only validate one of predetermined types of attractions', () => {
        const paris = new City({
            name: 'paris',
            attractions: [
                {
                    name: 'french girls',
                    type: 'romance',
                    price:'personal charisma dependent'
                },
                { 
                    name: 'luvre',
                    type: 'museum',
                    price: 'expensive'
                }
            ]
        });
        console.log(paris.validateSync().errors['attractions.0.type']);
        assert.equal(paris.validateSync().errors['attractions.0.type'].kind, 'enum');

    });

});
