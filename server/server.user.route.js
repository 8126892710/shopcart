const app = require('express').Router();
var userCtrl = require('./server.user.controller')

app.post('/addUser', userCtrl.createUser);



module.exports = app;