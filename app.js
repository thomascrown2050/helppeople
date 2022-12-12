var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
};

app.use(requestTime);

app.get('/user:address', (req, res) => {
  let responseText = 'Hello World!<br>'
  let userAddress = req.params.address
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
});

app.listen(3000);

/*
app.get("/", function (req, res) {

  import axios from 'axios';

  // Replace with your Alchemy API key:
  const apiKey = "demo";
  const output;
  
  const baseURL = `https://eth-mainnet.g.alchemy.com/v2/demo`;
  
  // Replace with the wallet address you want to query:
  const ownerAddr = "0x00000000219ab540356cbb839cbe05303d7705fa";
  
  // Replace with the token contract address you want to query:
  const tokenAddr = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  
  var data = JSON.stringify({
    "jsonrpc": "2.0",
    "method": "alchemy_getTokenBalances",
    "params": [
      `${ownerAddr}`,
      [
        `${tokenAddr}`
      ]
    ],
    "id": 42
  });
  
  var config = {
    method: 'post',
    url: baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    //This line converts the tokenBalance values from hex to decimal
    response.data["result"]["tokenBalances"][0]["tokenBalance"] = parseInt(response.data["result"]["tokenBalances"][0]["tokenBalance"], 16);
    console.log("Token balance for address\n", JSON.stringify(response.data.result, null, 2))
    output = JSON.stringify(response.data.result, null, 2);
  })
  .catch(function (error) {
    console.log(error);
  });

  res.send(output);

});

*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;


