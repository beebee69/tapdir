const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/message.controller');

const {
  createMessage,
} = require('../../validations/message.validation');

const router = express.Router();

router.route('/create')
  .post(validate(createMessage), controller.create);


module.exports = router;