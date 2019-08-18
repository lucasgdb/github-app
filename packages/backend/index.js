const express = require('express')
const mongoose = require('mongoose')
const requireAll = require('require-dir')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost:27017/github-api', { useNewUrlParser: true })
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
requireAll('./src/models')

app.use(express.json())
app.use(cors())
app.use('/api', require('./src/routes'))

app.listen(3001, () => console.log('Server initialized on 3001'))
