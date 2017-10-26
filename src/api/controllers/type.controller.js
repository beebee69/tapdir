const httpStatus = require('http-status');
const Type = require('../models/type.model');

/**
 * Create New Shop
 */

exports.create = async(req, res, next) => {
	try{
		const type = new Type(req.body);
        const savedType = await type.save();
		res.httpStatus(httpStatus.CREATED);

	} catch(error) {
		return res.json(error);
	}	
}