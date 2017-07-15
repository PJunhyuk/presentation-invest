var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'presentation_vote' });
});

/* make route to invest page */
router.get('/invest', function(req, res, next) {
  res.render('pages/invest', { title: 'presentation_vote' });
});

/* make route to invest-list page */
router.get('/invest/list', function(req, res, next) {
  res.render('pages/invest-list', { title: 'presentation_vote' });
});

/* make route to result page */
router.get('/invest/result', function(req, res, next) {
  res.render('pages/invest-result', { title: 'presentation_vote' });
});

module.exports = router;
