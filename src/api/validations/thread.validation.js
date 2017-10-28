const Joi       =   require('joi');
const Thread    =   require('../models/thread.model');

module.exports = {
    createThread: Joi.object().keys({
        startedBy: Joi.string(),
        startedWith: Joi.string(),
        status: Joi.number(),
    }),  
};