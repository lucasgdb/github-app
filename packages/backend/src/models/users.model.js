const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  avatar_url: String,
  html_url: String,
  name: String,
  bio: String,
  public_repos: Number,
  followers: Number,
});

mongoose.model('users', userSchema);
