'use strict';

var express = require('express');
var multiparty = require('connect-multiparty'),
  multipartyMiddleware = multiparty();
var controller = require('./announce.controller');
var router = express.Router();

router.get('/', controller.index);
router.get('/premium', controller.premium);
router.get('/:id', controller.show);
router.post('/', multipartyMiddleware,controller.attribution, controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.put('/show/:id', controller.update);
router.patch('/show/:id', controller.update);
router.delete('/show/:id', controller.destroy);
router.get('/show/:id', controller.showByUser);
router.get('/title/:title', controller.showByTitle);
router.get('/premiumUpdate/:id', controller.findAndUpdate);
router.get('/underCategory/:underCategory', controller.showByUnderCategory);
module.exports = router;
