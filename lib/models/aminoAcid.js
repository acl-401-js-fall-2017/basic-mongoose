const mongoose = require('mongoose');
const {Schema} = mongoose;

const aASchema = new Schema({
    name: {
        type: String,
        required: true
    },
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
    abbrOther: String,
    polar: Boolean,
    sideChainFuncGroups: {
        type: [String],
        enum: ['nonpolar', 'hydroxyl', 'carboxyl', 'amine', 'amide', 'aromatic', 'sulfur', 'looped'],
        alias: 'groups'
    },
    features: [String],
    canonical: Boolean
});

module.exports = mongoose.model('amino-acid', aASchema);