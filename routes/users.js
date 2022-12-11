var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.render('cool',{
    'title': 'cool'
});
  alert('he he');
  res.send('you are so cool');
});


module.exports = router;
