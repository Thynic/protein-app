const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        // required: true,
    },

})

const review = mongoose.model('review', reviewSchema)

module.exports = review