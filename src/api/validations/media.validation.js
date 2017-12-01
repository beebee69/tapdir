const Joi       = require('joi');
const Media     = require('../models/media.model');

module.exports = {
    createMedia: Joi.object().keys({
        name: Joi.string().max(128).required(),
        userId: Joi.string().required(),
        shopId: Joi.string().required(),
        typeId: Joi.string().required(),
    }),
};