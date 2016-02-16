var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

// in app.js this is: app.use('/ventures', ventures);


function Ventures(){
return knex('ventures');
};
function Bins(){
return knex('bins');
};
function Users(){
return knex('users');
};
/* GET home page. */
router.get('/', function(req, res, next) {
  Ventures().then(function (results) {

    console.log('this is working!! +' + results)
    res.render('ventures/index', {ventures: results, user: req.cookies.user});
  })
});

router.get('/:id', function(req, res, next){
 knex('bins').where('venture_id', req.params.id).join('users', 'bins.user_id', '=', 'users.id')
 .select()
 .then(function (resultJ) {
   Bins().where('venture_id', req.params.id).then(function (results) {
     console.log(results);
   res.render('ventures/show', {bins: resultJ, bins2: results, ventu_id: req.params.id, user: req.cookies.user})
 })
})
 .catch(function(err){
   console.log(err);
 })
})

// router.get('/:ven_id/bins/:bin_id/comments', function (req, res, next) {
//   Ventures().where('id', req.params.ven_id).first().then(function(result){
//     Bins().where('id', req.params.bin_id).first().then(function(resultB){
//       knex('comments')
//   .join('users', 'comments.user_id', '=', 'users.id')
//   .select().then(function (resultJ) {
//     res.render('comments/index', {venture: result, bin: resultB, joins: resultJ});


// router.get('/:ven_id', function(req, res, next) {
//  Bins().where('venture_id', req.params.ven_id).then(function (results) {
//    console.log(req.params)
//
//    Users().where('id', results.user_id).then(function(user){
//      console.log('this is user: ' + user);
//      res.render('ventures/show', { title: 'WELCOME TO THE BIN INDEX PAGE', ventu_id: req.params.ven_id, bins: results, user: user });
//    })
//  })
// });





module.exports = router;
