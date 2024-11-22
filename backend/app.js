const express = require('express')
const cors = require('cors')
const db = require('./db/db')
const app = express()
const {readdirSync} = require('fs')

require('dotenv').config()

const PORT = process.env.PORT

// Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Routes
readdirSync('./routes').map((route) => {app.use('/api/v1', require(`./routes/${route}`))})







// Server
const server = ()  => {
    db()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

server()