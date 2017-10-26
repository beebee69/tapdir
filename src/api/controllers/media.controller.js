const httpStatus = require('http-status');
const Media = require('../models/media.model');

/**
 * Create media
 */
exports.create = async(req, res, next) => {
    try{
        const media = new Media(req.body);
        const savedMedia = await media.save();
        res.httpStatus(httpStatus.CREATED);
    }
    catch(error){
        return res.json(error);
    }
}