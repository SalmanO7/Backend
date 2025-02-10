require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('This is a test')
})
app.get('/login', (req, res) => {
    res.send('Login Form')
})
app.get("/about", (req, res) => {
    if (res) res.send("This is about page")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})