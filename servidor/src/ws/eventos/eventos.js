// cria o schema
const restful = require('node-restful');
const mongoose = restful.mongoose;

// definir o schema para o evento
const eventoSchema = new mongoose.Schema({
    descricao: {type: String,required: true},
    data: {type: Date,required: true},
    preco: {type: Number,required: true}
});

module.exports = restful.model('evento', eventoSchema);