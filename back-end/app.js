require('dotenv').config()
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const businessesRouter = require('./routes/businesses');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../front-end/build')));


app.use('/api/biz', businessesRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../front-end/build/index.html'));
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err)
  res.status(err.status || 500);
  res.json({
    error: req.app.get('env') === 'development' ? err : {},
    payload: null,
    message: "Unexpected error"
  });
});


module.exports = app;
