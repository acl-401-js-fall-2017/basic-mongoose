const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creatureSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    creatureType: String,

    color: {
        type: String,
        enum: ['red', 'blue', 'black', 'green', 'white', 'colorless']
    },

    power: {
        type: Number,
        min: 0,
        required: true
    },

    toughness: {
        type: Number,
        min: 0,
        required: true
    },

    abilities: {
        type: String,
        enum: ['flying', 'hexproof', 'deathtouch', 'trample', 'first strike'],
    },

    protectionFrom: {
        type: String,
        enum: ['red', 'blue', 'black', 'green', 'white', 'colorless']
    },

    diesToRemoval: Boolean

});

module.exports = mongoose.model('Creatures', creatureSchema);