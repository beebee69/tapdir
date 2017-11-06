const httpStatus = require('http-status');
const Location = require('../models/location.model');

/**
 * Create location
 */

exports.create = async(req, res, next) => {
    try {
        const location = new Location(req.body);
        const savedLocation = await location.save();
        res.status(httpStatus.CREATED);
        res.json({
            success: true,
            message: 'Location Created',
        })

    } catch(error){
        return res.json({
            success: false,
            error
        });
    }
}

/**
 * View Location
 */
exports.view = async(req, res, next) => {
	try {
		const locations = await Location.findById(req.params.id);
		res.status(httpStatus.OK);
		return res.json({
			success: true,
			data: locations,
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
        const locations = await Location.find();
        // res.hsttpStatus(httpStatus.OK);
        res.status(httpStatus.OK);
        return res.json({
            success: true,
            data: locations,
        })
    } catch(error){
        res.json({
            success: false,
            error,
        })
    
    }
}
/**
 * Location Update
 */
exports.update = async(req, res, next) => {
    try{
        const locations = await Location.findById(req.params.id);
        const update = await Location.update({_id: req.params.id}, req.body);
        res.status(httpStatus.OK);
        
        return res.json({
            success: true,
            message: 'Location Updated',

        });
    } catch(error){
        return res.json({
            success: false,
            error,
        });
    }
}
/**
 * Locations Delete
 */
exports.delete = async(req, res, next) => {
    try{
        const locations = await Location.remove(req.params.id);
        
        return res.json({
            success: true,
            message: 'location Deleted',
        })
    } catch(error){
        res.status(httpStatus.UNPROCESSABLE_ENTITY);
        res.json({
            success: false,
            error,
        })
    }
}