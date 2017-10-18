const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{ type: String, required: true },
    author: String,
    dataPublished: Date,
    pages:{type: Number, min:1, required: true}
});


module.exports = mongoose.model('Book', bookSchema);