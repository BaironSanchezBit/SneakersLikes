const Usuario = require("../models/usuarios")

exports.crearUsuario = async(req, res) => {
    console.log(req.body);

    try {
        let usuario;

        usuario = new Usuario(req.body);

        await usuario.save();

        res.send(usuario);
    } catch (error) {
        console.log(error)

        res.status(500).send('Ups... hubo un error');
    }
}

exports.obtenerUsuario = async(req, res) => {

    try {
        const usuario = await Usuario.find();
        res.json(usuario)
    } catch (error) {
        console.log(error)

        res.status(500).send('Ups... hubo un error');
    }
}