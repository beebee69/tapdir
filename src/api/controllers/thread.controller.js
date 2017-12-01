const httpStatus = require('http-status');
const Thread = require('../models/thread.model');

/**
 * Create Thread
 */

exports.create = async(req, res, next) => {
    try {
        const thread = new Thread(req.body);
        const savedThread = await thread.save();
        res.status(httpStatus.CREATED);
        return res.json({
            success: true,
            savedThread, 
        });
    } catch(error){
        return res.json({
            status: false, 
            error
        });
    }
}

/**
 * View Thread
 */
exports.view = async(req, res, next) => {
	try {
		const Thread = await Thread.findById(req.params.id);
		res.status(httpStatus.OK);
		return res.json({
			success: true,
			data: Thread,
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
        const Threads = await Thread.find();
        // res.hsttpStatus(httpStatus.OK);
        res.status(httpStatus.OK);
        return res.json({
            success: true,
            data: Threads,
        })
    } catch(error){
        res.json({
            success: false,
            error,
        })
    
    }
}

/**
 * Thread Update
 */
exports.update = async(req, res, next) => {
    try{
        const Thread = await Thread.findById(req.params.id);
        const update = await Thread.update({_id: req.params.id}, req.body);
        res.status(httpStatus.OK);
        
        return res.json({
            success: true,
            message: 'Thread Updated',

        });
    } catch(error){
        return res.json({
            success: false,
            error,
        });
    }
}

/**
 * Thread Delete
 */
exports.delete = async(req, res, next) => {
    try{
        const Thread = await Thread.remove(req.params.id);

        return res.json({
            success: true,
            message: 'Thread Deleted',
        })
    } catch(error){
        res.status(httpStatus.UNPROCESSABLE_ENTITY);
        res.json({
            success: false,
            error,
        })
    }
}