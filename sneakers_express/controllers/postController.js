const Post = require("../models/posts")

exports.crearPost = async (req, res) => {
    console.log(req.body);

    try {
        let post;
        post = new Post(req.body);
        await post.save();
        res.send(post);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error');
    }
}
exports.obtenerPostEspecifico = async (req, res) => {

    try {
        let post_especifico = await Post.findById(req.params.id);

        if (!post_especifico) {
            res.status(404).json({ msg: "El post solicitado no existe" })
        } else {
            res.json(post_especifico)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error');
    }
}

exports.actualizarPost = async (req, res) => {

    const { titleArticle, post, img } = req.body

    let post2 = await Post.findById(req.params.id)

    if (!post2) {
        res.status(404).json({ msg: 'No existe el post especificado' })
    }

    post2.titleArticle = titleArticle
    post2.post = post
    post2.img = img

    post2 = await Post.findOneAndUpdate({_id: req.params.id}, post2, {new : true})
    res.json(post2)
}

exports.borrarPost = async (req, res) => {

    try {
        let post = await Post.findById(req.params.id)

        if (!post) {
            res.status(404).json({ msg: 'No existe el post especificado' })
        }

        await Post.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'El post se elimino correctamente' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error');
    }
}

exports.obtenerPost = async (req, res) => {
    try {
        const publication = await Post.find()
        res.json(publication)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error');
    }
}