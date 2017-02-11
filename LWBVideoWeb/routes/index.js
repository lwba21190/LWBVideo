var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'LWB视频' });
});

router.get('/series', function(req, res, next) {
  res.render('series', { title: 'LWB电视剧' });
});

router.get('/variety', function(req, res, next) {
  res.render('variety', { title: 'LWB综艺' });
});

router.get('/movie', function(req, res, next) {
  res.render('movie', { title: 'LWB电影' });
});

router.get('/sport', function(req, res, next) {
  res.render('sport', { title: 'LWB体育' });
});

module.exports = router;
