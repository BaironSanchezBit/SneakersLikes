const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    name: String,
    password: String,
    email:  String,
    fec_crea: Date
});

module.exports = mongoose.model('Usuario',UsuarioSchema);