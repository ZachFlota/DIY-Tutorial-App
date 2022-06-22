const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
    
})

module.exports = mongoose.model('Comment', commentSchema)