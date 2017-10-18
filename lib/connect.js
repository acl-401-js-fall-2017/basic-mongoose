/* eslint no-console: "off" */


const mongoose = require('mongoose');
mongoose.Promise = Promise;

const defaultUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/pokemon';

module.exports = function(dbUri = defaultUri) {
    
    const promise = mongoose.connect(dbUri, { useMongoClient: true });

    // When successfully connected
    mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection open to: ' + dbUri);
    });

    // If the connection throws an error
    mongoose.connection.on('error', err => {
        console.log('Mongoose default connection error: ' + err);
    });

    // When connection is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection disconnected');
    });

    // Side note: what is SIGINT?
    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
        mongoose.connection.close( () => {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

    return promise;

};