const httpStatus = require('http-status');
const Type = require('../models/type.model');

/**
 * Create New Type
 */

exports.create = async(req, res, next) => {
	try{
		const type = new Type(req.body);
        const savedType = await type.save();
		res.status(httpStatus.CREATED);
		res.json({
			success: true,
			message: 'Type is created',
		})

	} catch(error) {
		return res.json({
			success: false,
			error,
		});
	}	
}


/**
 * View Type
 */
exports.view = async(req, res, next) => {
	try {
		const types = await Type.findById(req.params.id);
		res.status(httpStatus.OK);
		return res.json({
			success: true,
			data: types,
		});
	}	catch (error) {
		res.json( {
			error
		});
	}
}
/**
 * Create Indexes of Types
 */
exports.index = async(req, res, next) => {
    try{
        const types = await Type.find();
        // res.hsttpStatus(httpStatus.OK);
        res.status(httpStatus.OK);
        return res.json({
            success: true,
            data: types,
        })
    } catch(error){
        res.json({
            success: false,
            error,
        })
    
    }
}
/**
 * Type Update
 */
exports.update = async(req, res, next) => {
    try{
        const types = await Type.findById(req.params.id);
        const update = await Type.update({_id: req.params.id}, req.body);
        res.status(httpStatus.OK);
        
        return res.json({
            success: true,
            message: 'Type Updated',

        });
    } catch(error){
        return res.json({
            success: false,
            error,
        });
    }
}
/**
 * Type Delete
 */
exports.delete = async(req, res, next) => {
    try{
        const types = await Type.remove(req.params.id);

        return res.json({
            success: true,
            message: 'types Deleted',
        })
    } catch(error){
        res.status(httpStatus.UNPROCESSABLE_ENTITY);
        res.json({
            success: false,
            error,
        })
    }
}