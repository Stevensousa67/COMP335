var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// Must be after the previous line app = express();
var session = require('express-session'); // to use session


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use the session middleware
// configure session object to handle cookie
app.use(session({
    //proxy: true,
    secret: 'WebDev',
    //cookie: { maxAge: 60000 },
    resave:false,
    saveUninitialized: true,
    //cookie: { secure: app.get('env') === 'production' }
  }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
