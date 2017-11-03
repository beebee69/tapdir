const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/shop.controller');

const {
  createShop,
  updateShop,
  
} = require('../../validations/shop.validation');


const router = express.Router();

router.route('/index')
  .get(controller.index);

router.route('/view/:id')
  .get(controller.view);

router.route('/create')
  .post(validate(createShop), controller.create);
  
router.route('/update/:id')
  .put(controller.update);

router.route('/delete/:id')
  .delete(controller.delete);

module.exports = router;