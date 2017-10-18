const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rocketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    engines:[String],
    manufactures:[{
        company:{
            type: String,
            required: true,
        },
        role: String,
        location: String
    }],
    dateLaunched:{
        type: Date,
        required: true
    },
    launch:{
        location: String,
        recovered: Boolean
    },
    launchNumber: Number
});

module.exports = mongoose.model('Rocket', rocketSchema);