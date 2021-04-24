import express from 'express'
import mongoose from 'mongoose'

import password from './config.js'

// Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:${password}@cluster0.co4vh.mongodb.net/ShowTelldb?retryWrites=true&w=majority`

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoint
app.get("/", (req, res) => res.status(200).send("Hello World"))

// Listener
app.listen(port, () => console.log(`Listenning On Local Host http://localhost:${port}`))