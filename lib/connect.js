const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = Promise;

const defaultUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/basic_mongoose';

module.exports = function(dbUri = defaultUri) {
    const promise = mongoose.connect(dbUri, {useMongoClient: true});

    mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection: ', dbUri);
    });

    mongoose.connection.on('error', err => {
        console.log('Mongoose default connection: ', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection: disconnected');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('mongoose default connection process terminated');
            process.exit(0);
        });
    });

    return promise;
};