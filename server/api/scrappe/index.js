'use strict';

var express = require('express');
var controller = require('./scrappe.controller');

var router = express.Router();

router.get('/', controller.affichesearch);
router.post('/:name', controller.search);
//router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
