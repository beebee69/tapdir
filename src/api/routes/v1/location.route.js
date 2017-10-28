const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/location.controller');

const {
    createLocation,
} = require('../../validations/location.validation');


const router = express.Router();

router.route('/create')
    .post(controller.create);

module.exports = router;    