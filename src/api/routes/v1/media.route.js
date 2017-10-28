const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/media.controller');

const {
    createMedia,
} = require('../../validations/media.validation');

const router = express.Router();

router.route('/create')
    .post(validate(createMedia), controller.create);

module.exports = router;