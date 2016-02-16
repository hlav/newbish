var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var validate = require('../lib/validations')

function Bins(){
return knex('bins');
};
function Comments(){
return knex('comments');
}
function Ventures(){
return knex('ventures');
}
function Kits(){
return knex('kits')
}



router.get('/:ven_id/bins/new', function(req, res, next) {
  Ventures().where('id', req.params.ven_id).first().then(function (result) {
    console.log(req.params.ven_id);
  res.render('bins/new', {venture: result, user: req.cookies.user});
  })
});


router.get('/:ven_id/bins/:id', function(req, res, next) {
  Bins().where('id', req.params.id).then(function (result) {
    Kits().where('bin_id',req.params.id).then(function(payload){
      res.render('bins/show', { title: 'WELCOME TO THE BIN SHOW PAGE', bin: result[0], kit: payload, user: req.cookies.user });
    })
  })
});

router.get('/:ven_id/bins/:id/edit', function(req, res, next) {
  Bins().where('id', req.params.id).first().then(function (result) {
  res.render('bins/edit', { bin: result, user: req.cookies.user });
  })
});


// router.post('/:ven_id/bins', function(req, res, next) {
//  Bins().insert(req.body).then(function(result){
//    res.redirect('/ventures/'+ req.params.ven_id +'/bins');
//  });
// });



router.post('/:ven_id/bins/:id', function (req, res, next) {
  Bins().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/ventures/'+ req.params.ven_id);
  });
});

router.post('/:ven_id/bins/:id/upvote', function (req, res, next) {
  console.log( req.params.id + ' upvoted!!');
});

router.get('/:ven_id/bins/:id/upvote', function (req, res, next) {
  console.log('get')
})

router.post('/:ven_id/bins/:id/delete', function (req, res, next) {
  Bins().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/ventures/' + req.params.ven_id);
  })
})

// router.get('/:ven_id/bins/:id', function(req, res, next) {
//   Bins().where('id', req.params.id).first().then(function (result) {
//   // console.log(result);
//   res.render('bins/show', { title: 'WELCOME TO THE BIN SHOW PAGE', bin: result, user: req.cookies.user });
//   })
// });

// router.get('/:ven_id/bins/:id/edit', function(req, res, next) {
//   Bins().where('id', req.params.id).first().then(function (result) {
//   // console.log(result);
//   res.render('bins/edit', { bin: result, user: req.cookies.user });
//   })
// });



router.post('/:ven_id/bins', function(req, res, next) {
  Bins().insert(req.body).then(function(result){
    Bins().select().where({title: req.body.title, venture_id: req.params.ven_id}).first().then(function(result){
      res.redirect('/ventures/'+ req.params.ven_id +'/bins/' + result.id + '/kits/new');
    })
  });
});

//
// router.post('/:ven_id/bins/:id', function (req, res, next) {
//   Bins().where('id', req.params.id).update(req.body)
//   .then(function(result){
//     res.redirect('/ventures/'+ req.params.ven_id + '/bins');
//   });
// });

// router.post('/:ven_id/bins/:id/delete', function (req, res, next) {
//   Bins().where('id', req.params.id).del()
//   .then(function (result) {
//     res.redirect('/ventures');
//   })
// })

router.get('/:ven_id/bins/undefined/kits', function(res, req, next){
  res.redirect('/' + req.params.ven_id + '/bins/' + req.cookies.bin + '/kits/new')
})

module.exports = router;
