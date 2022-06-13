const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tutorialSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true },
    step: { type: String, required: true },
    image: { type: String },
    
}, {
    collection: 'tutorials'
})

module.exports = mongoose.model('Tutorial', tutorialSchema)