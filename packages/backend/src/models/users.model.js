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
    login: { ...defaultString, unique: true },
    avatar_url: defaultString,
    url: defaultString,
    html_url: defaultString,
    type: defaultString,
    name: defaultString,
    company: String,
    blog: String,
    location: String,
    email: String,
    bio: String,
    public_repos: defaultNumber,
    public_gists: defaultNumber,
    followers: defaultNumber,
    following: defaultNumber,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('users', userSchema)
