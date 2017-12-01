const httpStatus = require('http-status');
const Media = require('../models/media.model');

/**
 * Create media
 */
exports.create = async(req, res, next) => {
    try{
        const media = new Media(req.body);
        const savedMedia = await media.save();
        res.status(httpStatus.CREATED);
        res.json({
            success: true,
            message: 'Media has been created',
        })
    }
    catch(error){
        return res.json({
            success: false,
            error,
        });
    }
}

/**
 * View Media
 */
exports.view = async(req, res, next) => {
	try {
		const media = await Media.findById(req.params.id);
		res.status(httpStatus.OK);
		return res.json({
			success: true,
			data: media,
		});
	}	catch (error) {
		res.json( {
			error
		});
	}
}

/**
 * Media Indexes
 */
exports.index = async(req, res, next)  => {
    try {
        const media = await Media.find();
        res.status(httpStatus.OK);
        res.json({
            success: true,
            data: media,
        });
        
    } catch (error) {
       res.json({
           success: false,
           error,
       }) 
    }
}

/**
 * Media Update
 */
exports.update = async(req, res, next) => {
    try{
        const media = await Media.findById(req.params.id);
        const update = await Media.update({_id: req.params.id}, req.body);
        res.status(httpStatus.OK);
        
        return res.json({
            success: true,
            message: 'Media Updated',

        });
    } catch(error){
        return res.json({
            success: false,
            error,
        });
    }
}

/**
 * Media Delete
 */
exports.delete = async(req, res, next) => {
    try{
        const media = await Media.remove(req.params.id);

        return res.json({
            success: true,
            message: 'Media Deleted',
        })
    } catch(error){
        res.status(httpStatus.UNPROCESSABLE_ENTITY);
        res.json({
            success: false,
            error,
        })
    }
}