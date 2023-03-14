var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const version = process.version;
  res.render('index', { title: 'Express', version });
});

module.exports = router;
