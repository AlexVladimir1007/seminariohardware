//mario alexander perez mendez
//0801199410973
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mario' });
});

module.exports = router;
