const httpStatus = require('http-status');
const Message = require('../models/message.model');

/**
 * Create message
 */

exports.create = async(req, res, next) => {
    try {
        const message = new Message(req.body);
        const savedMessage = await message.save();
        res.httpStatus(httpStatus.CREATED);

    } catch(error){
        return res.json(error);
    }
}