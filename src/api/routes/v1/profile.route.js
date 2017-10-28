const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/profile.controller');

const {
    createProfile,
} = require('../../validations/profile.validation');

const router = express.Router();

router.route('/create')
    .post(controller.create);

module.exports = router;