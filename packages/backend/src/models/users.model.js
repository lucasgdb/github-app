const mongoose = require('mongoose')
const Schema = mongoose.Schema

const defaultString = {
    type: String,
    required: true
}

const defaultNumber = {
    type: Number,
    required: true
}

const userSchema = new Schema({
    _login: defaultString,
    _avatar_url: defaultString,
    _url: defaultString,
    _html_url: defaultString,
    _type: defaultString,
    _name: defaultString,
    _company: defaultString,
    _blog: defaultString,
    _location: defaultString,
    _email: String,
    _bio: defaultString,
    _public_repos: defaultNumber,
    _public_gists: defaultNumber,
    _followers: defaultNumber,
    _following: defaultNumber,
    _createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('users', userSchema)
