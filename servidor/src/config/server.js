const port = 3200;

const bodyParser = require('body-parser');
const express = require('express');

const server = express();

// para toda requisição, usar o bodyParser para interpretar chegadas no formato urlencoded
server.use(bodyParser.json());

server.listen(port,function(){
    console.log('Servidor no ar!');
});

module.exports = server;