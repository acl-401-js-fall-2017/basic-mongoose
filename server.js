const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/connect');
require('dotenv').config();

connect();

const server = http.createServer(app);
const port = process.env.PORT || 3030;

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});