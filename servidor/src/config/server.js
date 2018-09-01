const port = 3200;

const bodyParser = require('body-parser');
const express = require('express');

const server = express();

const allowCors = require('./cors');

// para toda requisição, usar o bodyParser para interpretar chegadas no formato urlencoded
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port,function(){
    console.log('Servidor no ar!');
});

module.exports = server;