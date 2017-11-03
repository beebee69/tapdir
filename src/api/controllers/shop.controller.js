const httpStatus = require('http-status');
const Shop = require('../models/shop.model');


exports.index = async (req, res, next) => {
	try {
		const shops = await Shop.find();
		// res.hsttpStatus(httpStatus.OK);
		return res.json({
			success: true,
			data: shops,
		});
	} catch (error) {
		res.json( {
			error
		});
	}
}

/**
 * View Shops
 */
exports.view = async (req, res, next) => {
	try {
		const shops = await Shop.findById(req.params.id);
		res.status(httpStatus.OK);
		return res.json({
			success: true,
			data: shops,
		});
	}	catch (error) {
		res.json( {
			error
		});
	}
}

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

exports.update = async(req, res, next) => {
	try{
		const shop = await Shop.findById(req.params.id);
		const update = await Shop.update({_id: req.params.id}, req.body);
		
		return res.json({
			success: true,
			message: 'Shop Updated',
		});

	} catch(error) {
		return res.json(error);
	}	
}

exports.delete = async(req, res, next) => {
	try{
		const shop = await Shop.remove(req.params.id);
		return res.json({
			success: true,
			message: "Shop Deleted",
		});

	}	catch(error) {
		res.status(httpStatus.UNPROCESSABLE_ENTITY);
		return res.json({
			success: false,
			error,
		});
	}
}
