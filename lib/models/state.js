const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name: {
        type: String,
        enum: ['Oregon', 'Washington', 'California'],
        required: true
    },
    address: {
        street: String,
        city: String
    },
    rating: {
        type: Number,
        min: 0
    },
    attractions: [{
        name: String,
        cost: {
            type: Number,
            min: 0
        }
    }]

});

module.exports = mongoose.model('State', stateSchema);