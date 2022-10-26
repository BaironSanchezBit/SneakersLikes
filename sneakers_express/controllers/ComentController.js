const Coment = require("../models/coments")

exports.crearComentario = async (req, res) => {
    console.log(req.body);

    try {
        let coment;
        coment = new Coment(req.body);
        await coment.save();
        res.send(coment);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error');
    }
}
exports.obtenerComentEspecifico = async (req, res) => {   

    try {
        let coment_especifico = await Post.findById(req.params.id);

        if (!coment_especifico) {
            res.status(404).json({ msg: "El post solicitado no existe" })
        } else {
            res.json(coment_especifico)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error');
    }
}

exports.actualizarPost = async (req, res) => {

    const { name , coment } = req.body

    let coment2 = await Coment.findById(req.params.id)

    if (!coment2) {
        res.status(404).json({ msg: 'No existe el post especificado' })
    }

    coment2.name = name
    coment2.coment = coment

    coment2 = await Post.findOneAndUpdate({_id: req.params.id}, coment2, {new : true})
    res.json(coment2)
}

exports.borrarComent = async (req, res) => {

    try {
        let coment = await Coment.findById(req.params.id)

        if (!coment) {
            res.status(404).json({ msg: 'No existe el post especificado' })
        }

        await Coment.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'El post se elimino correctamente' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error');
    }
}

exports.obtenerPost = async (req, res) => {
    try {
        const coment = await Coment.find()
        res.json(coment)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error');
    }
}