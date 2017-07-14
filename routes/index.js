var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'presentation_vote' });
});

/* make route to blend page */
router.get('/blend', function(req, res, next) {
  res.render('pages/blend', { title: 'presentation_vote' });
});

/* make route to blended-list page */
router.get('/blended/list', function(req, res, next) {
  res.render('pages/blended-list', { title: 'presentation_vote' });
});

module.exports = router;
