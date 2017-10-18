const http =require('http');
const app = require('express');
const connect = require('.lib/connect');

// comment out because hard code for example
// also 27019 for my linux machine

connect();

// const url = 'mongodb://localhost:27019/pirates';
// mongodb.connect(url)
//     .then(() => console.log('mongo connected', url))
//     .catch(() => console.log('mongo Failed', err));

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    //eslint-disable-next-line
    console.log('server running on', server.address().port);
});
