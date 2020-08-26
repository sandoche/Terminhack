var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hack', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.write("Thinking...");
  sendAndSleep(res, 1);
});

module.exports = router;

var sendAndSleep = function (response, counter) {
  if (counter > 10) {
    response.end();
  } else {
    response.write(" ;i=" + counter);
    counter++;
    setTimeout(function () {
      sendAndSleep(response, counter);
    }, 1000)
  };
};