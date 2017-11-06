const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/type.controller');

const {
  createType,

} = require('../../validations/type.validation');


const router = express.Router();

router.route('/create')
  .post(validate(createType), controller.create);

router.route('/index')
  .get(controller.index);

router.route('/view/:id')
  .get(controller.view);

router.route('/update/:id')
  .put(controller.update);

router.route('/delete/:id')
  .delete(controller.delete);

module.exports = router;