const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
	ClassName: {
		type: String,
		required: true
	},
	Level: {
		type: Number,
		required: true
	},
    AlumnisNumber: {
		type: Number,
        default:0,
	}
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;