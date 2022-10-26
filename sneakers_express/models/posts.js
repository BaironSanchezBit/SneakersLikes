const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    titleArticle: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    img2: {
        type: String,
        required: true
    },
    fec_crea: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

module.exports = mongoose.model('post',PostSchema);