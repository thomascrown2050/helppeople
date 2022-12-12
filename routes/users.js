var express = require('express');
var axios = require("axios");
//const { response } = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('you are so cool');
});

router.get("/test", (req, res, next) => {
  console.log("'/test' call");
  axios.get("https://api.neoscan.io/api/main_net/v1/get_all_nodes")
     .then(response=> res.json(data))
     .catch(err => res.secn(err));
})

module.exports = router;
