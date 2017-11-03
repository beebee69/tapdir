const httpStatus = require('http-status');
const Thread = require('../models/thread.model');

/**
 * Create Thread
 */

exports.create = async(req, res, next) => {
    try {
        const thread = new Thread(req.body);
        const savedThread = await thread.save();
        res.httpStatus(httpStatus.CREATED);
        return res.json({savedThread, success: true});
    } catch(error){
        return res.json({status: false, error});
    }
}

exports.update = async(req, res, next) => {
    try {
        const thread = Thread.findById(req.params.id);
        const savedThread = await thread.update();
        res.httpStatus(httpStatus.UPDATED);
        return res.json({savedThread, success: true});
    } catch(error){
        return res.json({status: false, error});
    }
}

// exports.delete = async(req, res, next) => {
//     try {
//         const thread = Thread.findById(req.params.id);
//         const isDeleted = await thread.delete();
//         res.httpStatus(httpStatus.UPDATED);
//         return res.json({isDeleted, success: true});
//     } catch(error){
//         return res.json({status: false, error});
//     }
// }

// exports.read = async(req, res, next) => {
//     try {
//         const thread = Thread.findById(req.params.id);
//         res.httpStatus(httpStatus.READ);
//         return res.json({thread, success: true});
//     } catch(error){
//         return res.json({status: false, error});
//     }
// }
