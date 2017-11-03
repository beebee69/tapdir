const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/thread.controller');

const {
  createThread,
  updateThread,
  deleteThread,
} = require('../../validations/thread.validation');

const router = express.Router();

router.route('/create')
  .post(validate(createThread), controller.create);

router.route('/update/:id')
  .put(validate(updateThread), controller.update);

// router.route('/delete/:id')
//   .put(validate(deleteThread), controller.delete);

// router.route('/:id')
//   .put(controller.read);


module.exports = router;