const Joi       = require('joi');
const Profile   = require('../models/profile.model');

module.exports = {
    create: Joi.object().keys({
        firstName: Joi.string().max(128).required().trim(),
        secondName: Joi.string().max(128).required().trim(),
        cellNumber: Joi.string().max(14).required().trim(),
        address: Joi.string().max(512).required(),
        zipCode: Joi.string().max(128).required().trim(),
        userId: Joi.string().required(),
        status: Joi.number().required(),
    }),
};