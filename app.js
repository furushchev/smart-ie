var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('./models');
var config = require('./config');

var app = express();

var mongo_options = {};
if (config.MONGO_USER && config.MONGO_PASS) {
  var mongo_options = {
    user: config.MONGO_USER,
    pass: config.MONGO_PASS
  };
}
if (config.MONGO_URI) {
  var mongo_uri = 'mongodb://' + config.MONGO_URI;
  if (config.MONGO_DBNAME) mongo_uri += '/' + config.MONGO_DBNAME;
  console.log('connect mongo to ' + mongo_uri + ' with auth', mongo_options);
  mongoose.connect(mongo_uri, mongo_options);
} else {
  console.log("connect mongo to localhost" + ' with auth', mongo_options);
  mongoose.connect('localhost', mongo_options);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

require('./routes').routing(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
