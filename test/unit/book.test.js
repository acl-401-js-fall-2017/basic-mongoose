const assert = require('assert');

const Book = require('../../lib/models/book');

describe('Book model', () => {
    it('check the model works', ()=> {
        const alchemist = new Book({
            title: 'Alchemist',
            author: 'Paulo Coelho',
            datePublished: 2014 ,
            pages: 208
        }); 

        assert.equal(alchemist.validateSync(), undefined);
    });

    it('title is required', ()=> {
        const alchemist = new Book({}); 
        const { errors } =alchemist.validateSync();
        assert.equal(errors.title.kind, 'required');
    
    });

    it('pages must be positive', ()=> {
        const alchemist = new Book({pages:0}); 
        const { errors } =alchemist.validateSync();
        assert.equal(errors.pages.kind, 'min');
    
    });

});