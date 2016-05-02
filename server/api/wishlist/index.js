'use strict';

var express = require('express');
var multiparty = require('connect-multiparty'),
  multipartyMiddleware = multiparty();
var controller = require('./wishlist.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', multipartyMiddleware, controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/show/:id', controller.destroy);
router.get('/show/:id', controller.showByUser);
router.get('/annonce/:id', controller.showByUserAnnonce);
module.exports = router;
