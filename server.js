const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/connect');

const server = http.createServer(app);
const port = process.env.port || 8080;
connect();

server.listen(port, () => {
    console.log('server is running on port', port);
});