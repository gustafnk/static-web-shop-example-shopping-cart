var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

var shoppingCart = [];
router.get('/shopping-cart', function(req, res, next) {
  res.render('shopping-cart', { shoppingCartLength: shoppingCart.length, layout: false });
});

router.get('/shopping-cart-full', function(req, res, next) {
  res.render('shopping-cart-full', { shoppingCartLength: shoppingCart.length, layout: false });
});

router.post('/', function(req, res, next) {
  shoppingCart.push({});

  if (req.xhr) {
    res.send({ events: ['shopping-cart-item-added'] });
  } else {
    res.redirect(req.header('Referer') || '/');
  }
});

module.exports = router;
