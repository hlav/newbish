
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')
var passport = require('passport')

var knex = require('../db/knex')

function User(){
return knex('users');
}


router.get('/facebook', passport.authenticate('facebook'))

router.get('/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/'}),
function(req, res, next){
  var useriD = req.user.fb_id
  if (req.user[0] !== undefined){
    User().select().where('username', req.user[0].username).then(function(results){
      res.cookie('user', results[0].id)
      res.redirect('/')

    })
  } else{
    User().select().where('fb_id', useriD).then(function(results){
      res.cookie('user', results[0].id)
      res.redirect('/auth/choose')
    })
  }
})

router.get('/signup', function(req, res, next) {
    res.render("auth/signup", {button_text: "sign up"});
});




router.get('/signout', function(req, res, next) {
  console.log('signout route');
  res.clearCookie("user");
  res.redirect("/");
});

router.get('/signin', function(req, res, next) {
    if (req.cookies.user){
      res.redirect("/");
    } else {
      res.render("auth/signin", {button_text: "sign in"});
    }
});
router.get('/signinError', function(req, res, next) {
    if (req.cookies.user){
      res.redirect("/");
    } else {
      res.render("auth/signinError", {button_text: "sign in"});
    }
});

router.get('/choose', function(req, res, next){
  var user = req.cookies.user
  res.render('auth/choose', {user: user})
})






module.exports = router;
