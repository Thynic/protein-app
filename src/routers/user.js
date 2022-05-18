const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

//for creating a user, probably won't use
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

let token, user

router.post('/login', async (req, res) => {

    try {
        user = await User.findByCredentials(req.body.tc, req.body.password)
        token = await user.generateAuthToken()


        res.json({ status: 'ok', token })
    } catch (e) {
        res.json({ error: 'Bilgileriniz yanlış!'})
    }
})

router.get('/loginCreds', (req, res) => {
    res.json({
        user,
        token
    })
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

// router.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (e) {
//         res.status(500).send()
//     }
// })


//for profile
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router