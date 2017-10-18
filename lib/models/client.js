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
        streetAddress: String,
        city: String,
        state: String,
    }],
    age: {
        type: Number,
        min: 18
    },
    service: {
        type: String,
        enum: ['massage', 'facial', 'manicure', 'pedicure']
    },
    comments: String
});

module.exports = mongoose.model('Client', clientSchema); 