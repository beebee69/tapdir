const httpStatus = require('http-status');
const Shop = require('../models/shop.model');

/**
 * Create New Shop
 */

exports.create = async(req, res, next) => {
	try{
		const shop = new Shop(req.body);
        const savedShop = await shop.save();
		res.httpStatus(httpStatus.CREATED);

	} catch(error) {
		return res.json(error);
	}	
}