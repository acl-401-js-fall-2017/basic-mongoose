const express = require('express');
// const path = require('path');
const app = express();
const bodyParser= require('body-parser');


const publicDir = '/public';
app.use(express.static(publicDir));
app.use(bodyParser.json());

app.get('/crews', (req, res) => {
    res.send({
        routePath: '/crews',
        method: 'get',
        params: req.params,
        query: req.query
    });
});

app.post('/bar', (req, res) =>{
    res.send( req.body);
});

module.exports = app;