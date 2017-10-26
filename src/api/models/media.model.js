const mongoose = require('mongoose');



const mediaSchema = new mongoose.Schema({
    name:{
        type: String,
        max: 128,
        required:true,
    },
    userId:{
        type: String,
       
    },
    shopId:{
        type: String,
    },
    typeId:{
        type: String,
       
    },
    status:{
        type: Number,
       
    },
},
{
    timestamps:true,
});

module.exports = mongoose.model('Media', mediaSchema);
