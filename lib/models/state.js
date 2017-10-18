const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name: {
        type: String,
        enum: ['Oregon', 'Washington']
    },
    city: String,
    visited: Date,
    rating: Number,
    attractions: [{
        name: String,
        cost: {
            type: Number,
            min: 0
        }

    }]

});

module.exports = mongoose.model('State', stateSchema);