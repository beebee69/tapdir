const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/shop.controller');
const router = express.Router();

router.route('/create')
  .post(controller.create);


module.exports = router;