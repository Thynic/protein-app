const path = require('path')
const express = require('express')
const hbs = require('hbs')

require('./db/mongoose')
const userRouter = require('./routers/user')
const reviewRouter = require('./routers/review')

const app = express()
const port = process.env.PORT || 3000

//paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//handlers
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(userRouter)
app.use(reviewRouter)

app.get('', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('nonauthpage')
})

app.get('/main', (req, res) => {
    res.render('authpage')
})

app.get('/feedback', (req, res) => {
    res.render('feedback')
})

app.get('/achievements', (req, res) => {
    res.render('achievements')
})

app.get('/suggest', (req, res) => {
    res.render('suggest')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/committee', (req, res) => {
    res.render('committee')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})