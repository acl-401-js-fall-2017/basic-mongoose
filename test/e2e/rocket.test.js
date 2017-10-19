const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('rockets rest API', () => {

    beforeEach(() => mongoose.connection.dropDatabase());

});