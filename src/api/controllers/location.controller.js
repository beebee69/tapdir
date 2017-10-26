const httpStatus = require('http-status');
const Location = require('../models/location.model');

/**
 * Create location
 */

exports.create = async(req, res, next) => {
    try {
        const location = new Location(req.body);
        const savedLocation = await location.save();
        res.httpStatus(httpStatus.CREATED);

    } catch(error){
        return res.json(error);
    }
}