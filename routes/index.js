var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.use(function (req, res, next) {
  var send = res.send;
  res.send = function (data) {
    console.log("Response:" + data + "\n\n");
    send.call(this, data);
  };
  console.log("Request" + JSON.stringify(req.body));
  next();
});


module.exports = router;
