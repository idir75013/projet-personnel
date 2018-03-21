var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', errors: [] });
});

router.post('/', function(request, response) {
  // exécuté lorsqu'est appelé post.html
  console.log(request.body)
  response.json(request.body)
});

module.exports = router;
