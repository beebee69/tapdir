const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/thread.controller');

const {
  createThread,
} = require('../../validations/type.validation');


const router = express.Router();

router.route('/create')
  .post(controller.create);


module.exports = router;