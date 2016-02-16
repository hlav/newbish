var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var fetchASIN = require('../public/js/amazonApi.js')
var fetchItem = require('../public/js/amazonApiItem.js')

function Bins(){
return knex('bins');
};

function Kits(){
return knex('kits');
};

router.get('/ventures/:ven_id/bins/:bin_id/kits/new', function(req, res, next){
  Bins().where('id', req.params.bin_id).first().then(function(result){
    res.render('kits/new', {result: result, user: req.cookies.user, ven: req.params.ven_id, bin: req.params.bin_id})
  })
})

router.get('/ventures/:ven_id/bins/:bin_id/kits/newError', function(req, res, next){
  Bins().where('id', req.params.bin_id).first().then(function(result){
    res.render('kits/newError', {result: result, user: req.cookies.user, ven: req.params.ven_id, bin: req.params.bin_id})
  })
})

router.post('/ventures/:ven_id/bins/:bin_id/kits', function(req, res, next){
  var asin = req.body.asin;
  var binish = req.body.bin
  res.cookie('bin', req.body.bin)
  var brand = req.body.brand1
  if (brand !== undefined){
    var query = req.body.brand1 + req.body.name1
    fetchItem(query, function (itemData) {
      console.log("*****DATA***");
      console.log(itemData);
      if (itemData == 'error'){
        res.redirect('/ventures/' + req.params.ven_id + '/bins/' + req.cookies.bin + '/kits/newError')
      }
      else{
      var obj = {}
      obj.item = itemData.productName
      obj.url = itemData.url
      obj.asin = itemData.asin
      obj.image = itemData.img
      obj.price = itemData.lowPrice
      obj.bin_id = binish
      Kits().insert(obj).then(function(result){
        res.redirect('/ventures/' + req.params.ven_id + '/bins/' + binish)
      })
    }
    })
  }
  else{
    fetchASIN(asin, function (itemData) {
      console.log("*****DATA***");
      console.log(itemData);
      var obj = {}
      if (itemData == 'error'){
        res.redirect('/ventures/' + req.params.ven_id + '/bins/' + req.cookies.bin + '/kits/newError')
      }
      else{
      obj.item = itemData.productName
      obj.url = itemData.url
      obj.asin = itemData.asin
      obj.image = itemData.img
      obj.price = itemData.lowPrice
      obj.bin_id = binish
      Kits().insert(obj).then(function(result){
        res.redirect('/ventures/' + req.params.ven_id + '/bins/' + binish)
      })
    }
    })
  }
})

module.exports = router;
