const Joi   =   require('joi')
const Shop  =   require('../models/shop.model');

module.exports = {
    createShop: Joi.object().keys({
        name: Joi.string().max(128).required(),
        address: Joi.string().max(500).required(),
        locationId: Joi.string().required(),
        userId: Joi.string().required(),
        status: Joi.string(),
   }), 
};