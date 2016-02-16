// var express = require('express');
// var router = express.Router();
// var app = express();
// var Ebay = require('ebay');
//
// router.get('/search', function (req, res, next) {
//   res.render('search');
// })
//
// module.exports = router;


<<<<<<< HEAD


// router.post('/:ven_id/bins/:bin_id/comments', function(req, res, next) {
//
//   Comments().insert(req.body).then(function(result){
//     res.redirect('/ventures/'+req.params.ven_id+'/bins/'+req.params.bin_id);
//   });
// });

// router.post('/:ven_id/bins/:bin_id/comments/:id/delete', function (req, res, next) {
//   Comments().where('id', req.params.id).del()
//   .then(function (result) {
//     res.redirect('/ventures/'+req.params.ven_id+'/bins/'+req.params.bin_id);
//   })
// })
=======


//
// function Users(){
// return knex('users');
// }
// router.get('/:ven_id/bins/:bin_id/comments', function (req, res, next) {
//   Ventures().where('id', req.params.ven_id).first().then(function(result){
//     Bins().where('id', req.params.bin_id).first().then(function(resultB){
//       knex('comments')
//   .join('users', 'comments.user_id', '=', 'users.id')
//   .select().then(function (resultJ) {
//     res.render('comments/index', {venture: result, bin: resultB, joins: resultJ});
// })
// })
// });
// });
// router.get('/:ven_id/bins/:bin_id/comments/new', function (req, res, next) {
//   Users().where('id', req.cookies.user).first().then(function (result) {
//     console.log(result);
//     var local = {venture_id: req.params.ven_id,
//       bin_id: req.params.bin_id};
//         console.log(local);
//       res.render('comments/new', {local: local, user: result});
//     })
//   })
//
// router.get('/:ven_id/bins/:bin_id/comments/new', function (req, res, next) {
//   Users().where('id', req.cookies.user).first().then(function (result) {
//     console.log(result);
//     var local = {venture_id: req.params.ven_id,
//       bin_id: req.params.bin_id};
//         console.log(local);
//       res.render('comments/new', {local: local, user: result});
//     })
//   })
//
// router.post('/:ven_id/bins/:bin_id/comments', function(req, res, next) {
