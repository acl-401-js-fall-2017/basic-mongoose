const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe ('books API', () => {
    beforeEach(() => mongoose.connection.dropDatabase());

    const bookOfTales = { title: 'alchemist', pages: 220};

    it('saves with id', () => {
        return request.post('/api/books')
            .send(bookOfTales)
            .then(res => {
                const savedBook = res.body;
                assert.ok(savedBook._id);
                assert.equal(savedBook.title, bookOfTales.title);
            });
    });

    it('does not save if there is validation error', () =>{
        return request.post('/api/books')
            .send({title:123})
            .then(() => { throw new Error();},
                err => {
                    assert.equal(err.status, 400);
                    // const body = err.response.body;
                    // assert.ok(Object.keys(body.errors).length);
                });
    });

    it('gets by id', () => {
        let savedBook = null;
        return request.post('/api/books')
            .send(bookOfTales)
            .then(res => {
                savedBook = res.body;
                return request.get(`/api/books/${savedBook._id}`);
            });
    });

    it('get by id return 404 for bad id', () => {
        return request.get('/api/books/59dfeaeb083bf9beecc97ce8')
            .then(
                ()=> {throw new Error();},
                err => {
                    assert.equal(err.status, 404);
                }
            );
    });

    it('get all the books', () => {
        const bookOfFacts = { title: 'Guiness', pages: 666 };
        
        const bookCollection = [bookOfTales, bookOfFacts].map(book => {
            return request.post('/api/books')
                .send(book)
                .then(res => res.body);
        });
        
        let saved = null;
        return Promise.all(bookCollection) //???
            .then(_saved => {
                saved = _saved;
                return request.get('/api/books');
            })
            .then(res => {
                assert.deepEqual(res.body, saved);
            });
    });

    it('deletes with id', () => {
        let savedBook =null;
        return request.post('/api/books')
            .send(bookOfTales)
            .then(res => {
                savedBook = res.body;
                return request.delete(`/api/books/${savedBook._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
            });

    });

    it('returns false when deletes with bad id', () => {
        return request.delete('/api/books/59dfeaeb083bf9beecc97ce6')
            .then(res => {
                assert.deepEqual(res.body, { removed: false });
            });

    });

    



    
});
