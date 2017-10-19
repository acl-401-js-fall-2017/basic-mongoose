const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const footieSchema = new Schema({
    playerName: {
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

module.exports = mongoose.model('Footie', footieSchema);