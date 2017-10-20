const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('soccer API' , () => {

    beforeEach(() => mongoose.connection.dropDatabase())

});