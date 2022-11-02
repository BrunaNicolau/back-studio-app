const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/back-studio-app');

const userSchema = new mongoose.Schema({
  username: String,
  email: String
}, { collection: 'users' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }