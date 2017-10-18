const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const altcoinSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    ticker: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    hash: {
        type: String,
        enum: ['SHA256', 'Scrypt', 'Ethash'],
    }

});

module.exports = mongoose.model('Altcoin', altcoinSchema);