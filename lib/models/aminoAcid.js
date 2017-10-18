const mongoose = require('mongoose');
const {Schema} = mongoose;

const aASchema = new Schema({
    name: {
        type: String,
        required: true
    },
    abbrs: {
        abbr1: {
            type: String,
            uppercase: true,
            trim: true,
            match: /^[a-zA-Z]$/
        },
        abbr3: {
            type: String,
            lowercase: true,
            trim: true,
            match: /^[a-zA-Z]{3}$/
        },
        abbrOther: String
    },
    polar: Boolean,
    sideChainFuncGroup: {
        type: String,
        enum: {
            values: ['nonpolar', 'hydroxyl', 'carboxyl', 'amine', 'amide', 'aromatic', 'sulfur', 'looped'],
            message: 'invalid group: valid groups include [ nonpolar, hydroxyl, carboxyl, amine, amide, aromatic, sulfur, looped]'
        },
        alias: 'group'
    },
    features: [String],
    canonical: Boolean
});

module.exports = mongoose.model('amino-acid', aASchema);