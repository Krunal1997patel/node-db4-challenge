const express = require('express');
const server = express();
const helmet = require('helmet');

server.use(helmet());

server.get('/', (req, res) => {
    res.send('You are up and runing')
})

module.exports = server;


