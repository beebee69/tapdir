const httpStatus = require('http-status');
const Message = require('../models/message.model');

/**
 * Create message
 */

exports.create = async(req, res, next) => {
    try {
        const message = new Message(req.body);
        const savedMessage = await message.save();
        res.status(httpStatus.CREATED);
        res.json({
            success: true,
			message: 'Message created',
        })

    } catch(error){
        return res.json({
            success: false,
            error,
        });
    }
}

/**
 * View Message
 */
exports.view = async(req, res, next) => {
	try {
		const messages = await Message.findById(req.params.id);
		res.status(httpStatus.OK);
		return res.json({
			success: true,
			data: messages,
		});
	}	catch (error) {
		res.json( {
			error
		});
	}
}

/**
 * Message Indexes
 */
exports.index = async(req, res, next)  => {
    try {
        const messages = await Message.find();
        res.status(httpStatus.OK);
        res.json({
            success: true,
            data: messages,
        });
        
    } catch (error) {
       res.json({
           success: false,
           error,
       }) 
    }
}

/**
 * Message Update
 */
exports.update = async(req, res, next) => {
    try{
        const Message = await Message.findById(req.params.id);
        const update = await Message.update({_id: req.params.id}, req.body);
        res.status(httpStatus.OK);
        
        return res.json({
            success: true,
            message: 'Message Updated',

        });
    } catch(error){
        return res.json({
            success: false,
            error,
        });
    }
}

/**
 * Message Delete
 */
exports.delete = async(req, res, next) => {
    try{
        const messages = await Message.remove(req.params.id);

        return res.json({
            success: true,
            message: 'Message Deleted',
        })
    } catch(error){
        res.status(httpStatus.UNPROCESSABLE_ENTITY);
        res.json({
            success: false,
            error,
        })
    }
}