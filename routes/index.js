var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Readers Hub' });
});
router.get('/about',function(req,res,next){
  res.render('about', {title: 'about'});
});
router.get('/Teaching',function(req,res,next){
  res.render('Teaching', {title: 'Teaching'});
});
router.get('/contact',function(req,res,next){
  res.render('contact', {title: 'contact'});
});
router.get('/lokesewa',function(req,res,next){
  res.render('lokesewa', {title: 'lokesewa'});
});
router.get('/register',function(req,res,next){
  res.render('register', {title: 'register'});
});
router.get('/Login',function(req,res,next){
  res.render('Login', {title: 'Login'});
});
router.get('/Courses',function(req,res,next){
  res.render('Courses', {title: 'Courses'});
});
module.exports = router;
