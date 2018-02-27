var express = require('express');
var router  = express.Router();

router.get('/', function(req, res, next) {
  setTimeout(() => {
    res.send('33秒経過');
  }, 33000);
});

module.exports = router;
