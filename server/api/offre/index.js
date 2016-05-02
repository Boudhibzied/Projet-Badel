'use strict';

var express = require('express');
var multiparty = require('connect-multiparty'),
  multipartyMiddleware = multiparty();
var controller = require('./offre.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', multipartyMiddleware, controller.mail, controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/:id/Updateannonce', controller.Updateannonce);

module.exports = router;
