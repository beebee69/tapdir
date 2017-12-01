const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
    startedBy: {
        type: String,
    },
    startedWith: {
        type: String,
    },
    status:{
        type: Number,
       
    },
},
{
    timestamps:true,
});

module.exports = mongoose.model('Thread', ThreadSchema);
