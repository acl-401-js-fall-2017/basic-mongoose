const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: String,
    teamInfo: [{
        name: {
            type: String,
            enum: ['Dortmund', 'USA', 'Barcelona', 'Chelsea'],
        },
        yearStarted: {
            date: Date,
        },
    }],
    number: Number,
});

module.exports = mongoose.model('Player', playerSchema);