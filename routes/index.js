var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

var shoppingCart = [];
router.get('/shopping-cart', function(req, res, next) {
  res.render('shopping-cart', { shoppingCartLength: shoppingCart.length });
});

router.post('/', function(req, res, next) {
  shoppingCart.push({});

  res.redirect(req.header('Referer') || '/');
});

module.exports = router;
