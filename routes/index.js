var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  process.send('hello from worker with id: ' + process.pid);
  res.send({
    pid: process.pid
  });
});

router.get('/shutdown', function (req, res, next) {
  res.send({
    message: process.pid + " SIGKILL"
  });

  process.send({
    type: 'SIGKILL',
    pid: process.pid
  });
});

module.exports = router;