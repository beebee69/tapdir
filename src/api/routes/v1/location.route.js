const express = require('express');
const validate = require('express-validation');
const router = express.Router();
const controller = require('../../controllers/location.controller');


router.route('/create')
    .post(controller.create);

module.exports = router;    