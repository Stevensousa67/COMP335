var express = require('express');
var router = express.Router();
var path = require('path'); //added new

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// added new
router.get('/form', function(req, res, next) {
  res.sendFile(path.join(__dirname,'..', 'public','form.html'));
});

router.post('/form', function(req, res) {
  //console.log (req.body);
  res.json({ 
    first: "Your First name is " + req.body.first,
    last: " Your Last name is " + req.body.last
  });
});

router.get('/madlibs', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'madlibs.html'));
});

router.post('/madlibs', function (req, res) {
  res.json({
    place: req.body.place,
    adjective: req.body.adjective,
    noun: req.body.noun,
    building: req.body.building,
    name1: req.body.name1,
    name2: req.body.name2,
    name3: req.body.name3,
    object: req.body.object,
    adverb: req.body.adverb,
    verb: req.body.verb,
  });
});

module.exports = router;
