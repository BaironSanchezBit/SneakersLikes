const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    fec_crea: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Usuario',UsuarioSchema);