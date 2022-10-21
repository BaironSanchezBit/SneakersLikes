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
    fec_crea: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Post',PostSchema);