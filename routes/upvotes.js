var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Bins(){
  return knex('bins')
}

router.post('/upvotes', function(req, res, next){
  Bins().where('id', req.body.id).increment('upvote', 1).then(function(result){
    res.redirect('/ventures/' + req.body.ven + '/bins/' + req.body.id)
  })
})

module.exports = router;
