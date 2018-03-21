var express = require('express');
var router = express.Router();



router.get('/create', function(req, res, next) {
  res.render('user/create', {title: 'créer un nouvel utilisateur', errors:[]});
});

module.exports = router;
