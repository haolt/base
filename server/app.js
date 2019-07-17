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

var DivisionController = require(__root + 'routes/division/DivisionController');
app.use('/divisions', DivisionController);

var RequestController = require(__root + 'routes/request/RequestController');
app.use('/requests', RequestController);

var TypeController = require(__root + 'routes/request/type/TypeController');
app.use('/requests/types', TypeController);

// var AuthController = require(__root + 'auth/AuthController');
var AuthController = require(__root + 'routes/auth/AuthController');
app.use('/auth', AuthController);

module.exports = app;
