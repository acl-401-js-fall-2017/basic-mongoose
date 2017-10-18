const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartoonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseYear: Number
});


module.exports = mongoose.model('Cartoon', cartoonSchema);