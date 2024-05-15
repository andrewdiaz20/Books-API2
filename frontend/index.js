require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    app.send('<h1>404 Page not found</h1>')
})

app.listen(process.env.PORT)
