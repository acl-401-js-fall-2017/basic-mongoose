const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const citySchema = new Schema ({
    name:{type: String, required: true },
    weather: String,
    population: {type: Number, min: 10000, max:15000000 },
    attractions: [
        {
            name:{type: String, required: true},
            type:{
                type: String,
                enum:['bar', 'museum', 'park', 'street', 'theater'],
                required: true
            },
            price: String
        }
    ]
});

// Question: what is mongoose.model and what does it do?
module.exports= mongoose.model('City', citySchema);