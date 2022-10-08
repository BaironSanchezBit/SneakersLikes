const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fec_crea: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario',UsuarioSchema);