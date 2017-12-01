const mongoose = require('mongoose');


const mediaSchema = new mongoose.Schema({
    name:{
        type: String,
        max: 128,
        required:true,
    },
    userId:{
        type: String,
        required: true,
       
    },
    shopId:{
        type: String,
        required: true,
    },
    typeId:{
        type: String,
        required: true,        
       
    },
    status:{
        type: Number,
       
    },
},
{
    timestamps:true,
});

module.exports = mongoose.model('Media', mediaSchema);
