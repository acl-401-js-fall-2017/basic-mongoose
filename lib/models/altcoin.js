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
        USD: {
            type: Number,
            required: true
        }, 
        hr24: {
            percentChange: Number,
            volumeUSD: Number 
        }
    },
    hash: {
        type: String,
        enum: ['SHA256', 'Scrypt', 'Ethash']
    }

});

module.exports = mongoose.model('Altcoin', altcoinSchema);