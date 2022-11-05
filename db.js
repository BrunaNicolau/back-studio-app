// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/back-studio-app');

// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String
// }, { collection: 'users' }
// );

// module.exports = { Mongoose: mongoose, UserSchema: userSchema }

const mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (error, connection) => {
  if (error) return console.log(error);
  global.connection = connection.db('studio-app')
  console.log('conectou')
});

module.exports = {}