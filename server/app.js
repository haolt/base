var express = require('express');
var app = express();
var db = require('./db');
global.__root   = __dirname + '/';

app.get('/', function (req, res) {
  res.status(200).send('API works.');
});

// var UserController = require(__root + 'user/UserController');
var UserController = require(__root + 'routes/user/UserController');
app.use('/users', UserController);

// var AuthController = require(__root + 'auth/AuthController');
var AuthController = require(__root + 'routes/auth/AuthController');
app.use('/auth', AuthController);

module.exports = app;
