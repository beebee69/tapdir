const Joi       = require('joi');
const Location  = require('../models/location.model');

module.exports = {
    createLocation: Joi.object().keys({
        name: Joi.string().max(128).required(),
        zipCode: Joi.string().max(128).required(),
        locationCord: Joi.string().required(),
        status: Joi.number(),
    }),
};