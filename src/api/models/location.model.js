const mongoose = require('mongoose');



const locationSchema = new mongoose.Schema({
    name:{
        type: String,
        max: 128,
        required:true,
    },
    zipCode:{
        type:String,
        max:128,
        required:true,
    },
    locationCord:
	{ 
		type: { type: String }, coordinates: [ ]
	},
    status:{
        type: Number,
       
    },
},
{
    timestamps:true,
});

module.exports = mongoose.model('Location', locationSchema);
