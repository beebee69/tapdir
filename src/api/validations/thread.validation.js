const Joi       =   require('joi');
const Thread    =   require('../models/thread.model');

module.exports = {
    create: Joi.object().keys({
        startedBy: Joi.string(),
        startedWith: Joi.string(),
        status: Joi.Number(),
    }),  
};