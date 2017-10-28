const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/thread.controller');

const {
  createThread,
} = require('../../validations/thread.validation');


const router = express.Router();

router.route('/create')
  .post(validate(createThread), controller.create);


module.exports = router;