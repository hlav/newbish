var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Ventures(){
return knex('ventures');
}

function Comments(){
return knex('comments');
}

function Bins(){
return knex('bins');
};

function Users(){
return knex('users');
};

// app.use('/ventures', comments);




module.exports = router;
