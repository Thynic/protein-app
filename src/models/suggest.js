const mongoose = require('mongoose')

const suggestSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        // required: true,
    },

})

const suggest = mongoose.model('suggest', suggestSchema)

module.exports = suggest