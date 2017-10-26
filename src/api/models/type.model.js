const mongoose = require('mongoose');



const typeSchema = new mongoose.Schema({
    name:{
        type: String,
        max: 128,
        required:true,
    },
    code:{
        type:String,
        max:128,
        required:true,
    },
   
    status:{
        type: Number,
       
    },
},
{
    timestamps:true,
});

module.exports = mongoose.model('Type', typeSchema);
