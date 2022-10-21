const Post = require("../models/posts")

exports.crearPost = async(req, res) => {
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

exports.obtenerPost = async(req, res) => {

    try {
        const post = await Post.find();
        res.json(post)
    } catch (error) {
        console.log(error)

        res.status(500).send('Ups... hubo un error');
    }
}