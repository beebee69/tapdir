const httpStatus = require('http-status');
const Profile = require('../models/profile.model');

/**
 * Create Profile
 */

exports.create = async(req, res, next) => {
    try {
        
        const profile = await (new Profile(req.body));
        const savedProfile = await profile.save();
        // res.status(httpStatus.CREATED);
        return res.json({
			success: true,
            message: 'Profile created',
            data: savedProfile,
		});
    } catch(error){
        return res.json(error);
    }
}
/**
 * View Profile
 */
exports.view = async(req, res, next) => {
	try {
		const profile = await Profile.findById(req.params.id);
		res.status(httpStatus.OK);
		return res.json({
			success: true,
			data: profile,
		});
	}	catch (error) {
		res.json( {
			error
		});
	}
}
/**
 * Create Indexes
 */
exports.index = async(req, res, next) => {
    try{
        const profiles = await Profile.find();
        // res.hsttpStatus(httpStatus.OK);
        res.status(httpStatus.OK);
        return res.json({
            success: true,
            data: profiles,
        })
    } catch(error){
        res.json({
            success: false,
            error,
        })
    
    }
}
/**
 * Profile Update
 */
exports.update = async(req, res, next) => {
    try{
        const profile = await Profile.findById(req.params.id);
        const update = await Profile.update({_id: req.params.id}, req.body);
        res.status(httpStatus.OK);
        
        return res.json({
            success: true,
            message: 'Profile Updated',

        });
    } catch(error){
        return res.json({
            success: false,
            error,
        });
    }
}
/**
 * Profile Delete
 */
exports.delete = async(req, res, next) => {
    try{
        const profile = await Profile.remove(req.params.id);

        return res.json({
            success: true,
            message: 'Profile Deleted',
        })
    } catch(error){
        res.status(httpStatus.UNPROCESSABLE_ENTITY);
        res.json({
            success: false,
            error,
        })
    }
}