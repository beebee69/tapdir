const Joi       = require('joi');
const Message   = require('../models/message.model');

module.exports = {
    createMessage: Joi.object().keys({
        content: Joi.string().required(),
        senderId: Joi.string(),
        status: Joi.number().required(),
    }),
};