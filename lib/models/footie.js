const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const footieSchema = new Schema({
    playerName: {
        type: String,
        required: true
    },
    position: String,
    teams: [{
        name: {
            type: String,
            enum: ['Dortmund, USA', 'Barcelona, Spain'],
            required: true,
        },
        yearStarted: {
            date: Date,
        },
    }],
    number: Number,
});

module.exports = mongoose.model('Footie', footieSchema);