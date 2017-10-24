const Client = require('../../lib/models/client');
const { assert } = require('chai');

describe('ClientModel', () => {
    it('good model', () => {
        const client = new Client({
            name: 'Cheryl',
            phone: 1234567890,
            address: [{
                streetAddress: '42 west burnside st',
                city: 'Portland',
                state: 'OR'
            }],
            age: 55,
            services: ['massage', 'facial'],
            comments: 'I love this salon!'
        });
        client.validate();
    });

    it('age must be more than 18', () => {
        const client = new Client({
            age: 17
        });
        const { errors } = client.validateSync();
        assert.equal(errors.age.kind, 'min');
    });

    it('tests that name is required', () => {
        const client = new Client({
            phone: 1234567890
        });
        const { errors } = client.validateSync();
        assert.equal(errors.name.kind, 'required');
    });

    it('checks that number is not valid', () => {
        const client = new Client({
            phone: 123456
        });
        const { errors } = client.validateSync();
        assert.equal(errors.phone.kind, 'regexp');
    });

    it('checks that services are available', () => {
        const client = new Client({
            service: 'delivery'
        });
        const { errors } = client.validateSync();
        assert.equal(errors.service.kind, 'enum');
    });
});