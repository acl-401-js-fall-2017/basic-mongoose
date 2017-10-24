const connect = require('../../lib/connect');
const url = 'mongodb://localhost:27017/players-test';
const mongoose = require('mongoose');

before(() => connect(url));    
after(() => mongoose.connection.close());