// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', async (req, res, next) => {
//   const db = require("../db");
//   const Users = db.Mongoose.model('users', db.UserSchema, 'users');

//   const docs = await Users.find({}).lean().exec();
//   res.render('index', { docs });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../db')
/* GET home page. */

router.get('/', function (req, res, next) {
  // res.render('index', { title: 'express'})
  const docs = Users.find({}).lean().exec();
  res.render('index', { docs });
})

module.exports = router;
