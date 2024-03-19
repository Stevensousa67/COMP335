var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

var multer = require('multer');
var upload = multer({ dest: 'uploadDir' });
router.post('/upload', upload.single('file_up'), function (req, res) {
  var message = "This will show up in your browser";
  res.send(message);
})

module.exports = router;
