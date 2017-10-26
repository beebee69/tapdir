const httpStatus = require('http-status');
const Profile = require('../models/profile.model');

/**
 * Create Profile
 */

exports.create = async(req, res, next) => {
    try {
        const profile = new Profile(req.body);
        const savedProfile = await profile.save();
        res.httpStatus(httpStatus.CREATED);

    } catch(error){
        return res.json(error);
    }
}