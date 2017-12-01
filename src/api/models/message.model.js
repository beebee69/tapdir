const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    senderId:{
        type: String,
        required: true,
       
    },
    status:{
        type: Number,
       
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Message', messageSchema);
