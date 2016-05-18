var express = require('express');
var router = express.Router();
var path = require('path');

//create add calculations

router.post('/add', function (req, res) {
  var x = parseInt(req.body.x);
  var y = parseInt(req.body.y);
  var answer = {
    answer : x + y
  };
  res.send(answer);
})

module.exports = router;
