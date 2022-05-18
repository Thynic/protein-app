const express = require('express')
const Suggest = require('../models/suggest')
const router = new express.Router()

//for creating a user, probably won't use
router.post('/suggest', async (req, res) => {
    const suggestion = new Suggest(req.body)

    try {
        await suggestion.save()
        res.json({ status: 'ok', suggestion })
    } catch (e) {
        res.json({ error: e.message })
    }
})

module.exports = router