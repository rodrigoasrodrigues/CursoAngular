const express = require('express');

module.exports = function(server){
    //definir a URL base para todas as rotas
    const router = express.Router();
    server.use('/ws', router);

    //rotas relacionadas às operaçoes com eventos
    const Eventos = require('../ws/eventos/eventosService');

    Eventos.register(router, '/eventos');
}