const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	address: {
		type: String,
		required: true,
	},
	locationId:{
		type:String,
		required: true,
	},
	userId:{
		type:String,
		required:true
	},
	status:{
		type: Number,
	},
}, {
	timestamps: true,
});

module.exports = mongoose.model('Shop', shopSchema);