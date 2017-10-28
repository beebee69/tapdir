const Joi   =   require('joi')
const Shop  =   require('../models/type.model');

module.exports = {
   create: Joi.object().keys({
        name: Joi.string().max(128).required(),
        code: Joi.string().max(128).required(),
        status: Joi.string(),
   }),
};