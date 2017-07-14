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

router.get('/cocktail', function(req, res, next) {
  res.render('pages/cocktail', { title: 'presentation_vote' });
});

var sample = {user_name: ''};
router.get('/cocktail/:user_name', function(req, res) {
  sample.user_name = req.params.user_name;
  res.render('pages/cocktail', { title: 'presentation_vote', user_name: sample.user_name });
});

// exports.geturl = function(url){
//   router.get('/cocktail/' + url, function(req, res, next) {
//     res.render('pages/cocktail', { title: 'presentation_vote' });
//   });
// };

module.exports = router;
