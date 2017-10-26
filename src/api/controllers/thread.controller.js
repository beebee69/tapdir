const httpStatus = require('http-status');
const Thread = require('../models/thread.model');

/**
 * Create Thread
 */

exports.create = async(req, res, next) => {
    try {
        const thread = new Thread(req.body);
        const savedThread = await thread.save();
        res.httpStatus(httpStatus.CREATED);

    } catch(error){
        return res.json(error);
    }
}