var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Users(){
  return knex('users');
}

// router.get('/ventures', function(req, res, next) {
//   console.log('hitting middleware');
//   if (req.cookies.user){
//     next();
//   } else {
//     res.redirect("auth/signin");
//   }
// });

router.post('/users', function(req, res, next) {
  Users().insert(req.body).then(function(val){
    Users().where('username', req.body.username).first().then(function (result) {
      res.cookie("user", result.id);
      res.redirect("/");
    })
  });
});



router.post('/users/login', function(req, res, next) {
    Users().where({username: req.body.username, password: req.body.password}).first().then(function(found){
       if (found){  Users().where('username', req.body.username).first().then(function (result) {
          console.log('in the if')
           res.cookie("user", result.id);
           res.redirect("/");
         })
       } else{
         res.redirect("/auth/signinError");
       }
    })
});

router.post('/users/uName', function(req, res, next){
  Users().where('id', req.body.userId).update('username', req.body.uName).then(function(results){
    res.redirect('/')
  })
})


module.exports = router;
