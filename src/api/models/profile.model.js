const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        max: 128,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        max: 128,
        required: true,
        trim: true,
    },
    cellNumber: {
        type: String,
        max: 14,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        max: 512,
        required: true, 
    },
    zipCode: {
        type: String,
        max: 128,
        required: true,
    },
    userId: {
        type: String,

    },
    status: {
        type: Number,
        },
    }, {
        timestamps: true,
});

module.exports = mongoose.model('Profile', profileSchema);