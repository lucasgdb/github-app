const express = require('express');
const mongoose = require('mongoose');
const requireAll = require('require-dir');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/github-api', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

requireAll('./models');

app.use(express.json());
app.use(cors());
app.use('/api', require('./routes'));

app.listen(3001);
