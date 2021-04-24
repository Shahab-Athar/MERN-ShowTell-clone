import express from 'express'
import mongoose from 'mongoose'

import password from './config.js'

const app = express()
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:${password}@cluster0.co4vh.mongodb.net/ShowTelldb?retryWrites=true&w=majority`

app.get("/", (req, res) => res.status(200).send("Hello World"))

app.listen(port, () => console.log(`Listenning On Local Host http://localhost:${port}`))

// LLa4v80RhBZhSVBx