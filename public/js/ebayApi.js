var express = require('express');
var router = express.Router();
var app = express();

var Ebay = require('ebay')

var ebay = new Ebay({
  app_id: 'Galvaniz-8de6-4bc1-a262-d7d776da1555'
})

//  make request to Ebay Finding API
var params = {
  'OPERATION-NAME': 'findItemsByKeywords'
, 'keywords': 'star wars'
}

ebay.get('finding', params, function (err, data) {
  if(err) throw err

  console.log(JSON.stringify(data["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"][0]["galleryURL"][0]));
  console.log(JSON.stringify(data["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"][0]["title"][0]));
  console.log(JSON.stringify(data["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"][0]["sellingStatus"][0]["currentPrice"][0]["__value__"]));
  console.log(JSON.stringify(data["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"][0]["viewItemURL"][0]));
})
