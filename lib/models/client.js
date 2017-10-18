const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema ({
    name: {
        type: String,
        required: true

    },
    phone: {
        type: String,
        match: /^[2-9]\d{2}-\d{3}-\d{4}$/

    },
    address: [{
        streetNumber: Number,
        city: String
    }],
    age: {
        type: Number,
        min: 18
    },
    service: {
        type: String,
        enum: ['massage', 'facial']
    },
    comments: String
});

module.exports = mongoose.model('Client', clientSchema) 