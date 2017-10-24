const mongoose = require('mongoose');
const assert = require('chai').assert;
const request = require('./request');

describe('player API', () => {

    beforeEach(() => mongoose.connection.dropDatabase());

    const player = {
        playerName: 'Christian Pulusic',
        position: 'Midfielder',
        teamInfo: {
            name: 'Dortmund',
            yearStarted: 2015
        },
        number: 22
    };

    it('saves a player', () => {
        return request.post('/api/players')
            .send(player)
            .then(({ body }) => {
                assert.equal(body.name, player.name);
            });
    });

    it('gets a player with an id', () => {
        let savedPlayer = null;
        return request.post('/api/players')
            .send(player)
            .then(res => {
                savedPlayer = res.body;
                return request.get(`/api/players/${savedPlayer._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, savedPlayer);
            });
    });

    // it('gets by id and returns a 404 with a bad id', () => {
    //     const player = {
    //         name: 'Christian Pulusic',
    //         position: 'Midfielder',
    //         teamInfo: {
    //             name: 'Dortmund',
    //             yearStarted: 2015
    //         },
    //         number: 22
    //     };
    //     return request.post('/api/players')
    //         .send(player)
    //         .then(res => {
    //             return request.put(`/api/players/${res.body._id}`).send(update);
    //         })
    //         .then(res => {
    //             assert.equal(res.body.name, update.name);
    //         });
    // });

});