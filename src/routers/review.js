const express = require('express')
const Review = require('../models/review')
const router = new express.Router()

//for creating a user, probably won't use
router.post('/feedback', async (req, res) => {
    const review = new Review(req.body)

    try {
        await review.save()
        res.json({ status: 'ok', review })
    } catch (e) {
        res.json({ error: e.message })
    }
})

module.exports = router