var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/about_me', function(req, res, next) {
  res.render('about_me', { title: 'About Me' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Resume' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/musings', function(req, res, next) {
  res.render('musings');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
