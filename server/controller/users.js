const express = require('express');
const _ = require('lodash');

const users = express.Router({mergeParams: true});

const {User} = require('../models/user');


//Lvl -> accessLevel Enum:[Admin:0, OfficeAdmin: 1, User:2]

//Create (lvl:0)
users.post('/', (req, res));

//Read me (lvl:2)
users.get('/me', (req, res));

//Login (lvl:2)
users.post('/login', (req, res));

//Read all (lvl:0)
users.get('/all', (req, res));

//Read actuals (lvl:1)
users.get('/actuals', (req, res));

//Update user (lvl:2)
users.patch('/me', (req, res));

//Delete group (lvl:0)
users.delete('/group/:id', (req, res));

//Delete user (lvl: 0)
users.delete('/:id', (req, res));

module.exports = users;