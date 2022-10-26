const mongoose = require('mongoose')

const ComentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coment: {
        type: String,
        required: true
    },
    fec_crea: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Coment',ComentSchema);