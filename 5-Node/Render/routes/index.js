var express = require('express');
var router = express.Router();
var path = require('path');

// Connect to process.env.DATABASE_URL when your app initializes:
// Read only reference value (const)
// get only Client class from pg package
const Client = require('pg').Client;

// create an instance from Client
const client = new Client({
  connectionString: process.env.DATABASE_URL
});

// connect to the DATABASE_URL
client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET madlibs page. */
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

/* GET books page. */
router.get('/books', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'books.html'));
});

router.get('/booksOut', function (req, res, next) {
  // client object enables issuing SQL queries
  client.query('SELECT * FROM book', function (err, result) {
    if (err) { next(err); }
    res.json(result.rows);
    console.log(result.rows);
  });
});

/* GET cars page. */
router.get('/cars', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'cars.html'));
});

router.get('/carsOut', function (req, res, next) {
  // client object enables issuing SQL queries
  client.query('SELECT * FROM cars', function (err, result) {
    if (err) { next(err); }
    res.json(result.rows);
    console.log(result.rows);
  });
});

module.exports = router;