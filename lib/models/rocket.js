const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rocketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    engines:[String],
    manufactures:[{
        company:String,
        role: String,
        location: String,
    }],
    dateLaunched:{
        type: Date,
        required: true
    },
    launchLocation: String,
    recovered: Boolean,
    launchNumber: {
        type: Number,
        min: 1,
        required: true
    }
});

module.exports = mongoose.model('Rocket', rocketSchema);