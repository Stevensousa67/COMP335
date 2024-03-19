var express = require('express');
var moment = require('moment'); // formatting time

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/session
router.get('/session', function(req, res) {
  // HTTP request has a session object by installing express-session
  var sess = req.session;
  // create a javascript variable views
  if (sess.views) {
    sess.views++;
  } else {
    // initialize the new variable to 1
    sess.views = 1;
  }
  console.log (sess.views);

  res.json({ 
    views: sess.views,
    dates: moment().format('MMMM Do YYYY, h:mm:ss a')// March 14th 2022, 1:35:25 pm
  })
});
module.exports = router;
