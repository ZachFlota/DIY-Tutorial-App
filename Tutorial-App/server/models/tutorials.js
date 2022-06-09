const mongoose = require('mongoose')

const tutorialSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String },
    step: { type: String },
    image: { type: String },
    
})

module.exports = mongoose.model('Tutorial', tutorialSchema)