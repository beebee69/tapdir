const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/message.controller');

const {
  createMessage,
} = require('../../validations/message.validation');

const router = express.Router();

router.route('/create')
  .post(validate(createMessage), controller.create);

router.route('/index')
  .get(controller.index);

router.route('/view/:id')
  .get(controller.view);

router.route('/update/:id')
  .put(controller.update);

router.route('/delete/:id')
  .delete(controller.delete);
module.exports = router;