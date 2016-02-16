var aws = require('aws-lib');
var prodAdv = aws.createProdAdvClient('AKIAJVTAUXOMIYDSV6JQ', 'YcCjk/BzE+r7/8xodhbSav7DaINQ25ltjQekeZcT', 'noobish-20');

//Gets item info using the ASIN code.
function fetchASIN(itemCode){
  var product = {IdType: 'ASIN', ItemId: itemCode, ResponseGroup: 'ItemAttributes'}
  prodAdv.call("ItemLookup", product, function(err, results) {
    var productName = results["Items"]["Item"]["ItemAttributes"]["Title"]
    var productUrl = results["Items"]["Item"]["DetailPageURL"]

  var prices = {IdType: 'ASIN', ItemId: itemCode, ResponseGroup: 'Offers'}
  prodAdv.call("ItemLookup", prices, function(err, results) {
    var lowNewPrice = results["Items"]["Item"]["OfferSummary"]["LowestNewPrice"]["FormattedPrice"]

  var pics = {IdType: 'ASIN', ItemId: itemCode, ResponseGroup: 'Images'}
  prodAdv.call("ItemLookup", pics, function(err, image) {
    var medImage = image["Items"]["Item"]["MediumImage"]["URL"]
      console.log(productName);
      console.log('Lowest New Price = ' + lowNewPrice);
      console.log(medImage);
      console.log(productUrl);
      })
    })
  })
}

//Gets item info using product description
function fetchItem(itemSearch){
var options = {SearchIndex: "All", Keywords: itemSearch}

prodAdv.call("ItemSearch", options, function(err, result) {
  var product = [
    result["Items"]["Item"][0]["ASIN"],
    result["Items"]["Item"][0]["ItemAttributes"]["Title"],
    result["Items"]["Item"][1]["DetailPageURL"]
  ]

  var prices = {IdType: 'ASIN', ItemId: product[0], ResponseGroup: 'Offers'}
 prodAdv.call("ItemLookup", prices, function(err, results) {
   var lowNewPrice = results["Items"]["Item"]["OfferSummary"]["LowestNewPrice"]["FormattedPrice"]

   var pics = {IdType: 'ASIN', ItemId: product[0], ResponseGroup: 'Images'}
 prodAdv.call("ItemLookup", pics, function(err, image) {
   var medImage = image["Items"]["Item"]["MediumImage"]["URL"]
     console.log(product[1]);
     console.log('Lowest New Price = ' + lowNewPrice);
     console.log(medImage);
     console.log(product[2]);
     })
   })
 })
}


var obj = {}
  module.exports =  function(itemSearch, cb){
  var options = {SearchIndex: "All", Keywords: itemSearch}

  prodAdv.call("ItemSearch", options, function(err, result) {
    if (result["Items"]["Item"] == undefined){
      return cb('error')
    }
    else{
    var product = [
      result["Items"]["Item"][0]["ASIN"],
      result["Items"]["Item"][0]["ItemAttributes"]["Title"],
      result["Items"]["Item"][1]["DetailPageURL"]
    ]

    var prices = {IdType: 'ASIN', ItemId: product[0], ResponseGroup: 'Offers'}
   prodAdv.call("ItemLookup", prices, function(err, results) {
     var lowNewPrice = results["Items"]["Item"]["OfferSummary"]["LowestNewPrice"]["FormattedPrice"]

     var pics = {IdType: 'ASIN', ItemId: product[0], ResponseGroup: 'Images'}
   return prodAdv.call("ItemLookup", pics, function(err, image) {
     var medImage = image["Items"]["Item"]["MediumImage"]["URL"]
       obj.productName = product[1]
       obj.lowPrice = lowNewPrice
       obj.img = medImage;
       obj.url = product[2]
       obj.asin = product[0]
       return cb(obj)
       })
     })
   }
 })
}
      // fetchASIN('B00ZUPOMDQ')

  // fetchItem(brand1.val() + ' ' + name1.val())
  // function test(x){
  //   console.log('this is working, x is ' + x)
  // }
