const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName : {
		type: String,
		required: [true, "First name is required"]
	},
	userName: {
		type: String,
		required: [true, "username is required"]	
	},
	password: {
		type: String,
		required: [true, "password is required"]	
	}
});

module.exports = mongoose.model("User", userSchema)
