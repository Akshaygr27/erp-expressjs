var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("erp backend");
});

router.get('/error', function(req, res, next) {
  throw new Error("Test Error")
});

module.exports = router;
