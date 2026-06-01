var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const requestLogger = require('./middlewares/requestLogger');
const errorMiddleware = require('./middlewares/error.middleware');



var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(requestLogger);

app.use('/', indexRouter);

app.use(errorMiddleware);

module.exports = app;
